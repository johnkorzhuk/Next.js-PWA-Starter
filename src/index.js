/* eslint-disable no-console */
import express from "express";
import next from "next";
import url from "url";
import path from "path";

import config from "./config/constants";
import mwConfig from "./config/middleware";
import apiRoutes from "./modules/index";

const app = next(config.default.NEXT);
const handle = app.getRequestHandler();

const prepare = async () => {
  try {
    await app.prepare();
  } catch (error) {
    console.log("Failed to prepare Next.js app");
    throw error;
  }

  const server = express();

  mwConfig(server);

  apiRoutes(server, app);

  server.get("*", (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === `/${config.default.SW_FILE_NAME}.js`) {
      const filePath = path.join(__dirname, ".next", pathname);

      app.serveStatic(req, res, filePath);
    } else {
      handle(req, res, parsedUrl);
    }
  });

  server.listen(config.default.PORT, err => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(`
        Server running on port: ${config.default.PORT}
        ---
        Running in ${process.env.NODE_ENV}
      `);
    }
  });
};

prepare().catch(err => {
  console.log(err);
});

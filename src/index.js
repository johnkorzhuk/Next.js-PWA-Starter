/* eslint-disable no-console */

import express from "express";
import next from "next";
import url from "url";
import path from "path";

import config from "./config/constants";
import mwConfig from "./config/middleware";
import apiRoutes from "./modules/index";

// const express = require("express");
// const next = require("next");
// const url = require("url");
// const path = require("path");

// const config = require("./config/constants");
// const mwConfig = require("./config/middleware");
// const apiRoutes = require("./modules/index");

const app = next(config.default.NEXT);
const handle = app.getRequestHandler();

// app
//   .prepare()
//   .then(() => {
//     const server = express();

//     // mwConfig.default(server, app);

//     // apiRoutes.default(server, app);

//     server.get("*", (req, res) => {
//       const parsedUrl = url.parse(req.url, true);
//       const { pathname } = parsedUrl;
//       console.log(pathname, `/${config.default.SW_FILE_NAME}.js`);
//       if (pathname === `/${config.default.SW_FILE_NAME}.js`) {
//         const filePath = path.join(__dirname, ".next", pathname);
//         console.log({ filePath });
//         app.serveStatic(req, res, filePath);
//       } else {
//         handle(req, res, parsedUrl);
//       }
//     });

//     server.listen(config.default.PORT, err => {
//       if (err) {
//         throw err;
//       } else {
//         // eslint-disable-next-line no-console
//         console.log(`
//         Server running on port: ${config.default.PORT}
//         ---
//         Running in ${process.env.NODE_ENV}
//       `);
//       }
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });

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

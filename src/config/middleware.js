// eslint-disable-next-line import/no-extraneous-dependencies
import morgan from "morgan";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

export default server => {
  if (isProd) {
    server.use(compression());
    server.use(helmet());
  }

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  // server.use((...args) => {
  //   handleServiceWorker(...args, app);
  // });
  // server.use(
  //   session({
  //     store: new FirebaseStore({
  //       database: firebase.database()
  //     }),
  //     secret: 'superS3cretPass',
  //     resave: true,
  //     saveUninitialized: true,
  //     cookie: { maxAge: 259200000 }
  //   })
  // );

  if (isDev) {
    server.use(morgan("dev"));
  }
};
// eslint-disable-next-line import/no-extraneous-dependencies
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
// const compression = require("compression");
// const helmet = require("helmet");
// const { join } = require("path");
// const { parse } = require("url");

// const config = require("./constants");

// const isDev = process.env.NODE_ENV === "development";
// const isProd = process.env.NODE_ENV === "production";

// const handleServiceWorker = (req, res, next, app) => {
//   const { pathname } = parse(req.url);
//   console.log("handlesq", pathname, `/${config.default.SW_FILE_NAME}.js`);
//   if (pathname === `/${config.default.SW_FILE_NAME}.js`) {
//     const filePath = join(__dirname, ".next", pathname);
//     // console.log(filePath);
//     app.serveStatic(req, res, filePath);
//   } else {
//     next();
//   }
// };

// function initMw(server, app) {
//   if (isProd) {
//     server.use(compression());
//     server.use(helmet());
//   }

//   server.use(bodyParser.json());
//   server.use(bodyParser.urlencoded({ extended: true }));
//   server.use((...args) => {
//     handleServiceWorker(...args, app);
//   });
//   // server.use(
//   //   session({
//   //     store: new FirebaseStore({
//   //       database: firebase.database()
//   //     }),
//   //     secret: 'superS3cretPass',
//   //     resave: true,
//   //     saveUninitialized: true,
//   //     cookie: { maxAge: 259200000 }
//   //   })
//   // );

//   if (isDev) {
//     server.use(morgan("dev"));
//   }
// }

// exports.default = initMw;

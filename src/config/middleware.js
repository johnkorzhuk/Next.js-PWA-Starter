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

  if (isDev) {
    server.use(morgan("dev"));
  }
};

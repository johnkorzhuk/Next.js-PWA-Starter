const devConfig = {
  NEXT: {
    dev: process.env.NODE_ENV === "development",
    // directory in which the server looks for the .next file. Relative to server file.
    dir: "./src/app"
  }
};

const testConfig = {};

const prodConfig = {
  NEXT: {
    dev: process.env.NODE_ENV !== "production",
    dir: "./dist"
  }
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
  SW_FILE_NAME: "service-worker"
};

function envConfig(env) {
  switch (env) {
    case "development":
      return devConfig;

    case "test":
      return testConfig;

    default:
      return prodConfig;
  }
}

const config = {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
};

exports.default = config;

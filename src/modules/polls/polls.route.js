import { Router } from "express";

import * as pollsController from "./polls.controller";

const routes = new Router();

export default app => {
  routes.get("/:id", pollsController.renderPollIdPage(app));
  return routes;
};

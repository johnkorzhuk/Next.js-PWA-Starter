// import userRoutes from "./users/user.route";
import pollsRoutes from "./polls/polls.route";

export default (server, app) => {
  // server.use('/api/v1/users', userRoutes);
  server.use("/polls", pollsRoutes(app));
};

// const pollsRoutes = require("./polls/polls.route");

// exports.default = (server, app) => {
//   // server.use('/api/v1/users', userRoutes);
//   server.use("/polls", pollsRoutes.default(app));
// };

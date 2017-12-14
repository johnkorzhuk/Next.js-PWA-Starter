// import userRoutes from "./users/user.route";
import pollsRoutes from "./polls/polls.route";

export default (server, app) => {
  // server.use('/api/v1/users', userRoutes);
  server.use("/polls", pollsRoutes(app));
};

export function renderPollIdPage(app) {
  return (req, res) => {
    app.render(req, res, "/polls/:id");
  };
}

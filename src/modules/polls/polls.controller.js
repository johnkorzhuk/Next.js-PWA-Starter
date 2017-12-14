export function renderPollIdPage(app) {
  return (req, res) => {
    app.render(req, res, "/polls/:id");
  };
}

// function renderPollIdPage(app) {
//   return (req, res) => {
//     app.render(req, res, "/polls/:id");
//   };
// }

// exports.renderPollIdPage = renderPollIdPage;

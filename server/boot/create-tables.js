module.exports = function (app) {
  app.dataSources.aws.automigrate("contact", function (err) {
    if (err) throw err;
  });
};

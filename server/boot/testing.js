module.exports = function (app) {
  const isNeedRunning = true;
  if (isNeedRunning) {
    setTimeout(() => {
      testEmail();
    }, 1000);
  }

  const testEmail = async () => {
    app.models.Email.send(
      {
        from: "test@test.com",
        to: "hainn2009@gmail.com",
        subject: "This is test email",
        html: "<h1>Hello World</h1>",
      },
      (err, result) => console.log("error", err, "result ", result)
    );
  };
};

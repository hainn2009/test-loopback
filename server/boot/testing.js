const { calculateEmailContent } = require("../utils/utils");
module.exports = function (app) {
  app.get("/helloworld", (req, res, next) => {
    res.send("Hello World");
  });

  const isNeedRunning = false;
  if (isNeedRunning) {
    setTimeout(() => {
      testEmail();
      // const result = calculateEmailContent()
      // console.log(result)
    }, 1000);
  }

  const testEmail = () => {
    app.models.Email.send(
      {
        from: "test@test.com",
        to: "hainn2009@gmail.com",
        subject: "This is test email",
        html: calculateEmailContent(),
      },
      (err, result) => console.log("error", err, "result ", result)
    );
  };
};

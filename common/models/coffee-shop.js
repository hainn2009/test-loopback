"use strict";

module.exports = function (Coffeeshop) {
  Coffeeshop.createNew = async (msg) => {
    return { message: "Hello " + msg };
  };
  Coffeeshop.getWithOtherInfo = async () => {
    const coffeeShops = await Coffeeshop.find({
      include: { reviews: "reviewer" },
    });
    return coffeeShops;
  };
  Coffeeshop.sendMail = (from, to, subject, html, cb) => {
    // console.log(options);
    //const { from, to, subject, html };
    console.log(from);
    console.log(to);
    console.log(subject);
    console.log(html);

    Coffeeshop.app.models.Email.send(
      { from, to, subject, html },
      (err, result) => console.log(err, result)
    );
    cb(null, "Send mail successfully!");
  };

  //   Coffeeshop.remoteMethod("sendMail", {
  //     accepts: { arg: "options", type: "options" },
  //     returns: { arg: "greeting", type: "string" },
  //   });
  //   Coffeeshop.remoteMethod({''

  //   })
};

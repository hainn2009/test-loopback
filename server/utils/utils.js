const { UPDATE_STATUS } = require("./emailTemplate");
const payload1 = require("./payload");

const additionFields1 = [
  {
    step: "Pickup Date Confirmed",
    fields: ["newStatusName", "pickUpConfirmDate", "updatedAt"],
  },
];
module.exports.calculateEmailContent = (
  updateStatusTemplate = UPDATE_STATUS.html,
  additionFields = additionFields1,
  payload = payload1
) => {
  let addedContent;
  additionFields.map((step) => {
    if (step.step === payload.newStatusName) {
      addedContent = step.fields.reduce(
        (prev, fieldName) => prev + `${fieldName}: ${payload[fieldName]}\n`,
        ""
      );
    }
  });
  const index = updateStatusTemplate.indexOf("...");
  const result = [
    updateStatusTemplate.slice(0, index),
    addedContent,
    updateStatusTemplate.slice(index + 3),
  ].join("");
  return result;
};

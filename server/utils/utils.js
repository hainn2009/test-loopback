const { UPDATE_STATUS } = require("./emailTemplate");
const payload1 = require("./payload");

const additionFields1 = [
  {
    stepName: "Pickup Date Confirmed",
    fields: [
      { id: "newStatusName", name: "New Status Name" },
      { id: "pickUpConfirmDate", name: "Pick Up Confirm Date" },
      { id: "updatedAt", name: "Update At" },
    ],
  },
];
module.exports.calculateEmailContent = (
  updateStatusTemplate = UPDATE_STATUS.html,
  additionFields = additionFields1,
  payload = payload1
) => {
  let addedContent;
  const fieldsNeedToAdd = additionFields.find(
    (step) => step.stepName === payload.newStatusName
  );
  if (fieldsNeedToAdd) {
    addedContent = fieldsNeedToAdd.fields.reduce(
      (prev, field) =>
        prev + `<b>${field.name}</b>: ${payload[field.id]}<br />`,
      ""
    );
    addedContent =
      '<div style=" padding: 10px;"><p>Additional Information:</p><p style="border:1px solid gray;padding:10px">' +
      addedContent +
      "</p></div>";
  } else addedContent = "";
  const result = updateStatusTemplate.replace(
    "##addititonalInformation##",
    addedContent
  );

  return result;
};

const { calculateEmailContent } = require("../utils/utils");
const ExcelJS = require("exceljs");

module.exports = function (app) {
  app.get("/helloworld", (req, res, next) => {
    res.send("Hello World");
  });

  const isNeedRunning = false;
  if (isNeedRunning) {
    setTimeout(() => {
      // testEmail();
      // const result = calculateEmailContent()
      // console.log(result)
      testFunc();
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
  const testFunc = () => {
    const wb = new ExcelJS.Workbook();

    // Add Worksheets to the workbook
    var ws = wb.addWorksheet("Sheet 1");
    var ws2 = wb.addWorksheet("Sheet 2");

    // // Create a reusable style
    // var style = wb.createStyle({
    //   font: {
    //     color: "#FF0800",
    //     size: 12,
    //   },
    //   numberFormat: "$#,##0.00; ($#,##0.00); -",
    // });

    // ws.addDataValidation({
    //   type: "list",
    //   allowBlank: false,
    //   sqref: "C2:C10",
    //   prompt: "Choose from dropdown",
    //   error: "Invalid choice was chosen",
    //   // formulas: ["=$B$1:$B$10"],
    //   formulas: ["new, completed, cancel"],
    // });

    // ws.getCell("C2").dataValidation = {
    //   type: "list",
    //   allowBlank: false,
    //   formulae: ['"One,Two,Three,Four"'],
    // };

    ws.columns = [
      { header: "Id", key: "id", width: 10 },
      { header: "Name", key: "name", width: 32 },
      { header: "D.O.B.", key: "DOB", width: 10, outlineLevel: 1 },
    ];

    ws.addRow(["id", "name"]);
    ws.addRow({ id: "01", name: "Hai" });
    ws.addRow(["why", "tai sao"]);

    let values = ["one 1", "two 2", "three 3"];
    values = '"' + values.join(",") + '"';
    console.log(values);

    for (let row = 2; row <= 1000; row++) {
      ws.getCell("C" + row).dataValidation = {
        type: "list",
        allowBlank: true,
        // formulae: ['$P$1:$P$'+ (dropDownData.length)],
        // formulae: ['"One 1,Two,Three,Four"'],
        formulae: [values],
        showErrorMessage: true,
        errorStyle: "error",
        errorTitle: "Error",
        error: "Value must be from the drop down list",
      };
    }

    // ws.row(1).filter();

    // Set value of cell A1 to 100 as a number type styled with paramaters of style
    // ws.cell(1, 1).number(100).style(style);

    // Set value of cell B1 to 200 as a number type styled with paramaters of style
    // ws.cell(1, 2).number(200).style(style);

    // Set value of cell C1 to a formula styled with paramaters of style
    // ws.cell(1, 3).formula("A1 + B1").style(style);

    // Set value of cell A2 to 'string' styled with paramaters of style
    // ws.cell(2, 1).string("string").style(style);

    // // Set value of cell A3 to true as a boolean type styled with paramaters of style but with an adjustment to the font size.
    // ws.cell(3, 1)
    //   .bool(true)
    //   .style(style)
    //   .style({ font: { size: 14 } });

    // wb.write("Excel.xlsx");
    wb.xlsx.writeFile("test.xlsx").then((res) => console.log("write done"));
  };
};

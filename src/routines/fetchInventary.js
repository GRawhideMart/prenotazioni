var xlsxj = require("xlsx-to-json");

xlsxj(
  {
    input: "inventary.xlsx",
    output: "inventary.json",
  },
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  }
);

const fs = require("fs");

const saveToJSON = (data, fileName) => {
  fs.writeFileSync(fileName, JSON.stringify(data, null, 2), {
    encoding: "utf-8",
  });
};

module.exports = {
  saveToJSON,
};

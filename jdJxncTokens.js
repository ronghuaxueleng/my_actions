// {"farm_jstoken":"749a90f871adsfads8ffda7bf3b1576760","timestamp":"1610165423873","phoneid":"42c7e3dadfadsfdsaac-18f0e4f4a0cf"}
let JxncTokens = [];

var fs = require("fs");
fs.readFile("jxncTokens.json", "utf8", function (err, data) {
  if (err) console.log(err);
  JxncTokens = JSON.parse(data); //读取的值
});

// JxncTokens = [...new Set(JxncTokens.filter(item => !!item))]
for (let i = 0; i < JxncTokens.length; i++) {
  const index = i + 1 === 1 ? "" : i + 1;
  exports["JXNCTOKEN" + index] = JxncTokens[i];
}

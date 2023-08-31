// 获得京喜农场token 用于财富岛提现
// {"farm_jstoken":"749a90f871adsfads8ffda7bf3b1576760","timestamp":"1610165423873","phoneid":"42c7e3dadfadsfdsaac-18f0e4f4a0cf"}
let JxncTokens = [];

var fs = require("fs");
let JxncTokensString = fs.readFileSync("jxncTokens.json", "utf8");
if (JxncTokensString) {
  JxncTokens = JSON.parse(JxncTokensString)
}

// JxncTokens = [...new Set(JxncTokens.filter(item => !!item))]
for (let i = 0; i < JxncTokens.length; i++) {
  const index = i + 1 === 1 ? "" : i + 1;
  exports["JXNCTOKEN" + index] = JxncTokens[i];
}

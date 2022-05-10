// //格式化时间的方法
// function dateFormat(dateStr) {
//   const dt = new Date(dateStr);
//   const y = dt.getFullYear();
//   const m = padZero(dt.getMonth() + 1);
//   const d = padZero(dt.getDate());
//   const hh = padZero(dt.getHours());
//   const mm = padZero(dt.getMinutes());
//   const ss = padZero(dt.getSeconds());

//   return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
// }

// //补零函数
// function padZero(n) {
//   return n > 9 ? n : "0" + n;
// }

// //定义转义html字符串的函数
// function htmlEscape(htmlStr) {
//   return htmlStr.replace(/<|>|"|&/g, (match) => {
//     switch (match) {
//       case "<":
//         return "&lt;";
//       case ">":
//         return "&gt;";
//       case '"':
//         return "&quot;";
//       case "&":
//         return "&amp;";
//     }
//   });
// }

// //定义还原html字符串的函数
// function htmlUnEscape(htmlStr) {
//   return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
//     switch (match) {
//       case "&lt;":
//         return "<";
//       case "&gt;":
//         return ">";
//       case "&quot;":
//         return '"';
//       case "&amp;":
//         return "&";
//     }
//   });
// }

const dateFormat = require("./src/dateFormat");
const htmlEscape = require("./src/htmlEscape");

module.exports = {
  ...dateFormat, //es6的展开运算符 ...
  ...htmlEscape,
};

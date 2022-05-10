## 安装

```
npm install format-tools-lxf

```

## 导入

```js
const formatTools = require("format-tools-lxf");
```

## 格式化时间

```js
//调用 dateFormat 对时间进行格式化
const dtStr = formatTools.dateFormat(new Date());

//结果 2022-04-30 11:17:21
console.log(dtStr);
```

## 转义 HTML 中的特殊字符

```js
//待转换的HTML字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>';

//调用 htmlEscape 方法进行转换
const str = formatTools.htmlEscape(htmlStr);

//结果 &lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt
console.log(str);
```

## 还原 HTML 中的特殊字符

```js
//待还原的HTML字符串
const str =
  "&lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt";

//调用 htmlEscape 方法进行还原
const htmlStr = formatTools.htmlUnEscape(str);

//结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(htmlStr);
```

## 开源协议

ISC

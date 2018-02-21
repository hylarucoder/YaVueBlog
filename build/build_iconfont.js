var fs = require('fs');

var path = require('path');
var svgFontsFolder = path.resolve(__dirname, '../extra/svg-icon');
var svgFontsDistFolder = path.resolve(__dirname, '../static/iconfont');
var iconfontFilePath = path.resolve(__dirname, '../static/iconfont/iconfont.css');
let ICON_FONT_SCSS_HEADER = `
@font-face {
  font-family: 'iconfont';
  src: url('./iconfont.eot');
  src: url('./iconfont.eot?#iefix') format('embedded-opentype'),
  url('./iconfont.woff') format('woff'),
  url('./iconfont.ttf') format('truetype'),
  url('./iconfont.svg#iconfont') format('svg');
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^="iconfont-"], [class*=" iconfont-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'iconfont' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;
var fontCarrier = require('font-carrier');

/**
 * @type {font}
 *
 */

// 创建空白字体对象
var iconfont = fontCarrier.create();
let ICON_FONT_SCSS_CONTENT_ITEMS = [];

let startUnicodeCharCode = 59668;
fs.readdir(svgFontsFolder, function (err, _items) {
  let items = _items.filter(function (x) {
    return x.endsWith('.svg');
  })
  let unicodeCharCode = startUnicodeCharCode;
  for (let i = 0; i < items.length; i++) {
    let item = items[i].toString();
    let charCode = unicodeCharCode.toString(16).toUpperCase();
    let k = item.split('.')[0];
    let v = charCode;
    console.log(k, v, '-->', `&#x${charCode};`);
    // 也可以使用setGlyph可以设置更多信息
    iconfont.setGlyph(`&#x${charCode};`, {
      glyphName: `${k}`,
      horizAdvX: '1024', // 设置这个字形的画布大小为1024
      svg: fs.readFileSync(svgFontsFolder + '/' + items[i]).toString()
    })

    unicodeCharCode++;
    let ICON_FONT_SCSS_CONTENT_ITEM = `
.iconfont-${k}:before {
  content: "\\${v}";
}
    `;
    ICON_FONT_SCSS_CONTENT_ITEMS.push(ICON_FONT_SCSS_CONTENT_ITEM);
    fs.writeFile(iconfontFilePath, ICON_FONT_SCSS_HEADER + ICON_FONT_SCSS_CONTENT_ITEMS.join('\n'), function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
  console.log('The iconfont.css file was generated!');

  console.log('before iconfont fonts file was generated!');

  iconfont.output({
    path: svgFontsDistFolder + '/' + 'iconfont'
  });

  console.log('The iconfont fonts file was generated!');
});

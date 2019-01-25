// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    'sourceType': 'module',
    "parser": "babel-eslint",
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html','vue'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': 0,
    'eol-last': 0,
    'no-tabs': 0,
    "no-mixed-spaces-and-tabs": 0,
    'semi': ["error", "always"],
    "brace-style": [2, "1tbs", { "allowSingleLine": false}], //大括号风格,
    "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
    "objectLiteralShorthandProperties": true,  
    // http://es6.ruanyifeng.com/#docs/function#rest参数  
    "restParams": true,  
    // http://es6.ruanyifeng.com/#docs/function#扩展运算符  
    "spread": true,  
    // http://es6.ruanyifeng.com/#docs/iterator#for---of循环  
    "forOf": true,  
    // http://es6.ruanyifeng.com/#docs/generator  
    "generators": true,  
    // http://es6.ruanyifeng.com/#docs/string#模板字符串  
    "templateStrings": true,  
    "superInFunctions": true,  
    // http://es6.ruanyifeng.com/#docs/object#对象的扩展运算符  
    "experimentalObjectRestSpread": true 
  }
}

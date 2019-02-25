// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // 'plugin:prettier/recommended'
    'eslint:recommended'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     printWidth: 120, // 每行代码长度，默认80
    //     tabWidth: 2, // 每个tab相当于几个空格
    //     semi: false, // 句末加分号
    //     singleQuote: true, // 用单引号
    //     trailingComma: 'none', // 最后一个对象元素加逗号
    //     bracketSpacing: true, // 对象，数组加空格
    //     jsxBracketSameLine: false, // jsx > 是否另起一行
    //     arrowParens: 'avoid', // (x) => {} 是否要有小括号
    //     requirePragma: false, // 是否要注释来决定是否格式化代码
    //     proseWrap: 'preserve' // 是否要换行
    //   }
    // ]
  }
}

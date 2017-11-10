require('babel-register')({
  extensions: [".js"],
  // Only js files in the test folder but not in the subfolder
  only: /test\/(?!fixtures\/).+\.js$/,
  babelrc: true,
  compact: true
});
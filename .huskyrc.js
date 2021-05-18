// .huskyrc.js
module.exports = {
  hooks: {
    // git commit 前的钩子
    "pre-commit": "lint-staged",
    "post-commit": "git update-index --again",
  },
};

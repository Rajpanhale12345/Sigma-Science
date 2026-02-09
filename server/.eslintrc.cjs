module.exports = {
  env: {
    node: true,   // 👈 tells ESLint this is Node.js
    es2021: true
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "script" // because you're using require (CommonJS)
  },
  rules: {}
};

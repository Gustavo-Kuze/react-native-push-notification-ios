module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "rn-push": "./js"
        },
        cwd: "babelrc"
      }
    ]
  ]
};
const { join } = require("path");
const projectConfig = require("./project.config");
const envData = require("./getEnvData");

module.exports = {
  title: jsonParse(envData).APP_TITLE || "",
  root: "src",
  mode: process.env.PRJ_ENV,
  id: jsonParse(envData).APP_ID || "",
  entry: {
    app: "src/app.json", // 该行固定格式
    outside: "src/outside/**/*/app.json",
  },
  entrySuffix: {
    js: "ts",
    miniJs: "wxs",
    xml: "wxml",
  },
  compiledSuffix: {
    js: "js",
    css: "wxss",
    miniJs: "wxs",
    xml: "wxml",
  },
  dist: join(process.cwd(), "dist/dev"),
  globalObject: "global",
  commonsDir: "build~commons",
  useSourceMap: true,
  useCache: true,

  envData,

  mergeProjectConfig: true,
  projectConfigName: "project.config.json",
  /**
   * 小程序项目配置文件
   */
  projectConfig,

  envList: {
    development: true,
    testing: true,
    staging: true,
    production: true,
  }
};

function jsonParse(jsonStr) {
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    return {};
  }
}

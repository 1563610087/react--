# react-网易云开发文档

## 1 项目结构

## 2 项目技术栈

## 3 项目准备

### 3.1 样式初始化

采用normalize.css

```
npm i normalize.css
```

### 3.2 路径别名配置

方案1：可以采用eject方式将react的配置文件弹出，在webpack文件中配置项目别名，eject方式不可逆，无法升级 react-scripts。

方案2：采用craco 进行配置，类似于vue中的vue.config.js，编写craco.config.js可以将webpack的配置覆盖。

项目采用方案2

* **安装**

```
npm i craco
```

* **修改package.json**

```
"scripts": {
-   "start": "react-scripts start",
+   "start": "craco start",
-   "build": "react-scripts build",
+   "build": "craco build"
-   "test": "react-scripts test",
+   "test": "craco test"
}
```

* **创建craco.config.js配置文件**

```javascript
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
    }
  }
}

```

* **vscode路径提示**

安装插件

```
path intellisense
```

插件配置

vscode点击插件设置，选择扩展设置

```
"path-intellisense.mappings": {
      "@": "${workspaceRoot}/src"
}
```

根目录创建jsconfig.json文件

```
{
    "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "allowSyntheticDefaultImports": true,
        "baseUrl": "./",
        "paths": {
          "@/*": ["src/*"]
        }
    },
    "exclude": [
        "node_modules"
    ]
}
```

## 4 功能模块


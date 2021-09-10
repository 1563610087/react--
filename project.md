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

### 3.3 路由配置

安装

```
npm install --save react-router-dom
```

路由集中配置管理

```
npm install --save react-router-config
```

react-router-config主要用来帮助我们进行集中式路由的配置，在不使用react-router-config之前，我们的路由使用react-router-dom库来进行配置，类似如下代码：

```jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Backend from './pages/Backend';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/backend" component={Backend}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
```

react-router-config可以使得路由配置更加简便，类似vue中的路由配置

routes.js路由配置

```pgsql
import { RouteConfig } from 'react-router-config';
import Home from '../components/Home';
import Inquiry from '../components/Inquiry';
import Offer from '../components/Offer';

const routes: RouteConfig = [
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/inquiry',
                component: Inquiry
            },
            {
                path: '/offer',
                component: Offer
            }
        ]
    }
]

export default routes
```

index.js入口文件

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import routes from './config/routes';
import stores from './stores/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 <HashRouter>
     <Provider {...stores}>
        {renderRoutes(routes)}
     </Provider>
 </HashRouter>,
 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

Home组件：

### 3.4 配置redux

```
npm install --save react-redux
```

### 3.5 引入antd

### 3.6 引入scss

```
npm install sass-loader node-sass --save-dev
```

### 3.7 配置eslint

添加prettier

```
npm i prettier
npm i eslint-plugin-prettier
npm i eslint-config-prettier
```

[Prettier 与 ESLint 相集成](https://links.jianshu.com/go?to=https%3A%2F%2Fprettier.io%2Fdocs%2Fen%2Fintegrating-with-linters.html%23eslint)，需要安装 [`eslint-config-prettier`](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fprettier%2Feslint-config-prettier) 和 [`eslint-plugin-prettier`](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fprettier%2Feslint-plugin-prettier) 依赖。[`eslint-config-prettier`](https://links.jianshu.com/go?to=https%3A%2F%2Fprettier.io%2Fdocs%2Fen%2Fintegrating-with-linters.html%23disable-formatting-rules) 禁用与 Prettier 冲突的规则，[`eslint-plugin-prettier`](https://links.jianshu.com/go?to=https%3A%2F%2Fprettier.io%2Fdocs%2Fen%2Fintegrating-with-linters.html%23use-eslint-to-run-prettier) 使用 Prettier 的规则：

####  方法一：修改 `package.json` 文件

修改 `package.json` 文件中的 `eslintConfig` 属性：

```json
{
  "eslintConfig": {
    "extends": [
      "react-app",
      "plugin:prettier/recommended"
    ]
  }
}
```

####  方法二：创建 `.eslintrc.*` 文件

在项目根目录（与 `package.json` 文件同级）创建 `.eslintrc.*` 文件。ESLint 的[配置文件](https://links.jianshu.com/go?to=https%3A%2F%2Feslint.org%2Fdocs%2Fuser-guide%2Fconfiguring%23configuration-file-formats)，可以是 `.eslintrc.js`、`.eslintrc.cjs`、`.eslintrc.yaml`、`.eslintrc.yml`、`.eslintrc.json`、`.eslintrc`（已弃用）或者 `package.json`（第一种方法），优先级依次递减，[层叠配置](https://links.jianshu.com/go?to=https%3A%2F%2Feslint.org%2Fdocs%2Fuser-guide%2Fconfiguring%23configuration-cascading-and-hierarchy)使用离要检测的文件最近的 `.eslintrc` 文件作为最高优先级，然后才是父目录里的配置文件，以此类推。Prettier 官方的示例配置使用 `.eslintrc.json`：

```json
{
  "extends": ["react-app", "plugin:prettier/recommended"]
}
```

### 3.8 配置stylelint

和 eslint 类似，stylelint 是 css 界的规范大师，标准配置内置了 170 余个配置项

1、vscode安装stylelint

2、项目配置

```
npm i -D stylelint stylelint-config-standard
```

**配置 stylelint**
在项目根目录建立 stylelint 配置文件 .stylelintrc.json ：

```
{
  "extends": [
    "stylelint-config-standard"
  ]
}
```

	"editor.codeActionsOnSave": {
	  "source.fixAll.stylelint": true
	},
	如此一来，就可以在文件 ctrl + s 保存时自动修复不合理的 css 格式。
### 3.9 配置全局css变量

```
npm i craco-sass-resources-loader -D
```

配置文件craco.config.js修改

```
const sassResourcesLoader = require("craco-sass-resources-loader");

const path = require("path");

const resolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "@components": resolve("src/components"),
      "@assets": resolve("src/assets"),
    },
  },

  plugins: [
    {
      plugin: sassResourcesLoader,

      options: {
        resources: ["./src/assets/css/variable.scss"],
      },
    },
  ],
};

```

## 性能优化

1 memo

采用memo对子组件渲染优化

## 4 功能模块

## 存在问题

1.nav-bar默认的选中样式激活，目前需要点击才能激活


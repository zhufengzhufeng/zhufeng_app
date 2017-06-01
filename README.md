## react技术栈
- react react-router4 redux react-redux
## 初始化package.json
```
$ yarn init -y
```
## webpack
```
$ yarn add webpack webpack-dev-server --dev
```
## babel
```
$ yarn add babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less less-loader html-webpack-plugin --dev
```
## react
```
$ yarn add react redux react-redux react-router-dom react-dom
```
## fetch
```
$ yarn add es6-promise whatwg-fetch --dev
```
## express
```
$ yarn add express
```

## swipe插件
```
$ yarn add swipe-js-iso react-swipe
```
## scripts
```
"start","webpack-dev-server --port 5000 --open --progress --colors",
"build","webpack -p"
```

## 目录结构
- components 组件 木偶组件
- containers 页面组件,或者自己的subpage目录下
    - Home
        - subpage 智能组件
        - index.js
- index.js 用来控制显示哪一个页面

- store onlyOne
- actions 用户发布动作
- reducers 定义规则的
- action-types action的名字


## extract-text-webpack-plugin
- 抽取css的以link标签引入

## postcss-loader
- 添加前缀

## 配置多入口 verdor
- 抽离第三方库
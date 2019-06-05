import React, {Component} from 'react'
import ReactDom from 'react-dom'
// import {AppContainer} from 'react-hot-loader'
import { LocaleProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import getRouter from 'router/router'
import {Provider} from 'react-redux'
import store from './store'

moment.locale('zh-cn');

const renderWithHotReload = (RootElement) => {
  ReactDom.render(
      <Provider store={store}>
        <LocaleProvider locale={zhCN}>
          {RootElement}
        </LocaleProvider>
      </Provider> , document.getElementById('app')
  )
}

// 初始化
renderWithHotReload(getRouter());

// 热更新
// if(module.hot) {
//   module.hot.accept('router/router', () => {
//     const getRouter = require('router/router').default
//     renderWithHotReload(getRouter())
//   })
// }
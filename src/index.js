import React, {Component} from 'react'
import ReactDom from 'react-dom'
// import {AppContainer} from 'react-hot-loader'
import getRouter from 'router/router'
import {Provider} from 'react-redux'
import store from './redux/store'


const renderWithHotReload = (RootElement) => {
  ReactDom.render(
      <Provider store={store}>
        {RootElement}
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
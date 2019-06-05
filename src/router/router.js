import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Loadable from 'react-loadable';

// import Home from 'bundle-loader?lazy&name=home!pages/Home/Home'
// import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1'
// import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter'
// import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo'

// import Bundle from './Bundle'

// loading 必须传，但可以返回空
const Loading = ({ error }) => {
  if (error) {
    console.log(error);
    return 'Oh nooess!';
  }
  return <div>{null}</div>;
};

// const createComponent = (component) => () => (
//   <Bundle load={component}>
//     {
//       (Component) => Component ? <Component /> : <Loading />  
//     }
//   </Bundle>
// );

// const getRouter = () => (
//   <Router>
//     <div>
//       <ul>
//         <li> <Link to="/">首页</Link></li>
//         <li><Link to="page1">Page1</Link></li>
//         <li><Link to="/counter">Counter</Link></li>
//         <li><Link to="/userinfo">UserInfo</Link></li>

//       </ul>
//       <Switch>
//         <Route exact path="/" component={createComponent(Home)} />
//         <Route path="/page1" component={createComponent(Page1)} />
//         <Route path="/counter" component={createComponent(Counter)} />
//         <Route path="/userinfo" component={createComponent(UserInfo)} />
      
//       </Switch>
//     </div>
//   </Router>
// );
// 加急弹出层页面
const Home = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ '../pages/Home/Home'),
  loading: Loading,
});
const Page1 = Loadable({
  loader: () => import(/* webpackChunkName: "Page1" */ '../pages/Page1/Page1'),
  loading: Loading,
});
const Counter = Loadable({
  loader: () => import(/* webpackChunkName: "Counter" */ '../pages/Counter/Counter'),
  loading: Loading,
});
const UserInfo = Loadable({
  loader: () => import(/* webpackChunkName: "UserInfo" */ '../pages/UserInfo/UserInfo'),
  loading: Loading,
});

const TestButton = Loadable({
  loader: () => import(/* webpackChunkName: "TestButton" */ '../pages/Button'),
  loading: Loading,
})

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li> <Link to="/">首页</Link></li>
        <li><Link to="page1">Page1</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/userinfo">UserInfo</Link></li>

      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/counter" component={Counter} />
        <Route path="/userinfo" component={UserInfo} />
        <Route path="/TestButton" component={TestButton} />
      </Switch>
    </div>
  </Router>
);

export default getRouter;

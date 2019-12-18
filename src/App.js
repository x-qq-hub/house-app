import React from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';
import Main from './pages/main/Main';
import Position from './pages/main/Position';
import {Icon} from 'antd-mobile'
const Loading=()=><Icon type="loading" />
// 组件懒加载
let Login=Loadable({
  loader:()=>import(/*webpackChunkName:'login'*/'./pages/Login'),
  loading:Loading
})
let Regist=Loadable({
  // 注释明确加载组件
  loader:()=>import(/*webpackChunkName:'regist'*/'./pages/Regist'),
  loading:Loading
})
let Forgot=Loadable({
  loader:()=>import(/*webpackChunkName:'forgot'*/'./pages/Forgot'),
  loading:Loading
})
let City=Loadable({
  loader:()=>import(/*webpackChunkName:'city'*/'./pages/City'),
  loading:Loading
})
let Seacher=Loadable({
  loader:()=>import(/*webpackChunkName:'seacher'*/'./pages/Seacher'),
  loading:Loading
})
let MapPage=Loadable({
  loader:()=>import(/*webpackChunkName:'map'*/'./pages/MapPage'),
  loading:Loading
})



function App() {
  return (
    <HashRouter>
      <Switch>
       <Route path="/" exact component={Main}/>
       <Route path="/login" exact component={Login}/>
       <Route path="/regist" exact component={Regist}/>
       <Route path="/forgot" exact component={Forgot}/>
       <Route path="/position" exact component={Position}/>
       <Route path="/city" exact component={City}/>
       <Route path="/seacher" exact component={Seacher}/>
       <Route path="/map" exact component={MapPage}/>
       <Redirect to="/"/>
      </Switch>
    </HashRouter>
  );
}

export default App;

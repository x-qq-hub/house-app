import React from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';
import Home from './pages/main/Home';
import Position from './pages/main/Position';

// 组件懒加载
let Login=Loadable({
  loader:()=>import(/*webpackChunkName:'login'*/'./pages/Login'),
  loading:()=><div>正在加载中</div>
})
let Regist=Loadable({
  // 注释明确加载组件
  loader:()=>import(/*webpackChunkName:'regist'*/'./pages/Regist'),
  loading:()=><div>正在加载中</div>
})
let Forgot=Loadable({
  loader:()=>import(/*webpackChunkName:'forgot'*/'./pages/Forgot'),
  loading:()=><div>正在加载中</div>
})

function App() {
  return (
    <HashRouter>
      <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/login" exact component={Login}/>
       <Route path="/regist" exact component={Regist}/>
       <Route path="/forgot" exact component={Forgot}/>
       <Route path="/position" exact component={Position}/>
       <Redirect to="/"/>
      </Switch>
    </HashRouter>
  );
}

export default App;

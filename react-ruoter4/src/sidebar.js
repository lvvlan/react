import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ReactDOM from 'react-dom';

// 每一个逻辑路由都包含两个组件，一个负责显示 sidebar 另一个则是显示主区域
// 只要当前的URL匹配，这两个部分都会被渲染出来。

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>主页</div>,
        main: () => <h2>主页</h2>  
    },
    {
        path: '/about',
        sidebar: () => <div>关于我们</div>,
        main: () => <h2>关于我们</h2>  
    },
    {
        path: '/contact',
        sidebar: () => <div>联系我们</div>,
        main: () => <h2>联系我们</h2>  
    }
];

const SidebarExample = () => (
    <Router>
        <div style={{display: 'flex'}}>
            <div style={{padding: '10px', width: '40%', background: '#f0f0f0'}}>
                <ul style={{listStyle: 'none', padding: 0}}>
                    <li><Link to='/'>主页</Link></li>
                    <li><Link to='/about'>关于我们</Link></li>
                    <li><Link to='/contact'>联系我们</Link></li>
                </ul>

                {routes.map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact} component={route.sidebar} />
                ))}
            </div>

            <div style={{flex: 1, padding: '10px'}}>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                ))}
            </div>
        </div>
    </Router>
);

ReactDOM.render(
    <SidebarExample />,
    document.getElementById('app')
);
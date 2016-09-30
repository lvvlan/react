/**
 * Des
 * Created by luowei5 on 2016/9/26.
 * E-mail luowei5@jd.com
 * Update 2016/9/26
 */
import {Router, Route, hashHistory, IndexRoute } from 'react-router';
import {render} from 'react-dom';
import App from './modules/App';
import About from  './modules/About';
import Repos from './modules/Repos';
import Home from './modules/Home';

render(
    <Router history={hashHistory}>
        {/*App 相当于总控制器 Home、Repos、About相当于各个路由模块 这么写利于代码分离*/}
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="repos" component={Repos} />
            <Route path="about" component={About} />
        </Route>
    </Router>,
    document.getElementById('app')
);
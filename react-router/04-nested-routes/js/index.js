/**
 * Des
 * Created by luowei5 on 2016/9/26.
 * E-mail luowei5@jd.com
 * Update 2016/9/26
 */
import {Router, Route, hashHistory} from 'react-router';
import {render} from 'react-dom';
import App from './modules/App';
import About from  './modules/About';
import Repos from './modules/Repos';

render(
    <Router history={hashHistory}>
        {/*在这里添加路由规则*/}
        <Route path="/" component={App}>
            {/*可以嵌套路由规则 访问/about时会先加载App组件，在App的内部加载About组件*/}
            <Route path="/about" component={About} />
            <Route path="/repos" component={Repos} />
        </Route>
    </Router>,
    document.getElementById('app')
);
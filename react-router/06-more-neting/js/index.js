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
import Repo from './modules/Repo';

render(
    <Router history={hashHistory}>
        {/*在这里添加路由规则*/}
        <Route path="/" component={App} />
        <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo} />
        </Route>
        <Route path="/about" component={About} />
    </Router>,
    document.getElementById('app')
);
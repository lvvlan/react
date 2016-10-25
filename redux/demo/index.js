/**
 * Des
 * Created by luowei5 on 2016/10/25.
 * E-mail luowei5@jd.com
 * Update 2016/10/25
 */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './container/App';

let middleware = [ thunk ];
const store = createStore(reducer, applyMiddleware(...middleware));

RD.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


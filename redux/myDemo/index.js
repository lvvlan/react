/**
 * Des
 * Created by luowei5 on 2016/10/25.
 * E-mail luowei5@jd.com
 * Update 2016/10/25
 */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import App from './container/App';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));

RD.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
/**
 * Des
 * Created by luowei5 on 2016/10/21.
 * E-mail luowei5@jd.com
 * Update 2016/10/21
 */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers';
import App from './containers/App';

if (process.env.NODE_ENV !== 'production') {
  console.log(111);
}

const middleware = [ thunk, createLogger() ];

const store = createStore(reducer, applyMiddleware(...middleware));

RD.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


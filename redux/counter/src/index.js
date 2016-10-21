/**
 * Des
 * Created by luowei5 on 2016/10/19.
 * E-mail luowei5@jd.com
 * Update 2016/10/19
 */
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers/index';

const store = createStore(counter);
const root = document.getElementById('root');

const render = () => RD.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    root
);

render();
store.subscribe(render);


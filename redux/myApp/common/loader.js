import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import Dbt from '../container/dbt';
import Xbw from '../container/xbw';
import Bn from '../container/bn';

const store = createStore(rootReducer, applyMiddleware(thunk));

//单个组件加载
function renderFloor(floor){
    switch (floor){
        case 'bn':
            RD.render(
                <Provider store={store}>
                    <Bn />
                </Provider>,
                document.getElementById('bn')
            );
            break;
        case 'dbt':
            RD.render(
                <Provider store={store}>
                    <Dbt />
                </Provider>,
                document.getElementById('dbt')
            );
            break;
        case 'xbw':
            RD.render(
                <Provider store={store}>
                    <Xbw />
                </Provider>,
                document.getElementById('xbw')
            );
            break;
    }
}

function loader(loadObj, holder){
    let win = $(window),
        obj = null;

    for(let i = 0; i < loadObj.list.length; i++){
        obj = $("#"+loadObj.list[i].ID);
        if(!loadObj.list[i].isLoad && (win.scrollTop() - holder < obj.offset().top + obj.height()) && (win.scrollTop() + win.height() + holder > obj.offset().top)){

            renderFloor(loadObj.list[i].ID)

            loadObj.list[i].isLoad = true;
            loadObj.complete++;
            if(loadObj.complete == loadObj.list.length){
                win.off("scroll.loader");
            }
        }
    }
}

export default loader;
/**
 * Des
 * Created by luowei5 on 2016/10/21.
 * E-mail luowei5@jd.com
 * Update 2016/10/21
 */
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

//React component
let Counter = React.createClass({
    propTypes: {
        value: React.PropTypes.number.isRequired,
        onIncreaseClick: React.PropTypes.func.isRequired
    },
    render() {
        const { value, onIncreaseClick } = this.props;

        return (
            <div>
                <span>{value}</span>
                {' '}
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        );
    }
});

//Action
const increaseAction = {type: 'increase'};

//Reducer
function counter(state = {count: 0} , action) {
    console.log(state);
    const count = state.count;
    //console.log(count);
    switch (action.type){
        case 'increase':
            return {count: count + 1};
        default:
            return state;
    }
}

//Store
const store = createStore(counter);

//state 映射到 UI组件的参数（props）
// 会订阅store 每当state更新时 会自动执行执行 重新计算UI
// mapStateToProps的第一个参数总是state对象 还可以接收第二个参数 代表容器组件的props对象
function mapStateToProps(state, props) {
    console.log(state);
    return {
        value: state.count
    }
}

//用户对UI的操作  映射到 action
/**
 * @function mapDispatchToProps
 * @param {function} dispatch - store.dispatch
 * @param {object} props - 容器组件的对象
* */
function mapDispatchToProps(dispatch, props) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    };
}

//connect component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

RD.render(
    <Provider store={store}>
        <App test="aaa"/>
    </Provider>,
    document.getElementById('root')
);
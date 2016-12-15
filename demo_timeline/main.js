/**
 * Des
 * Created by luowei5 on 2016/9/2.
 * E-mail luowei5@jd.com
 * Update 2016/9/2
 */

/*
* 组件的生命周期分为三个状态:
* Mounting：     已插入真实DOM
* Updating：     正在被重新渲染
* Unmounting：   已移出真实DOM
*
* React为每个状态都提供两种处理函数：
* will： 函数在进入状态之前调用
* did：  函数在进入状态之后调用
*
* 三种状态共计五种处理函数:
* componentWillMount()
* componentDidMount()
* componentWillUpdate(object nextProps, object nextState)
* componentDidUpdate(object prevProps, object prevState)
* componentWillUnmount()
*
* React还提供两种特殊状态的处理函数
* componentWillReceiveProps(object nextProps) 已加载组件收到新的参数时调用
* shouldComponentUpdate(object nextProps, object nextState) 组件判断是否重新渲染时调用
* */

let Hello = React.createClass({
    getInitialState: function () {
        return {opacity: 1.0};
    },
    componentDidMount: function () {    //真实状态插入后调用
        this.timer = setInterval(function (){
            let opacity = this.state.opacity;
            opacity -= .05;
            if(opacity < 0.1){
                opacity = 1.0;
            }
            this.setState({opacity: opacity});
        }.bind(this), 100);
    },
    render: function () {
        /*
        * 第一重大括号表示这是JS语法
        * 第二重大括号表示样式对象
        * */
        return (
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}
            </div>
        );
    }
});

RD.render(
    <Hello name="world" />,
    document.querySelector('#reactBox')
);
let i = 0;
let Foo = React.createClass({
    handelClickProp() {
        this.setState({
            testState: 'changed by props!'
        });
    },
    handelClickState() {
        this.setState({
            testState: 'changed by setState!!'
        });
    },
    handelRemove() {
        RD.unmountComponentAtNode(document.getElementById('app'));
    },
    getDefaultProps() {
        let j = 0;
        i++;
        console.log(`${i}. getDefaultProps被调用! 这是第${++j}次被调用!`);
        return {
            name: 'Hello World~!'
        };
    },
    getInitialState() {
        let j = 0;
        i++;
        console.log(`${i}. getInitialState被调用! 这是第${++j}次被调用!`);
        return {
            testState: 'this is test state~!'
        };
    },
    componentWillMount() {
        let j = 0;
        i++;
        console.log(`${i}. componentWillMount被调用! 这是第${++j}次被调用!`);
    },
    render() {
        let j = 0;
        i++;
        console.log(`${i}. render被调用! 这是第${++j}次被调用!`);
        return (
            <div>
                <h1>React实例</h1>
                <div>
                    <input type="button" value="更改props" name={this.state.testState} onClick={this.handelClickProp}/>
                    <p>{this.props.name}</p>
                </div>
                <div>
                    <input type="button" value="更改state" onClick={this.handelClickState}/>
                    <p>{this.state.testState}</p>
                </div>
                <div>
                    <input type="button" value="移除组件" onClick={this.handelRemove}/>
                    <p>移除组件</p>
                </div>
            </div>
        );
    },
    componentDidMount() {
        let j = 0;
        i++;
        console.log(`${i}. componentDidMount被调用! 这是第${++j}次被调用!`);
    },
    componentWillReceiveProps(nextProps, nextContext) {
        let j = 0;
        i++;
        console.log(`${i}. componentWillReceiveProps被调用! 这是第${++j}次被调用!`);
        console.log(`nextProps是: ${nextProps}, nextContext是: ${nextContext}`);
    },
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        let j = 0;
        i++;
        console.log(`${i}. shouldComponentUpdate被调用! 这是第${++j}次被调用!`);
        console.log(`nextProps是: ${nextProps}, nextState是: ${nextState}, nextContext是: ${nextContext}`);
        return true;
    },
    componentWillUpdate(nextProps, nextState, nextContext) {
        let j = 0;
        i++;
        console.log(`${i}. componentWillUpdate被调用! 这是第${++j}次被调用!`);
        console.log(`nextProps是: ${nextProps}, nextState是: ${nextState}, nextContext是: ${nextContext}`);
    },
    componentDidUpdate(prevProps, prevState, prevContext) {
        let j = 0;
        i++;
        console.log(`${i}. componentDidUpdate被调用! 这是第${++j}次被调用!`);
        console.log(`prevProps是: ${prevProps}, prevState是: ${prevState}, prevContext是: ${prevContext}`);
    },
    componentWillUnmount() {
        let j = 0;
        i++;
        console.log(`${i}. componentWillUnmount被调用! 这是第${++j}次被调用!`);
    }
});

RD.render(
    <Foo />,
    document.getElementById('app')
);

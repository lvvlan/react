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
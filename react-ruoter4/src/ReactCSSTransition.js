import React, { Component, Children } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import ReactDOM from 'react-dom';

class ChildOne extends Component {
    render () {
        return (
            <div>
                <ReactCSSTransitionGroup transitionName='fade' transitionEnterTimeout={1300} transitionLeaveTimeout={1300}>
                    <div style={{background: this.props.color}} key={this.props.color}></div> 
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

class TestAnimation extends Component {
    state = {
        color: ['red', 'blue', 'yellow'],
        active: 0
    }
    componentDidMount() {
        // let oldClor = this.state.color;
        // let color = ['red', 'blue', 'yellow'];
        // let i = 0;
        // setInterval(function (){
        //     let newColor = oldClor.push(color[i]);
        //     console.log(oldClor);
        //     console.log(newColor);
        //     this.setState({
        //         color: oldClor
        //     });
        //     i = (i+1)%3;
        // }.bind(this), 3000);

        let i = 0;
        setInterval(function (){
            i = (i+1)%3;
            this.setState({
                active: i
            });
        }.bind(this), 3000);
    }
    render() {
        //console.log(this.state.color);
        let {color, active} = this.state;
        return (
            <div className='content'>
                {/*<ChildOne color={this.state.color[this.state.active]} />*/}
                {/*必须加key 否则没有效果。。。*/}
                {/*<ReactCSSTransitionGroup transitionName='fade' transitionEnterTimeout={1300} transitionLeaveTimeout={1300}>
                    <div style={{background: this.state.color[this.state.active]}} key={this.state.active}></div> 
                </ReactCSSTransitionGroup>*/}
                
                    <TransitionGroup key={active}>
                        {/*<ReactCSSTransitionGroup transitionName='fade' transitionEnterTimeout={1300} transitionLeaveTimeout={1300}>*/}
                            <TransitionGroupUl componentWillEnter={testCB} color={color} active={active} key={active}/>
                        {/*</ReactCSSTransitionGroup>*/}
                    </TransitionGroup>
                

            </div> 
        );
    }
}

function testCB(){
    console.log('testCB');
}

class TransitionGroupUl extends Component{
    componentWillAppear(cb) {
        console.log(1,'componentWillAppear');
        cb();
    }
    componentDidAppear() {
        console.log(2,'componentDidAppear');
    }
    componentWillEnter(testCB) {
        console.log(3,'componentWillEnter');
        testCB();
    }
    componentDidEnter() {
        console.log(4,'componentDidEnter');
    }
    componentWillLeave() {
        console.log(5, 'componentWillLeave');
    }
    componentDidLeave() {
        console.log(6, 'componentDidLeave');
    }
    // componentDidMount() {
    //     console.log('componentDidMount');
    // }
    // componentWillUnmount() {
    //     console.log('componentWillUnmount');
    // }
    render() {
        return (
            <div style={{background: this.props.color[this.props.active]}} key={this.props.active}></div> 
        );
    }
}

class TransitionGroupUlChild extends Component{
    componentWillAppear(cb) {
        console.log(1,'componentWillAppear');
        cb();
    }
    componentDidAppear() {
        console.log(2,'componentDidAppear');
    }
    componentWillEnter(cb) {
        console.log(3,'componentWillEnter');
        cb();
    }
    componentDidEnter() {
        console.log(4,'componentDidEnter');
    }
    componentWillLeave() {
        console.log(5, 'componentWillLeave');
    }
    componentDidLeave() {
        console.log(6, 'componentDidLeave');
    }
    // componentDidMount() {
    //     console.log('componentDidMount');
    // }
    render() {
        return (
            <div>111</div> 
        );
    }
}


ReactDOM.render(
    <TestAnimation />,
    document.getElementById('app')
);
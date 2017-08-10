import React, { Component, Children } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import ReactDOM from 'react-dom';

class TestAnimation extends Component {
    state = {
        color: ['red', 'blue', 'yellow'],
        active: 0
    }
    componentDidMount() {
        let i = 0;
        setInterval(function (){
            i = (i+1)%3;
            this.setState({
                active: i
            });
        }.bind(this), 3000);
    }
    render() {
        let {color, active} = this.state;
        return (
            <div className='content'>
                <ReactCSSTransitionGroup transitionName='fade' transitionEnterTimeout={1300} transitionLeaveTimeout={1300}>
                    <TransitionGroup key={active}>
                        <TransitionGroupUl color={color} active={active} key={active}/>
                    </TransitionGroup>
                </ReactCSSTransitionGroup>

            </div> 
        );
    }
}

class TransitionGroupUl extends Component{
    componentWillAppear() {
        console.log(1,'componentWillAppear');
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
    render() {
        return (
            <div style={{background: this.props.color[this.props.active]}} key={this.props.active}></div> 
        );
    }
}

ReactDOM.render(
    <TestAnimation />,
    document.getElementById('app')
);
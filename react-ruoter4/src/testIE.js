import React, { Component, Children } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';


class TransitionGroupUl extends Component{
    constructor(props) {
        super(props);

        this.state = {
            active: 0,
            color: ['green', 'blue']
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let {active} = this.state;
        active = (active + 1) % 2;
        console.log(this.state.active);
        this.setState({
            active
        });
    }
    render() {
        let {active, color} = this.state;
        return(
            <div className='testIE' onClick={this.handleClick}>
                <ReactCSSTransitionGroup transitionName='testIE' transitionEnterTimeout={600} transitionLeaveTimeout={600} >
                    <p key={active} style={{background: `${color[active]}`}} ></p>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

ReactDOM.render(
    <TransitionGroupUl />,
    document.getElementById('app')
);
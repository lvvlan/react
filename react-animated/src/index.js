import Animate, { configSpring, configBezier } from 'react-smooth';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

const steps = [
    {
        style: {
            opacity: 0,
            transform: 'scale(1.5)',
        },
        duration: 0
    }, 
    {
        style: {
            opacity: 1,
            transform: 'translate(0, 0) scale(1)',
        },
        duration: 500,
        easing: 'ease' 
    },
    {
        style: {
            opacity: 1,
            transform: 'translate(0, 0) scale(1)',
        },
        duration: 600,
        easing: 'ease-in' 
    },
    {
        style: {
            transform: 'translate(100px, 100px)',
        },
        duration: 500,
        easing: 'ease-in-out' 
    }
];

class Simple extends Component {
  state = {
    to: 100,
  };
  _lock = true;
  handleClick() {
      
        if(this._lock){
            this._lock = false;
            this.setState({
                to: this.state.to + 100,
            });
        }
    
  }

  render() {
    return (
      <div className="simple">
        <button onClick={this.handleClick.bind(this)}>click me!</button>
        <Animate steps={steps} onAnimationEnd={()=>{console.log('aaa');}}>
          <div style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'red',
                        //transform: `translate(0, ${y}px)`,
                    }}
                    >
                    </div>
        </Animate>
      </div>
    );
  }
}

/*class Simple extends Component {
  state = {
    to: 100,
  };

  handleClick() {
    this.setState({
      to: this.state.to + 100,
    });
  }

  render() {
    return (
      <div className="simple">
        <button onClick={this.handleClick.bind(this)}>click me!</button>
        <Animate easing="spring" from={{ y: 0 }} to={{ y: this.state.to }}>
          {({ y }) => (
            <div style={{
              width: 100,
              height: 100,
              backgroundColor: 'red',
              transform: `translate(0, ${y}px)`,
            }}
            >
            </div>
          )}
        </Animate>
        <div className="graph">
        </div>
      </div>
    );
  }
}*/

ReactDom.render(<Simple />, document.getElementById('app'));
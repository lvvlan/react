/**
 * Des
 * Created by luowei5 on 2016/9/2.
 * E-mail luowei5@jd.com
 * Update 2016/9/2
 */

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var TodoList = React.createClass({
    getInitialState: function() {
        return {items: ['hello', 'world', 'click', 'me']};
    },
    handleAdd: function() {
        var newItems =
            this.state.items.concat([prompt('Enter some text')]);
        this.setState({items: newItems});
    },
    handleRemove: function(i) {
        var newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    },
    render: function() {
        var items = this.state.items.map(function(item, i) {
            return (
                <div key={item} onClick={this.handleRemove.bind(this, i)}>
                    {item}
                </div>
            );
        }.bind(this));
        return (
            <div>
                <button onClick={this.handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

require('./style.css');

RD.render(
    <TodoList/>,
    document.querySelector('#reactBox')
);
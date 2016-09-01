/**
 * Des
 * Created by luowei5 on 2016/9/1.
 * E-mail luowei5@jd.com
 * Update 2016/9/1
 */
let MyComponent = React.createClass({
    handleClick: function () {
        this.refs.myTxtInput.focus()
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="myTxtInput"/><br/>
                <input type="button" value="Focus the text input" onClick={this.handleClick}/>
            </div>
        );
    }
});

RD.render(
    <MyComponent />,
    document.querySelector('#reactBox')
);
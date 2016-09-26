/**
 * Des
 * Created by luowei5 on 2016/9/1.
 * E-mail luowei5@jd.com
 * Update 2016/9/1
 */
let MyComponent = React.createClass({
    handleClick: function () {
        //this.refs.myTxtInput.getDOMNode() 已被移出
        this.refs.myTxtInput.focus();
        console.log(this.refs.myTxtInput);
        console.log(RD.findDOMNode(this.refs.myTxtInput));
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="myTxtInput" /*autoFocus="true"*//><br/>
                <input type="button" value="Focus the text input" onClick={this.handleClick}/>
            </div>
        );
    }
});

RD.render(
    <MyComponent />,
    document.querySelector('#reactBox')
);
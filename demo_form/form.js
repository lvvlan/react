/**
 * Des
 * Created by luowei5 on 2016/9/19.
 * E-mail luowei5@jd.com
 * Update 2016/9/19
 */
let Myform = React.createClass({
    submitHandler: function (event){
        event.preventDefault();
        let helloTo = this.refs.helloTo.value;

        console.log(helloTo);
    },
    render: function () {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" ref="helloTo" defaultValue="Hello World!"/>
                <br/>
                <button type="submit">提交</button>
            </form>
        );
    }
});

RD.render(
    <Myform/>,
    document.getElementById('reactBox')
);
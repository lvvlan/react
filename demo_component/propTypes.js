/**
 * Des
 * Created by luowei5 on 2016/9/1.
 * E-mail luowei5@jd.com
 * Update 2016/9/1
 */
let MyTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    getDefaultProps: function () {  //设置默认PropTypes
        return {
            title: 'Hello World!'
        };
    },
    render: function () {
        return <h1>{this.props.title}</h1>
    }
});


//let data = 'hello world~';

RD.render(
    <MyTitle /*title={data}*/ />,
    document.getElementById('reactBox')
);
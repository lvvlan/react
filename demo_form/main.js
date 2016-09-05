/**
 * Des
 * Created by luowei5 on 2016/9/2.
 * E-mail luowei5@jd.com
 * Update 2016/9/2
 */
let Input = React.createClass({
    getInitialState: function () {
        return {value: 'Hello'}
    },
    handleChange: function (event) {
        this.setState({value: event.target.value});
    },
    render: function () {
        let value = this.state.value;

        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} />
                <p>{value}</p>
            </div>
        );
    }
});

RD.render(
    <Input/>,
    document.querySelector('#reactBox')
);
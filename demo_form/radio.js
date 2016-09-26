/**
 * Des
 * Created by luowei5 on 2016/9/20.
 * E-mail luowei5@jd.com
 * Update 2016/9/20
 */
let Radio = React.createClass({
    propTypes: {
        onChange: React.PropTypes.func
    },
    getInitialState: function () {
        return {
            value: this.props.defaultValue
        };
    },
    handleChange: function (event) {
        this.props.onChange && this.props.onChange(event);

        this.setState({
            value: event.target.value
        });
    },
    render: function () {
        let children = [];
        let value = this.props.value || this.state.value;

        React.Children.forEach(this.props.children, function (child, i) {
            let label = <label key={i}>
                <input type="radio"
                    name = {this.props.name}
                    value = {child.props.value}
                    checked = {child.props.value == value}
                    onChange = {this.handleChange}
                />
                <span>{child.props.children}</span>
                <br/>
            </label>;
            console.log(child.props);
            children[i] = label;
        }.bind(this));

        return <span>{children}</span>;
    }
});


let MyForm = React.createClass({
    submitHandler: function (event) {
        event.preventDefault();
        alert(this.refs.radio.state.value);
    },
    changeHandler: function () {
        console.log(this.refs.radio); //自定义组件和原生DOM不同，自定义组件里面带了许多属性和方法
    },
    render: function () {
        return (
            <form onSubmit={this.submitHandler}>
                <Radio ref="radio" name="my_radio" defaultValue="B" onChange={this.changeHandler}>
                    <a value="A"><span><a href="#">111</a></span></a>
                    <b value="B">222</b>
                    <c value="C">333</c>
                </Radio>
                <button type="submit">提交</button>
            </form>
        );
    }
});

RD.render(
    <MyForm/>,
    document.querySelector('#reactBox')
);
/**
 * Des
 * Created by luowei5 on 2016/9/1.
 * E-mail luowei5@jd.com
 * Update 2016/9/1
 */
let HelloMessage = React.createClass({
    render: function () {
        return <h1>Hello {this.props.name}</h1>
    }
});

RD.render(
    <HelloMessage name="lemonleo" />,
    document.getElementById('reactBox')
);

/*
* 添加组件属性：
* class需要写成 className
* for 需要写成 htmlFor
* */
/**
 * Des
 * Created by luowei5 on 2016/9/26.
 * E-mail luowei5@jd.com
 * Update 2016/9/26
 */
export default React.createClass({
    render: function () {
        return (
            <div>
                <h1>Hello, React Router!</h1>
                {/*有嵌套路由时，添加下面的代码*/}
                {this.props.children}
            </div>
        );
    }
});

/*
export default React.createClass({
    render() {
        return (
            <div>Hello, React Router!</div>
        );
    }
});*/


//两种写法都可以 个人认为第一种稍好 第二种是因为render函数被webpack编译了 使用第一种可以避免混淆。。
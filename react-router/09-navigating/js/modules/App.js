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
                <h1>React Router</h1>
                {this.props.children}
            </div>
        );
    }
});
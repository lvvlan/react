/**
 * Des
 * Created by luowei5 on 2016/9/26.
 * E-mail luowei5@jd.com
 * Update 2016/9/26
 */
let Demo = React.createClass({
    render: function () {
        return (
            <h1>test 测试</h1>
        );
    }
});

import '../css/1.css';
import '../css/2.css';

RD.render(
    <Demo />,
    document.getElementById("app")
);
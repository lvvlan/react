/**
 * Des
 * Created by luowei5 on 2016/9/28.
 * E-mail luowei5@jd.com
 * Update 2016/9/28
 */
import { Link } from 'react-router';

export default React.createClass({
    render: function () {
        return (
            <Link {...this.props} activeStyle={{color: 'red'}}/>
        );
    }
});
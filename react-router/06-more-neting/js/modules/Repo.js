/**
 * Des
 * Created by luowei5 on 2016/9/26.
 * E-mail luowei5@jd.com
 * Update 2016/9/26
 */
import { Link } from 'react-router';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h1>Repo</h1>
                params => userName: {this.props.params.userName} <br/>
                params => repoName: {this.props.params.repoName}
            </div>
        );
    }
});
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
                <h1>Repos && Repos</h1>
                <ul role="nav">
                    <li>
                        <Link to="/">Index</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/repos" activeStyle={{color: 'red'}}>Repos</Link>
                    </li>
                </ul>
            </div>
        );
    }
});
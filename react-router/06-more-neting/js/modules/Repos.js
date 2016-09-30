/**
 * Des
 * Created by luowei5 on 2016/9/26.
 * E-mail luowei5@jd.com
 * Update 2016/9/26
 */
import { Link } from 'react-router';
import NavLink from './NavLink';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h2>Repos</h2>
                <ul>
                    <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
                    <li><NavLink to="/repos/facebooke/react">React</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
});
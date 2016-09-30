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
                <h2>Repos</h2>
                <ul>
                    <li><Link to="/" activeStyle={{color: 'red'}} onlyActiveOnIndex={true}>index</Link></li>
                    <li><Link to="/repos" activeStyle={{color: 'red'}}>React Router</Link></li>
                    <li><Link to="/about" activeStyle={{color: 'red'}}>React</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
});
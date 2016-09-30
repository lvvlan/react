/**
 * Des
 * Created by luowei5 on 2016/9/26.
 * E-mail luowei5@jd.com
 * Update 2016/9/26
 */
import { Link } from 'react-router';
import { browserHistory } from 'react-router'

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    handleSubmit: function (event) {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/repos/${userName}/${repo}`;
        //browserHistory.push(path);   //第一种方式
        this.context.router.push(path);    //第二种方式
    },
    render: function () {
        return (
            <div>
                <h2>Repos</h2>
                <ul>
                    <li><Link to="/" activeStyle={{color: 'red'}} onlyActiveOnIndex={true}>index</Link></li>
                    <li><Link to="/repos" activeStyle={{color: 'red'}}>React Router</Link></li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="userName"/> /
                            <input type="text" placeholder="repo"/>
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
});
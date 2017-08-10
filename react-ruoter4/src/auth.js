import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

////////////////////////////////////////////////////////////
// 流程简介：
// 1. 点击「public 页面」
// 2. 点击 「protected 页面」
// 3. 登入
// 4. 点击后退，并且在每一步过程中观察URL的变化

const AuthExample = () => (
    <Router>
        <div>
            <AuthButton />
            <ul>
                <li><Link to='/public'>公开页面</Link></li>
                <li><Link to='/protected'>非公开页面</Link></li>
            </ul>

            <Route path='/public' component={Public} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/protected' component={Protected} />
        </div>
    </Router>  
);

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;

        setTimeout(cb, 3000); //模拟异步
    },
     signout(cb) {
         this.isAuthenticated = false;
         setTimeout(cb, 1000);
     }
};

const AuthButton = withRouter(({history}) => (
    fakeAuth.isAuthenticated ? (
        <p>
            欢迎！<button onClick={() => {
                    fakeAuth.signout(() => history.push('/'));
                }}>登出</button>
        </p>
    ) : (
        <p>请先登录！</p>
    )
));

//定义非公开页重定向路由规则
const PrivateRoute = ({component: Component, ...rest}) => {
    //console.log(component);
    return (
        <Route {...rest} render={props => (
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                }} />
            )
        )} />
    );
};


const Public = () => <h3>公开的页面</h3>;
//简化版的组件 参数可以以这种形式拿到 每个组件里面都有3个属性：match location history
const Protected = ({location}) => {
    console.log('Protected: ', location);
    return (
        <h3>非公开的页面</h3>
    );
};

class Login extends React.Component {
    state = {
        redirectToReferrer: false
    }
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         redirectToReferrer: false
    //     }
    // }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({redirectToReferrer: true})
        })
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        const {redirectToReferrer} = this.state;
        console.log('Login: ', this.props);
        if(redirectToReferrer) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <div>
                <p>若想访问{from.pathname},你需要先登录</p>
                <button onClick={this.login}>登录</button>
            </div> 
        );
    }
}

ReactDOM.render(
    <AuthExample />,
    document.getElementById('app')
);
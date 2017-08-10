import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'

class ShowTheLocation extends React.Component {

  render() {
    const { match, location, history } = this.props
    console.log(this.props);
    return (
      <div>You are now at {location.pathname}</div>
    )
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(ShowTheLocation)

const WithRouterExample = () => (
    <Router>
        <ShowTheLocationWithRouter />
    </Router>
)

ReactDOM.render(
    <WithRouterExample />,
    document.getElementById('app')
);

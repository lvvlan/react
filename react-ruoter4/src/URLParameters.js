import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const ParamsExample = () => {
    return (
        <Router>
            <div>
                <h2>Accounts</h2>
                <ul>
                    <li><Link to='/netfix'>Netfix</Link></li>
                    <li><Link to='/zillow-group'>Zillow Group</Link></li>
                    <li><Link to='/yahoo'>Yahoo</Link></li>
                    <li><Link to='/modus-create'>Modus Create</Link></li>
                </ul>

                <Route path='/:item' component={Child}></Route>
            </div>
        </Router>
    );
}

const Child = ({match}) => {
    console.log(match);
    return (
        <h2>ITEM: {match.params.item}</h2>
    );
}

ReactDOM.render(
    <ParamsExample />,
    document.getElementById('app')
);

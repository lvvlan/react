import React, {Component} from 'react'
import loader from './common/loader';

let loaderObj = require('./config/loader.json');

class App extends Component {
    componentDidMount() {
        //加载楼层
        $(window).on('scroll.loader', () => loader(loaderObj, 100));
        loader(loaderObj, 100);
    }
    render() {
        return (
            <div>
                <div className="item dbt" id="dbt" data-type="item"></div>
                <div className="item xbw" id="xbw" data-type="item"></div>
                <div className="item bn" id="bn" data-type="item"></div>
            </div>
        )
    }
}

RD.render(
    <App />,
    document.getElementById('root')
);
import React, {Component} from 'react';
import Active from '../components/xbw/active';
import Bh from '../components/xbw/bh';
import Recommend from '../components/xbw/recommend';
import UserInfo from '../components/xbw/userInfo';

class Xbw extends Component {
    render () {
        return (
            <div className="item_content clearfix">
                <div className="sideTitle" data-type="xbwSideTitle">
                    <h3>小白屋</h3>
                    <span className="privileged"><em>来粉丝活动</em><em className="last">大家一起HI</em></span>
                    <UserInfo />
                </div>
                <div className="commodities">
                    <div className="xbwActive" data-type="xbwActive">
                        <Active />
                    </div>
                    <div className="bh" data-type="xbwBh">
                        <h3 className="title">白话</h3>
                        <Bh />
                    </div>
                    <div className="recommend" data-type="xbwRecommend">
                        <Recommend />
                    </div>
                </div>
            </div>
        )
    }
}

export default Xbw
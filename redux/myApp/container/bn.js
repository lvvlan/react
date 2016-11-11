import ShowList from '../components/bn/showList';
import UserInfo from '../components/bn/userInfo';
import React, {Component} from 'react'

class Bn extends Component {
    render () {
        return (
            <div className="item_content clearfix">
                <div className="titleBox" data-type="bnUserInfo">
                    <UserInfo />
                </div>
                <div className="commodities" data-type="commodityList">
                    <ShowList />
                </div>
            </div>
        )
    }
}

export default Bn
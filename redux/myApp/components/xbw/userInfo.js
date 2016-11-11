import { connect } from 'react-redux';
import { updateData } from '../../actions/index';
import getUserInfo from '../../common/getUserInfo';
import React, {Component} from 'react'

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  //当前登录状态
            signed: 'init',
        };
    }

    componentDidMount () {
        new getUserInfo({
            isLoad: false,
            callBack: function(data) {
                if(data.isLogin){
                    const { dispatch, getState } = this.props;
                    dispatch({
                        type: 'XBW_userInfo',
                        data: getState.data
                    });
                }
                else{
                    this.setState({signed: 'off'});
                }
            }.bind(this)
        });
    }

    componentWillReceiveProps (nextProps) {
        const { dispatch, getState } = this.props;
        if(nextProps.getState.type !== getState.type && nextProps.getState.uid === getState.uid){
            dispatch(updateData({
                type: 'XBW_userInfo',
                data: getState.data,
                uid: nextProps.getState.uid
            }, function(){
                this.setState({signed: 'on'});
            }.bind(this)));
        }
    }

    renderUserInfo() {
        switch (this.state.signed){
            case 'on':
                const { data } = this.props.getState;
                if(data.isOpen){
                    return (
                        <div className="loggedIn" style={{display: 'block'}}>
                            <div className="appointment" data-type="appointment">
                                <span className="s1 been">加入白条家族共</span>
                                <em data-type="count">{data.day}</em><span className="s2">天</span>
                            </div>
                            <a href={data.playBtHref} className="activeRule clearfix" target="_blank" data-type="sbtRule" data-clstag="jr|keycount|newbthome||wanzhuan">玩转白条</a><a href={data.goBtHref} target="_blank" className="activeRule clearfix last" data-clstag="jr|keycount|newbthome|xbtqdbt">去打白条</a>
                        </div>
                    );
                }
                else {
                    return (
                        <div className="describe">
                            <span><i className="full clearfix"></i><em className="m16">激活白条即可参与粉丝活动</em></span>
                            <span><i className="get clearfix"></i><em data-type="elevenPay">白条创意周边只为你</em></span>
                        </div>    
                    );
                }
            case 'off':
                return (
                    <div className="describe">
                        <span><i className="full clearfix"></i><em className="m16">激活白条即可参与粉丝活动</em></span>
                        <span><i className="get clearfix"></i><em data-type="elevenPay">白条创意周边只为你</em></span>
                    </div>    
                );
            default:
                return '';
        }
    }

    render () {
        return (
            <div>
                {this.renderUserInfo()}
            </div>
        )
    }
}

function getData(state){
    return {
        getState: state.XBW_userInfo
    };
}

export default connect(getData)(UserInfo);
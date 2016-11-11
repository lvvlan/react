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
                        type: 'BN_userInfo',
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
                type: 'BN_userInfo',
                data: getState.data,
                uid: nextProps.getState.uid
            }, function(){
                this.setState({signed: 'on'});
            }.bind(this)));
        }
    }
    renderUserInfo(){
        switch (this.state.signed){
            case 'on':
                const { data } = this.props.getState;
                if(data.opened){
                    return (
                        <div className="loggedIn" style={{display: 'block'}}>
                            <div className="sideTitle commodityBn">
                                <h3>白拿</h3>
                                <span className="privileged"><em>1元耍大牌</em><em className="last">想要尽管来</em></span>
                                <div className="loggedIn">
                                    <div className="appointment" data-type="appointment">
                                        {data.newUser
                                            ? <div><span className="s1">新用户全场任意白拿</span>{/*新用户*/}
                                              <em data-type="count" newUser="true">1</em><span className="s2">次</span></div>
                                            : <div><span className="s1">可抽奖白条订单</span>{/*老用户*/}
                                              <em data-type="count">{data.userOrders}</em><span className="s2">单</span></div>
                                        }
                                    </div>
                                    <a className="activeRule" href="javascript:void (0);" data-type="bnRule" data-clstag="jr|keycount|newbthome|bainagz">详细规则</a>
                                    <a className="activeRule last" href="//jr.jd.com/buy/index" target="_blank" data-type="record" data-clstag="jr|keycount|newbthome|bainaqdbt">去打白条</a>
                                </div>
                            </div>
                            <div className="sideTitle lcBn">
                                <span className="privileged"><em>商品您白拿</em><em className="last">购物还赚钱</em></span>
                                <div className="describe">
                                    <span><i className="new clearfix"></i><em className="m16">京东全场任意选</em></span>
                                    <span><i className="get clearfix"></i><em>商品到手，收益不误</em><a href="//baina.jd.com/" className="activeRule clearfix" target="_blank" data-clstag="jr|keycount|newbthome|lcbnguize">详细规则&nbsp;<b className="gt">&gt;</b></a></span>
                                </div>
                            </div>
                        </div>
                    );
                }
                else {
                    return (
                        <div>
                            <div className="sideTitle commodityBn">
                                <h3>白拿</h3>
                                <span className="privileged"><em>1元耍大牌</em><em className="last">想要尽管来</em></span>
                                <div className="describe">
                                    <span><i className="new clearfix"></i><em className="m16">新激活用户当天任意白拿</em></span>
                                    <span><i className="get clearfix"></i><em>多打白条，白条机会享不停</em><a href="javascript:void (0);" className="activeRule clearfix" data-type="bnRule" data-clstag="jr|keycount|newbthome|bainagz">白拿规则&nbsp;<b className="gt">&gt;</b></a></span>
                                </div>
                            </div>
                            <div className="sideTitle lcBn">
                                <span className="privileged"><em>商品您白拿</em><em className="last">购物还赚钱</em></span>
                                <div className="describe">
                                    <span><i className="new clearfix"></i><em className="m16">京东全场任意选</em></span>
                                    <span><i className="get clearfix"></i><em>商品到手，收益不误</em><a href="//baina.jd.com/" className="activeRule clearfix" target="_blank" data-clstag="jr|keycount|newbthome|lcbnguize">详细规则&nbsp;<b className="gt">&gt;</b></a></span>
                                </div>
                            </div>
                        </div>    
                    );
                }
            case 'off':
                return (
                    <div>
                        <div className="sideTitle commodityBn">
                            <h3>白拿</h3>
                            <span className="privileged"><em>1元耍大牌</em><em className="last">想要尽管来</em></span>
                            <div className="describe">
                                <span><i className="new clearfix"></i><em className="m16">新激活用户当天任意白拿</em></span>
                                <span><i className="get clearfix"></i><em>多打白条，白条机会享不停</em><a href="javascript:void (0);" className="activeRule clearfix" data-type="bnRule" data-clstag="jr|keycount|newbthome|bainagz">白拿规则&nbsp;<b className="gt">&gt;</b></a></span>
                            </div>
                        </div>
                        <div className="sideTitle lcBn">
                            <span className="privileged"><em>商品您白拿</em><em className="last">购物还赚钱</em></span>
                            <div className="describe">
                                <span><i className="new clearfix"></i><em className="m16">京东全场任意选</em></span>
                                <span><i className="get clearfix"></i><em>商品到手，收益不误</em><a href="//baina.jd.com/" className="activeRule clearfix" target="_blank" data-clstag="jr|keycount|newbthome|lcbnguize">详细规则&nbsp;<b className="gt">&gt;</b></a></span>
                            </div>
                        </div>
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
        getState: state.BN_userInfo
    };
}

export default connect(getData)(UserInfo);


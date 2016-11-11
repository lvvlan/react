import { connect } from 'react-redux';
import { updateData } from '../../actions/index';
import React, {Component} from 'react';
import getUserInfo from '../../common/getUserInfo';

class Yhj extends Component {
    componentDidMount() {
        const { dispatch, getState } = this.props;
        dispatch({
            type: 'DBT_yhj',
            data: getState.data
        });
    }
    
    componentWillReceiveProps(nextProps) {
        const { dispatch, getState } = this.props;
        if(nextProps.getState.type !== getState.type && nextProps.getState.uid === getState.uid){
            new getUserInfo({
                isLoad: false,
                callBack: function (data){
                    dispatch(updateData({
                        type: 'DBT_yhj',
                        data: getState.data,
                        uid: nextProps.getState.uid,
                        isLogin: data.isLogin
                    }));
                }
            });
        }
    }

    renderYhj(list, json, index) {
        return list.map(
            (res, i) =>{
                if(res.type == 'ordinary'){    //普通券
                    return (
                        <a key={i} className="coupons" href={res.href} target="_blank" data-type="coupons" data-clstag={`jr|keycount|newbthome|dbtquan${i+1}`}>
                            <i className="size36">￥</i><strong className="size36">{res.amounts}</strong><span>{res.description}<em>{res.limit}</em></span>
                            <span className="icon"></span>
                        </a>
                    );
                }
                else if(res.type == 'free'){   //免息券
                    return (
                        <a key={i} className="coupons free" href={res.href} target="_blank" data-type="coupons" data-clstag={`jr|keycount|newbthome|dbtquan${i+1}`}>
                            <strong>{res.amounts}</strong><span>{res.description}<em>{res.limit}</em></span>
                            <span className="icon"></span>
                        </a>
                    );
                }
                else if(res.type == 'discount'){   //折扣券
                    return (
                        <a key={i} className="coupons discount" href={res.href} target="_blank" data-type="coupons" data-clstag={`jr|keycount|newbthome|dbtquan${i+1}`}>
                            <strong className="size36">{res.amounts}<b>折</b></strong><span>{res.description}<em>{res.limit}</em></span>
                            <span className="icon"></span>
                        </a>
                    );
                }
            }
        )
    }

    render () {
        const { data } = this.props.getState;
        return (
            <div>
                <span className="kyq">
                    {data.surplus > 0 
                        ? <span>您有<em>{data.surplus}</em>张可用白条优惠券</span>
                        : `热门优惠券推荐`
                    }
                </span>
                <div className="yhj_list">
                    {this.renderYhj(data.dataList)}
                </div>
                <a className="more" href={data.moreHref} target="_blank" data-clstag="jr|keycount|newbthome|dbtquanmore">MORE&nbsp;<i className="gt">&gt;</i></a>
            </div>
        )
    }
}

function getData(state){
    return {
        getState: state.DBT_yhj
    };
}

export default connect(getData)(Yhj);
import { connect } from 'react-redux';
import { updateData } from '../../actions/index';
import React, {Component} from 'react';
import LoopScroll from '../../plugins/loopScroll';

//补零函数
function toDou (num){
    if(num <= 9){
        return "0" + num;
    }
    else{
        return "" + num;
    }
};

//转化时间
function formatTime(time){
    var s = Math.floor(time / 1000);
    var d = Math.floor(s/86400);
    s%=86400;
    var h = Math.floor(s/3600);
    s%=3600;
    var m = Math.floor(s/60);
    s%=60;

    return {
        d: toDou(d),
        h: toDou(h),
        m: toDou(m),
        s: toDou(s)
    };
};

let expire = 0; //过期商品个数

class ShowList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'init', //当前获取服务器时间处于什么状态  
            curTime: 0   //当前服务器时间
        };
    }
    componentDidMount () {
        const { dispatch, getState } = this.props;

        dispatch({
            type: 'BN_showList',
            data: getState.data
        });
    }
    componentWillReceiveProps (nextProps) {
        const { dispatch, getState } = this.props;
        if(nextProps.getState.type !== getState.type && nextProps.getState.uid === getState.uid){
            dispatch(updateData({
                type: 'BN_showList',
                data: getState.data,
                uid: nextProps.getState.uid
            }, function (jsonData){
                var listBox = $("[data-type=commodityList]", '#bn'),
                    oldBtnTxt = "";
                //移入换字（立即白拿）
                listBox.find("li").find(".buyNow").on({
                    "mouseenter": function (){
                        oldBtnTxt = $(this).find(".txt").html();
                        if(!$(this).hasClass('end')){
                            $(this).find(".txt").html("立即白拿");
                        }
                    },
                    "mouseleave": function () {
                        $(this).find(".txt").html(oldBtnTxt);
                    }
                });
                
                //中奖名单滚动
                let scroll = new LoopScroll({
                    parent: $(".roster", '#bn').find(".detail"),
                    iSpeed: 3,
                    method: "pause"
                });
                scroll.animation();
                //商品结束逻辑
                let timer = null,
                    curTime = this.props.getState.data.now;
                timer = setInterval(function (){
                    if(expire == jsonData.length){
                        clearInterval(timer);
                    }
                    curTime+=1000;
                    this.setState({
                        curTime: curTime,
                        status: 'loop'
                    });
                }.bind(this), 1000);
            }.bind(this)));
        }
    }
    hrefTag(json, i) {
        if(json.linkUrl){
            return (
                <a href={json.linkUrl} target="_blank" className="pic" data-clstag={`jr|keycount|newbthome|bainasku{i+1}`}>
                    <img className="shake" src={json.imgSrc}/>
                    {json.wechat
                        ? <i className="wechat"></i>
                        : ''
                    }
                </a>
            );
        }
        else{
            return (
                <a href='javascript:void(0)' className="pic" data-clstag={`jr|keycount|newbthome|bainasku{i+1}`}>
                    <img className="shake" src={json.imgSrc}/>
                    {json.wechat
                        ? <i className="wechat"></i>
                        : ''
                    }
                </a>
            );
        }
    }
    renderTime(arr, i) {
        let localArr = arr,
            timeStr = '';

        if(this.state.status == 'init'){
            timeStr = '距结束 00 : 00 : 00';
        }
        else{
            if(localArr[i].isExpire){   //已过期
                timeStr = '已结束';
            }
            else{
                if(localArr[i].end - this.state.curTime <= 0 && !localArr[i].isExpire){    //第一次过期设置
                    expire++;
                    localArr[i].isExpire = true;
                    timeStr = '距结束 00 : 00 : 00';
                }
                else{
                    let timeObj = formatTime(localArr[i].end - this.state.curTime);
                    timeStr = `距结束 ${timeObj.h} : ${timeObj.m} : ${timeObj.s}`;
                }
            }
        }

        return (
            <span>{timeStr}</span>
        );
    }    
    renderList(json) {
        return (
            <ul className="commodities_list clearfix">
                {
                    json.bnList.map(
                        (res, i) =>
                        <li key={i}>
                            <h3 className="time">{this.renderTime(json.bnList, i)}</h3>
                            <div className="commodities_details">
                                {this.hrefTag(res, i)}
                                <a href={res.linkUrl} target="_blank" className="commodities_title" data-clstag={`jr|keycount|newbthome|bainasku${i+1}`}>{res.title}</a>
                                <span className="price">
                                    {res.bainaPrice > -1
                                        ? <span><strong>￥</strong><em>{res.bainaPrice}</em><s><i>￥</i><b>{res.price}</b></s></span>
                                        : <em className="bnq">{res.price}</em>
                                    }
                                </span>
                                <a className="buyNow" href="javascript:void (0);" data-data={res.skuId} data-clstag={`jr|keycount|newbthome|bainabtn${i+1}`}>
                                    <i className="mask"></i>
                                    <span className="txt">
                                        {res.newUser
                                            ? '立即白拿'
                                            : res.remark
                                        }
                                    </span>
                                </a>
                            </div>
                        </li>
                    )
                }
            </ul>
        );
    }
    singleRoster(roster, i) {
        if(i * 2 <roster.length){
            return (
                <li key={i}>
                    <span>{roster[i*2]}</span>
                    <span className="even">{roster[i*2+1]}</span>
                </li>
            );
        }
    }
    render () {
        const { data } = this.props.getState;
        return (
            <div>
                <div id="commodityBox">
                    <div className="background"></div>
                    <span className="arrow"><a href="javascript:void (0);" className="prev"></a></span>
                    <div className="commodityWrap">
                        {this.renderList(data)}
                    </div>
                    <span className="arrow"><a href="javascript:void (0);" className="next"></a></span>
                    <div className="roster">
                        <h3 className="title">白拿获奖名单 :</h3>
                        <ul className="detail">
                            {
                                data.roster.map(
                                    (res, i) =>
                                    this.singleRoster(data.roster, i)
                                )
                            }
                        </ul>
                        <i className="line"></i>
                    </div>
                </div>
                <div className="lcList" data-type="lcList">
                    {
                        data.lcList.map(
                            (res, i) =>
                            <div key={i} className="item">
                                <a href={res.href} target="_blank" className="pic" data-clstag={`jr|keycount|newbthome|lcbnsku${i+1}`}>
                                    <img className="shake" src={res.imgSrc} />
                                </a>
                                <a href={res.href} target="_blank" className="title" data-clstag={`jr|keycount|newbthome|lcbnsku${i+1}`}><i>{res.tag}</i>{res.title}</a>
                                <s className="originalPrice"><i>￥</i><b>{res.originalPrice}</b></s>
                                <a href={res.href} target="_blank" className="buy" data-clstag={`jr|keycount|newbthome|lcbnsku${i+1}`}><i className="mask"></i>{res.buyWord}</a>
                            </div>
                        )
                    }
                    <a href="//baina.jd.com/" target="_blank" className="more" data-clstag="jr|keycount|newbthome|lcbnguize">
                        <i className="i1">拿</i><i className="i2">更</i><i className="i3">多</i>
                    </a>
                </div>
            </div>
        )
    }
}

function getData(state){
    return {
        getState: state.BN_showList
    };
}

export default connect(getData)(ShowList);
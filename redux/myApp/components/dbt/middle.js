import { connect } from 'react-redux';
import { updateData } from '../../actions/index';
import React, {Component, PropTypes} from 'react'

import slider from '../../plugins/slider';

let isSlider = false;

class Middle extends Component {
    componentDidMount() {
        const { dispatch, getState } = this.props;

        dispatch({
            type: 'DBT_middle',
            data: getState.data
        });
    }

    componentWillReceiveProps (nextProps) {
        const { dispatch, getState } = this.props;
        if(nextProps.getState.type !== getState.type && nextProps.getState.uid === getState.uid){
            dispatch(updateData({
                type: 'DBT_middle',
                data: getState.data,
                uid: nextProps.getState.uid
            }, function() {
                if(!isSlider){
                    isSlider = true;
                    new slider({
                        parent: $("[data-type=dbtBetween]", $("#dbt")),
                        activeClass: "active"
                    });
                }
            }));
        }
    }

    render () {
        const { data } = this.props.getState;
        //console.log(this.props.getState)
        return (
            <div>
                <ul className="item_list" data-type="content">
                    {
                        data.map(
                            (res, i) =>
                            <li key={i}>
                                <a href={res.href} target="_blank" className="pic" data-clstag={`jr|keycount|newbthome|dbtsku${i+1}`}>
                                    <img className="shake" src={res.imgSrc} />
                                </a>
                                <a href={res.href} target="_blank" className="title" title={res.title} data-clstag={`jr|keycount|newbthome|dbtsku${i+1}`}><em className="tag">{res.tag}</em>{res.title}</a>
                                <p className="desc">
                                    <em>推荐理由：</em>{res.recommend}
                                </p>
                                <span className="price"><strong>￥</strong><em>{res.presentPrice}</em><span className="discountInfo"><b>{res.originalPrice}</b></span></span>
                                <a className="buyNow" href={res.href} target="_blank" data-clstag={`jr|keycount|newbthome|dbtsku${i+1}`}><em>立即购买</em></a>
                            </li>
                        )
                    }
                </ul>
                <ol className="point" data-type="bar">
                    {
                        data.map(
                            (res, i) => 
                            <li key={i}></li>
                        )
                    }
                </ol>
            </div>
        )
    }
}

function getData(state){
    return {
        getState: state.DBT_middle
    };
}

export default connect(getData)(Middle);
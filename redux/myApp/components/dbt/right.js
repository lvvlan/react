import { connect } from 'react-redux';
import { updateData } from '../../actions/index';
import React, {Component} from 'react';

class Right extends Component {
    componentDidMount() {
        const { dispatch, getState } = this.props;

        dispatch({
            type: 'DBT_right',
            data: getState.data
        });
    }

    componentWillReceiveProps (nextProps) {
        const { dispatch, getState } = this.props;
        if(nextProps.getState.type !== getState.type && nextProps.getState.uid === getState.uid){
            dispatch(updateData({
                type: 'DBT_right',
                data: getState.data,
                uid: nextProps.getState.uid
            }));
        }
    }

    render() {
        const { data } = this.props.getState;
        
        return (
            <div>
                {
                    data.map(
                        (res, i) =>
                        <div key={i} className={i == data.length-1 ? 'right_item last' : 'right_item'}>
                            <a href="{res.href}" target="_blank" className="section_top clearfix" data-clstag={`jr|keycount|newbthome|dbtbcj{i+1}`}>
                                <span className="pic"><img className="shake" src={res.imgSrc}/></span>
                                <span className="subTitle">
                                    <em className="tag">{res.tag}</em>
                                    <span className="title">{res.title}</span>
                                    <span className="price">{res.priceTitle}</span>
                                </span>
                            </a>
                            <div className="desc">
                                <em>推荐理由：</em>{res.recommend}
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

function getData(state){
    return {
        getState: state.DBT_right
    };
}

export default connect(getData)(Right);
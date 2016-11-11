import { connect } from 'react-redux';
import { updateData } from '../../actions/index';
import React, {Component} from 'react'

class Recommend extends Component {
    componentDidMount () {
        const { dispatch, getState } = this.props;

        dispatch({
            type: 'XBW_recommend',
            data: getState.data
        });
    }

    componentWillReceiveProps (nextProps) {
        const { dispatch, getState } = this.props;
        if(nextProps.getState.type !== getState.type && nextProps.getState.uid === getState.uid){
            dispatch(updateData({
                type: 'XBW_recommend',
                data: getState.data,
                uid: nextProps.getState.uid
            }));
        }
    }
    
    render () {
        const { data } = this.props.getState;
        return (
            <div>
                <div className="title">
                    <h3>时光杂货店</h3>
                    <p className="periods">【{data.periods}】</p>
                    <p className="theme">{data.theme}</p>
                </div>
                {
                    data.bwList.map(
                        (res, i) =>
                        <a key={i} href={res.href} title={res.title} target="_blank" className={i == data.bwList.length - 1 ? 'last' : ''} data-clstag={`jr|keycount|newbthome|zhoubian${i+1}`}>
                            <img src={res.imgSrc} />
                            <h3>{res.title}</h3>
                            <p>{res.price}</p>
                        </a>
                    )
                }
            </div>
        )
    }
}

function getData(state){
    return {
        getState: state.XBW_recommend
    };
}

export default connect(getData)(Recommend);
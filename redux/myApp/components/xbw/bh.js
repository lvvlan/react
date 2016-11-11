import { connect } from 'react-redux';
import { updateData } from '../../actions/index';
import React, {Component} from 'react'

let isSlider = false;

class Bh extends Component {
    componentDidMount () {
        const { dispatch, getState } = this.props;

        dispatch({
            type: 'XBW_bh',
            data: getState.data
        });
    }

    componentWillReceiveProps (nextProps) {
        const { dispatch, getState } = this.props;
        if(nextProps.getState.type !== getState.type && nextProps.getState.uid === getState.uid){
            dispatch(updateData({
                type: 'XBW_bh',
                data: getState.data,
                uid: nextProps.getState.uid
            }));
        }
    }

    render () {
        const { data } = this.props.getState;
        return (
            <div>
                <ul className="speech" data-type="content">
                    {
                        data.map(
                            (res, i) =>
                            <li key={i}>
                                <i className="icon"></i><a href={res.titleHref} target="_blank" className="word" data-clstag={`jr|keycount|newbthome|baihua${i+1}`}>{res.title}</a>
                            </li>
                        )
                    }
                </ul>
                <a href="http://club.jr.jd.com/theme/circle/5?orderBy=1&pageNo=1" target="_blank" className="more" data-clstag="jr|keycount|newbthome|baihuamore">更多白话<i className="gt">&gt;</i></a>
            </div>
        )
    }
}

function getData(state){
    return {
        getState: state.XBW_bh
    };
}

export default connect(getData)(Bh);
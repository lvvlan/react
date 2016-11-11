import { connect } from 'react-redux';
import { updateData } from '../../actions/index';
import React, {Component} from 'react';

import slider from '../../plugins/slider';

let isSlider = false;

class Left extends Component {
    componentDidMount() {
        const { dispatch, getState } = this.props;
        dispatch({
            type: 'DBT_left',
            data: getState.data
        });
    }
    componentWillReceiveProps(nextProps) {
        const { dispatch, getState } = this.props;
        if(nextProps.getState.type !== getState.type && nextProps.getState.uid === getState.uid){
            dispatch(updateData({
                type: 'DBT_left',
                data: getState.data,
                uid: nextProps.getState.uid
            }, function() {
                if(!isSlider){
                    isSlider = true;
                    new slider({
                        parent: $("[data-type=dbtLeft]", $("#dbt")),
                        activeClass: "active"
                    });
                }
            }));
        }
    }
    
    render() {
        const { data } = this.props.getState;
        
        return (
            <div>
                <div className="left_top" data-type="dbtLeft">
                    <ul className="item_list" data-type="content">
                        {
                            data.promote.map(
                                (res, i) =>
                                <li key={i}>
                                    <a href={res.href} target="_blank" data-clstag={`jr|keycount|newbthome|dbthdtj${i+1}`}>
                                        <img src={res.imgSrc}/>
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                    <ol className="point" data-type="bar">
                        {
                            data.promote.map(
                                (res, i) =>
                                <li key={i} className={i == 0 ? 'active':''}></li>
                            )
                        }
                    </ol>
                </div>
                <div className="left_bottom">
                    <ul className="item_list">
                        {
                            data.articleList.map(
                                (res, i) =>
                                <li key={i} className={i == 0 ? 'first':''}>
                                    <a href="{res.href}" target="_blank" title="{res.title}" data-clstag={`jr|keycount|newbthome|dbthdlist${i+1}`}><em>[{res.tag}]</em>{res.title}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

function getData(state){
    return {
        getState: state.DBT_left
    };
}

export default connect(getData)(Left);
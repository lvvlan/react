import { connect } from 'react-redux';
import { updateData } from '../../actions/index';
import React, {Component} from 'react';
import slider from '../../plugins/slider';

let isSlider = false;

class Active extends Component {
    componentDidMount () {
        const { dispatch, getState } = this.props;

        dispatch({
            type: 'XBW_active',
            data: getState.data
        });
    }

    componentWillReceiveProps (nextProps) {
        const { dispatch, getState } = this.props;
        if(nextProps.getState.type !== getState.type && nextProps.getState.uid === getState.uid){
            dispatch(updateData({
                type: 'XBW_active',
                data: getState.data,
                uid: nextProps.getState.uid
            }, function() {
                if(!isSlider){
                    isSlider = true;
                    let arrow = null;
                    new slider({
                        parent: $("[data-type=xbwActive]", $("#xbw")),
                        activeClass: "active",
                        triggerType: "hover",
                        type: "fade",
                        duration: 1000,
                        callback: function (_this) {
                            arrow = $(".arrow", _this.parent);

                            arrow.stop().animate({top: 16+24+_this.index * 56}, _this.options.duration);
                        }
                    });
                }
            }));
        }
    }
    
    
    render() {
        const { data } = this.props.getState;

        return (
            <div>
                <div className="navWrap">
                    <ul className="nav" data-type="bar">
                        {
                            data.map(
                                (res, i) =>
                                <li key={i}>
                                    <i className={res.status ? 'on' : ''}></i>{res.title}
                                </li>
                            )
                        }
                    </ul>
                    <i className="arrow"></i>
                </div>
                <ul className="details" data-type="content">
                    {
                        data.map(
                            (res, i) =>
                            <li key={i}>
                                <img src={res.imgSrc} />
                                <a href={res.href} target="_blank" data-clstag={`jr|keycount|newbthome|xbwhd${i+1}`}>{res.btn}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

function getData(state){
    return {
        getState: state.XBW_active
    };
}

export default connect(getData)(Active);
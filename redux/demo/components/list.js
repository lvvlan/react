/**
 * Des
 * Created by luowei5 on 2016/10/25.
 * E-mail luowei5@jd.com
 * Update 2016/10/25
 */
import { connect } from 'react-redux';
import {deleteData} from '../actions';

let List = React.createClass({
    render() {
        const {dispatch} = this.props;

        return (
            <p>
                {this.props.data.text}
                {' '}
                <span onClick={() => dispatch(deleteData({id: this.props.id}))}>删除</span>
            </p>
        );
    }
});

function select (state){
    return {
        myData: state.getData
    };
}

export default connect(select)(List);
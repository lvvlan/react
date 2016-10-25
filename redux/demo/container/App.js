/**
 * Des
 * Created by luowei5 on 2016/10/25.
 * E-mail luowei5@jd.com
 * Update 2016/10/25
 */
import { connect } from 'react-redux';
import  List  from '../components/list';
import { updateData, UPDATE_TYPE, deleteData } from '../actions';

let App = React.createClass({
    handleClick(dispatch) {
        console.log(dispatch);
        //dispatch(deleteData({id:this.props.id}));
    },
    render() {
        const { dispatch, myData } = this.props;
        return (
            <div>
                <div>
                    <div onClick={() => dispatch(updateData(UPDATE_TYPE.READY))}>
                        <p>未开始</p>
                    </div>
                    <div onClick={() => dispatch(updateData(UPDATE_TYPE.RUNNING))}>
                        <p>运行中</p>
                    </div>
                    <div onClick={() => dispatch(updateData(UPDATE_TYPE.COMPLETED))}>
                        <p>已完成</p>
                    </div>
                </div>
                <div>
                    {myData.map((ele) => <List data={ele} key={ele.id} id={ele.id} />)}
                </div>
            </div>
        );
    }
});

function select (state){
    return {
        myData: state.getData
    };
}

export default connect(select)(App);
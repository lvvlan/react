/**
 * Des
 * Created by luowei5 on 2016/10/25.
 * E-mail luowei5@jd.com
 * Update 2016/10/25
 */
import { connect } from 'react-redux';
import List from '../components/List';
import Header from '../components/header';
import rootReducer from '../reducers';
import { DIRECTIVE_TYPE, updateData, fetchPostsIfNeed } from '../actions';

let App = React.createClass({
    handleClick(flag){
        const { dispatch, myState } = this.props;
        //dispatch(fetchPostsIfNeed(flag));
        dispatch({
            type: flag,
            posts: {
                [flag.toLowerCase()]: myState.posts
            },
            lastUpdate: 222
        });
    },
    componentDidMount() {
        const { dispatch } = this.props;
        //console.log(1);
        dispatch(updateData(DIRECTIVE_TYPE.START));
    },
    componentWillReceiveProps(nextProps){
        if(nextProps.myState.type !== this.props.myState.type){
            console.log(2);
            const { dispatch } = this.props;
            //console.log(nextProps.myState.type);
            dispatch(fetchPostsIfNeed(nextProps.myState.type));
        }
    },
    render() {
        //console.log(this.props);
        //console.log(1);
        const {isFetching, posts} = this.props.myState;
        //console.log(posts);
        const isEmpty = posts.length === 0;
        return (
            <div>
                <div>
                    <Header onClick={this.handleClick} />
                </div>
                <div>
                    {isEmpty
                        ? (isFetching ? <h2>Loading...</h2> : <h2>empty.</h2>)
                        : <List listData={posts} />
                    }
                </div>
            </div>
        );
    }
});

function select(state)
{
    //console.log(state);
    return {  
        myState: state
    };
}
export default connect(select)(App);
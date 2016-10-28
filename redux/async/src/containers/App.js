/**
 * Des
 * Created by luowei5 on 2016/10/24.
 * E-mail luowei5@jd.com
 * Update 2016/10/24
 */
import { connect } from 'react-redux';
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

const App = React.createClass({
    PropTypes: {
        selectedReddit: React.PropTypes.string.isRequired,
        posts: React.PropTypes.array.isRequired,
        isFetching: React.PropTypes.bool.isRequired,
        lastUpdated: React.PropTypes.number,
        disptach: React.PropTypes.func.isRequired
    },
    componentDidMount() {
        const { dispatch, selectedReddit } = this.props;
        dispatch(fetchPostsIfNeeded(selectedReddit));
    },
    componentWillReceiveProps(nextPros) {
        console.log(nextPros);
        if (nextPros.selectedReddit !== this.props.selectedReddit){
            const { dispatch, selectedReddit } = nextPros;
            dispatch(fetchPostsIfNeeded(selectedReddit));
        }
    },
    handleChange(nextReddit) {
        this.props.dispatch(selectReddit(nextReddit));
    },
    handleRefreshClick(e) {
        e.preventDefault();

        const { dispatch, selectedReddit } = this.props;
        dispatch(invalidateReddit(selectedReddit));
        dispatch(fetchPostsIfNeeded(selectedReddit));
    },
    render() {
        const { selectedReddit, posts, isFetching, lastUpdated } = this.props;
        //console.log(this.props);
        const isEmpty = posts.length === 0;

        return (
            <div>
                <Picker value={selectedReddit} onChange={this.handleChange} options={['reactjs', 'frontend']} />
                <p>
                    {lastUpdated &&
                        <span>
                            Last update at {new Date(lastUpdated).toLocaleTimeString()}
                            {' '}
                        </span>
                    }
                    {!isFetching &&
                        <a href="#" onClick={this.handleRefreshClick}>
                            Refresh
                        </a>
                    }
                </p>
                {isEmpty
                    ? (isFetching ? <h2>Loading...</h2> : <h2>empty.</h2>)
                    : <div style={{opacity: isFetching ? 0.5 : 1}}>
                        <Posts posts={posts}/>
                      </div>
                }
            </div>
        );
    }
});

const mapStateToProps = state => {
    const { selectedReddit, postsByReddit } = state;    //postsByReddit在action（postsByReddit）里返回了
    const { isFetching, lastUpdated, items: posts } = postsByReddit[selectedReddit] || { isFetching:true, items: [] };

    //console.log({selectedReddit,posts,isFetching,lastUpdated});

    return {
        selectedReddit, //抓住数据key
        posts,  //数据集合
        isFetching, //是否在抓取
        lastUpdated     //上次更新时间
    }
};

export default connect(mapStateToProps)(App);
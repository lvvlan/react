/**
 * Des
 * Created by luowei5 on 2016/10/24.
 * E-mail luowei5@jd.com
 * Update 2016/10/24
 */
import { combineReducers } from 'redux';
import { SELECT_REDDIT, INVALIDATE_REDDIT, REQUEST_POSTS, RECEIVE_POSTS } from '../actions';

//根据actionType 返回不同的state
const posts = (state = {
    isFetching: false,  //是否在抓取数据
    didInvalidate: false,   //数据是否过时
    items: []
}, action) => {
    switch (action.type){
        case INVALIDATE_REDDIT: //刷新请求
            return {
                ...state,
                didInvalidate: true
            };
        case REQUEST_POSTS: //发送请求
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case RECEIVE_POSTS: //接受请求
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt  //上次更新时间
            };
        default:
            return state;
    }
};

const selectedReddit = (state = 'reactjs', action) => {
    switch (action.type){
        case SELECT_REDDIT:
            return action.reddit;
        default:
            return state;
    }
};

const postsByReddit = (state= {}, action) => {
     //console.log(state, action);
    switch (action.type){
        case INVALIDATE_REDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.reddit]: posts(state[action.reddit], action)
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    postsByReddit,
    selectedReddit
});

export default rootReducer;
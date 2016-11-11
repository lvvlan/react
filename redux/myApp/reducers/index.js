/**
 * state规则
 * 
 * {
 *      type: 请求名称
 *      isFetching: 是否请求（true，请求；false：未请求）
 *      status: 当前状态（request: 开始请求；recive：接收中；complete：请求完成；fail：请求失败）
 *      data: 返回数据
 * }
 */
//reducer
import { combineReducers } from 'redux';
import createKey from '../plugins/createKey'

//DBT_left
function DBT_left(state = {
    type: '',
    isFetching: false,
    uid: createKey(16),
    data: {
        promote: [],
        articleList: []
    }
}, action){
    if(action.type == 'DBT_left'){
        return {
            ...state,
            type: action.type,
            isFetching: action.isFetching,
            status: action.status,
            data: action.data
        };
    }
    else {
        return state;
    }
}

//DBT_middle
function DBT_middle(state = {
    type: '',
    isFetching: false,
    uid: createKey(16),
    data: []
}, action){
    if(action.type == 'DBT_middle'){
        return {
            ...state,
            type: action.type,
            isFetching: action.isFetching,
            status: action.status,
            data: action.data
        };
    }
    else {
        return state;
    }

}

//DBT_right
function DBT_right(state={
    type: '',
    isFetching: false,
    uid: createKey(16),
    data: []
}, action){
    if(action.type == 'DBT_right'){
        return {
            ...state,
            type: action.type,
            isFetching: action.isFetching,
            status: action.status,
            data: action.data
        };
    }
    else {
        return state;
    }
}

//DBT_yhj
function DBT_yhj(state={
    type: '',
    isFetching: false,
    uid: createKey(16),
    data: {
        surplus: 0,
        dataList: [],
        moreHref: ''
    }
}, action){
    if(action.type == 'DBT_yhj'){
        return {
            ...state,
            type: action.type,
            isFetching: action.isFetching,
            status: action.status,
            data: action.data
        };
    }
    else {
        return state;
    }
}

//XBW_active
function XBW_active(state={
    type: '',
    isFetching: false,
    uid: createKey(16),
    data: []
}, action){
    if(action.type == 'XBW_active'){
        return {
            ...state,
            type: action.type,
            isFetching: action.isFetching,
            status: action.status,
            data: action.data
        };
    }
    else {
        return state;
    }
}

//XBW_bh
function XBW_bh(state={
    type: '',
    isFetching: false,
    uid: createKey(16),
    data: []
}, action){
    if(action.type == 'XBW_bh'){
        return {
            ...state,
            type: action.type,
            isFetching: action.isFetching,
            status: action.status,
            data: action.data
        };
    }
    else {
        return state;
    }
}

//XBW_recommend
function XBW_recommend(state={
    type: '',
    isFetching: false,
    uid: createKey(16),
    data: {
        periods: '',
        theme: '',
        bwList: []
    }
}, action){
    if(action.type == 'XBW_recommend'){
        return {
            ...state,
            type: action.type,
            isFetching: action.isFetching,
            status: action.status,
            data: action.data
        };
    }
    else {
        return state;
    }
}

//XBW_userInfo
function XBW_userInfo(state={
    type: '',
    isFetching: false,
    uid: createKey(16),
    data: {
        isOpen: false,
        day: 0,
        goBtHref: '',
        playBtHref: ''
    }
}, action){
    if(action.type == 'XBW_userInfo'){
        return {
            ...state,
            type: action.type,
            isFetching: action.isFetching,
            status: action.status,
            data: action.data
        };
    }
    else {
        return state;
    }
}

//BN_showList
function BN_showList(state={
    type: '',
    isFetching: false,
    uid: createKey(16),
    data: {
        now: 0,
        bnList: [],
        lcList: [],
        roster: [],
        goHref: '',
        newUser: 0
    }
}, action){
    if(action.type == 'BN_showList'){
        return {
            ...state,
            type: action.type,
            isFetching: action.isFetching,
            status: action.status,
            data: action.data
        };
    }
    else {
        return state;
    }
}

//BN_userInfo
function BN_userInfo(state={
    type: '',
    isFetching: false,
    uid: createKey(16),
    data: {
        now: 0,
        bnList: [],
        lcList: [],
        roster: [],
        goHref: '',
        newUser: 0
    }
}, action){
    if(action.type == 'BN_userInfo'){
        return {
            ...state,
            type: action.type,
            isFetching: action.isFetching,
            status: action.status,
            data: action.data
        };
    }
    else {
        return state;
    }
}

const rootReducer = combineReducers({
    DBT_left,
    DBT_middle,
    DBT_right,
    DBT_yhj,
    XBW_active,
    XBW_bh,
    XBW_recommend,
    XBW_userInfo,
    BN_userInfo,
    BN_showList
});

export default rootReducer;
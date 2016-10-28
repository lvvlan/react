/**
 * Des
 * Created by luowei5 on 2016/10/25.
 * E-mail luowei5@jd.com
 * Update 2016/10/25
 */

export const DIRECTIVE_TYPE = {
    START: 'START',
    RUNNING: 'RUNNING',
    ENDING: 'ENDING'
};

//是否需要请求新数据
const shouldFetch = (state, type) => {

    let posts = state.posts;
    console.log(posts);
    if(!posts){
        return true;
    }
    console.log(state, '++++' + type);
    if(state.type == type){
        return false;
    }
    return true;
    //console.info(state, '++++' + type);
};

export const fetchPostsIfNeed = function (type){
    return function (dispatch, getState){
        if(shouldFetch(getState(), type)){
            return dispatch(updateData(type));
        }
    }
};

//选择加载数据
export function updateData(type) {
    return (dispatch) => {
        fetch(`../data/data.json`)
            .then(respones => respones.json())
            .then(data => {dispatch(
                {
                    type: type,
                    posts: data,
                    lastUpdate: new Date()
                }
            ); /*console.log(data);*/})
    };
}
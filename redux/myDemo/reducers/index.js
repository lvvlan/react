/**
 * Des
 * Created by luowei5 on 2016/10/25.
 * E-mail luowei5@jd.com
 * Update 2016/10/25
 */
import { DIRECTIVE_TYPE, updateData } from '../actions';

function rootReducer(state = {isFetching: false, posts: [], type: 'START'}, action) {
    //console.log(action); 
    switch (action.type){
        case DIRECTIVE_TYPE.START:
            return {
                posts: action.posts.start,
                lastUpdate: action.lastUpdate,
                isFetching: false,
                type: action.type
            };
        case DIRECTIVE_TYPE.RUNNING:
        //console.log(action);
            return {
                posts: action.posts.running,
                lastUpdate: action.lastUpdate,
                isFetching: false,
                type: action.type
            };
        case DIRECTIVE_TYPE.ENDING:
            return {
                posts: action.posts.ending,
                lastUpdate: action.lastUpdate,
                isFetching: false,
                type: action.type
            };
        default:
            return state;
    }
}

export default rootReducer;


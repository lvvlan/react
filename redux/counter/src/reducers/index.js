/**
 * Des
 * Created by luowei5 on 2016/10/20.
 * E-mail luowei5@jd.com
 * Update 2016/10/20
 */
export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
        default:
            return state;
    }
}
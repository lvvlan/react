/**
 * Des
 * Created by luowei5 on 2016/10/25.
 * E-mail luowei5@jd.com
 * Update 2016/10/25
 */
export const UPDATE_TYPE = {
    READY: 'READY',
    RUNNING: 'RUNNING',
    COMPLETED: 'COMPLETED'
};

export const DELETE_DATA = 'DELETE_DATA';

//加载完数据后
function loadAfter(text, json) {
    return {
        type: text,
        json
    };
}

//模拟用户操作状态 - 选择状态
export function updateData(text) {
    return (dispatch) => {
        //加载数据s
        fetch(`../../data/data.json`)
            .then(response => response.json())
            .then(json => dispatch(loadAfter(text, json)))
    }
}

//删除数据
export function deleteData(filter) {
    return {
        type: DELETE_DATA,
        filter
    };
}
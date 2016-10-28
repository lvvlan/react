/**
 * Des
 * Created by luowei5 on 2016/10/27.
 * E-mail luowei5@jd.com
 * Update 2016/10/27
 */

const FETCH_TYPE = {
    BANNER: 'BANNER'
};

//加载数据
export const updateData = (type, url) => dispatch => {
    $.ajax({
        url: url,
        dataType: 'json',
        success: function (data){
            dispatch({
                type: type,
                data: data
            });
        }
    });
};
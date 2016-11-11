/**
 * Des
 * Created by luowei5 on 2016/10/27.
 * E-mail luowei5@jd.com
 * Update 2016/10/27
 */
//action
//['登录'， '未登录']
const config = {
    type: 'GET',
    DBT: {
        left: {
            url: ['../data/dbt/left.json']
        },
        middle: {
            url: ['../data/dbt/middle.json']
        },
        right: {
            url: ['../data/dbt/right.json']
        },
        yhj: {
            url: ['../data/dbt/yhjLogin.json', '../data/dbt/yhj.json']
        }
    },
    XBW: {
        active: {
            url: ['../data/xbw/active.json']
        },
        bh: {
            url: ['../data/xbw/bh.json']
        },
        recommend: {
            url: ['../data/xbw/recommend.json']
        },
        userInfo: {
            url: ['../data/xbw/userInfo.json']
        }
    },
    BN: {
        showList: {
            url: ['../data/bn/showList.json']
        },
        userInfo: {
            url: ['../data/bn/userInfo.json']
        }
    }
};

function getUrl(str){
    return str.split('_');
}

//加载数据
export const updateData = (json, fnCb) => dispatch => {
    var arrUrl = getUrl(json.type);
    var action = {
        isLogin: true,
        ...json
    };
    var url = config[arrUrl[0]][arrUrl[1]].url[Number(!action.isLogin)];
    dispatch({
        ...action,
        status: 'REQUEST',
        data: action.data,
        isFetching: true
    });
    //console.log(json.type);
    $.ajax({
        url: url,
        dataType: 'json',
        success: function (data){
            //console.log(data);
            dispatch({
                ...action,
                data: data,
                status: 'COMPLETE',
                type: action.type,
                isFetching: false
            });
            //console.log(data);
            fnCb && fnCb(data);
        }
    });
};
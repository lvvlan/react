function getUserInfo(options){
    var self = this;
    self.options = $.extend({
        dataUrl: "",    //接口地址
        loadParams: {},
        isLoad: true,
        callBack: null,  //不加载的回调
        loginCallBack: null //登录的回调（可直接获取isLogin）
    }, options);

    self.init().bindEvent();
}

getUserInfo.prototype = {
    init: function (){
        var self = this;

        //self.debug = false; // 本地true 线上false

        //(document.domain == "localhost" || document.domain.indexOf("demo") == 0) ? self.debug = true : self.debug = false;
        self.debug = /(localhost)|(test.jd.com)|(demo.jr.jd.com)/gi.test(window.location.hostname);

        return self;
    },
    bindEvent: function (){
        var self = this;
        if(self.debug){
            //本地模式
            self.test(function (data){
                self.userCallBack(data);
            });
        }else{
            //线上模式
            jrBase.getUserLogin(function (data){
                self.userCallBack(data);
            });
        }
    },
    //模拟登录方法
    test: function (fn){
        var data = {};
        var reg = /\?notLogin$/;

        if(reg.test(location.href)){
            data.isLogin = false;
        }else{
            data.isLogin = true;
        }

        fn(data);
    },
    //登录器里的回调
    userCallBack: function (userInfo){
        var self = this,
            loadParams = self.options.loadParams;

        if(self.options.isLoad){
            if(userInfo.isLogin){
                loadParams.dataUrl = self.options.dataUrl;
            }else{
                loadParams.data = {
                    "status": 1
                };
            }
            new jrBase.tmod(loadParams);
        }else{
            $.isFunction(self.options.callBack) && self.options.callBack(userInfo);
        }
        $.isFunction(self.options.loginCallBack) && self.options.loginCallBack(userInfo);
    }
};

export default getUserInfo;
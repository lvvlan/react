var loopScroll = function (options){
    var self = this;

    self.options = $.extend({
        parent: $("[data-type=loopScroll]"),
        showLoopNum: 0,
        iSpeed: 1,
        dir: "top",
        method: "loop",
        autoStop: true
    }, options);

    self.init();
};

loopScroll.prototype = {
    constructor: loopScroll,
    //初始化
    init: function (){
        var self = this;

        self.flag = null;
        self.parent = self.options.parent;
        self.looper =self.parent.children();
        self.constant = 0;

        if(self.options.method == "loop"){
            self.looper.html(self.looper.html()+self.looper.html());
            self.looper.height(self.looper.children().eq(0).outerHeight(true) * self.looper.children().length);
        }
        !!self.options.showLoopNum && self.parent.height(self.looper.children().eq(0).outerHeight(true) * self.options.showLoopNum);

        self.bindEvent();
    },
    //移入停止，移出继续
    bindEvent: function (){
        var self = this;

        if(self.options.autoStop){
            self.parent.on({
                mouseenter: function (){
                    self.clear();
                },
                mouseleave: function (){
                    self.animation();
                }
            });
        }

        return self;
    },
    //运动 (外部调用方法)
    animation: function (){
        var self = this;

        self.clear();
        if(self.options.method == "loop"){
            self.flag = setInterval(function (){
                self.loop();
            }, 30);
        }
        else{
            self.flag = setTimeout(function (){
                self.pause();
            }, 1000 * self.options.iSpeed);
        }

    },
    //单次运动(loop方式)
    loop: function (){
        var self = this,
            iNow = 0;

        switch (self.options.dir){
            case "top":
                self.constant = self.looper.height() / 2;
                loopScroll.prototype.loop =  function (){
                    iNow -= self.options.iSpeed;
                    iNow %= self.constant;
                    self.looper.css("top", iNow);
                    //self.looper.css("transform", "translateY("+iNow+"px)");
                };
                self.loop();
                break;
            case "bottom":
                self.constant = self.looper.height() / 2;
                loopScroll.prototype.loop =  function (){
                    iNow += self.options.iSpeed;
                    iNow = (iNow % self.constant - self.constant) % self.constant;
                    self.looper.css("top", iNow);
                };
                self.loop();
                break;
        }
    },
    //单次运动(pause方式)
    pause: function (){
        var self = this,
            iHeight = self.looper.eq(0).height(),
            firstObj = self.parent.children().eq(0);

        firstObj.stop().animate({marginTop: -iHeight}, 2000, function (){
            firstObj.appendTo(self.parent);
            firstObj.css("marginTop", 0);
            self.animation();
        });

    },
    //清除定时器
    clear: function (){
        var self = this;

        clearInterval(self.flag);
    }
};

export default loopScroll;
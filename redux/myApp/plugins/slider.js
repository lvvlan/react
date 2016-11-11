import debounce from './debounce';

function slider(options) {
    var self = this;
    self.options = $.extend({
        parent: null,
        type: "fade",       //运动形式：fade-淡入淡出 switchLR-左右切换 switchTB-上下切换 (默认fade)
        autoTime: 3500,
        duration: 800,  //运动时间
        activeClass: "",
        autoPlay: true,
        callback: null, //回调函数 触发bar后执行
        triggerType: "click",   //切换事件类型 （click，hover）
        now: 0,      //now为首次展示第几屏（项目需求）
        ctrl: false     //移入显示左右控制按钮
    }, options);

    self.init().bindEvent().loadImg();
}

slider.prototype = {
    init: function (){
        var self = this,
            barParent = $("[data-type=bar]", self.options.parent),
            barWidth = 0;
        if(self.options.type == "fade" || self.options.type == "switchLR" || self.options.type == "switchTB"){
            self.lock = false;
            self.parent = self.options.parent;
            self.index = (self.options.now &&  self.options.now >=0) ? self.options.now : 0;
            self.children = $("[data-type=content]", self.parent).children();
            self.bar = barParent.children();
            self.flag = 1;  //timer
            self.auto = self.options.autoPlay;
            self.len = self.children.length;

            for(var j = 0; j < self.bar.length; j++){
                barWidth += self.bar.eq(j).outerWidth(true);
            }
            barParent.width(barWidth);

            self.switchMap = {    //切换的信息
                page : 0,
                d : 0,
                l : -self.children.eq(0).width(),
                r : self.children.eq(0).width(),
                t : -self.children.eq(0).height(),
                b : self.children.eq(0).height()
            };

            //设置每个li的zindex  显示排序
            for(var i = 0; i < self.children.length; i++){
                self.children.eq(i).css("zIndex", i);
            }

            if(self.options.type == "switchLR"){
                self.children.css({
                    left: self.switchMap.l
                });
            }else if(self.options.type == "switchTB"){
                self.children.css({
                    top: self.switchMap.t
                });
            }
        }
        return self;
    },

    bindEvent: function (){
        var self = this,
            bar= self.bar,
            banner = $("#banner"),
            method = self.options.type;

        if(self.options.ctrl){
            var left = $("[data-type=left]", self.options.parent),
                right = $("[data-type=right]", self.options.parent);

            function tab(){
                if(self.index > 0){
                    self.index = self.index % self.children.length
                }
                else{
                    self.index = (self.index % self.children.length + self.children.length) % self.children.length;
                }

                if(self.children.eq(self.index).attr("data-loadSrc")){
                    self.children.eq(self.index).css({
                        "background-image": "url(" + self.children.eq(self.index).attr("data-loadSrc") + ")"
                    });
                    self.children.eq(self.index).removeAttr("data-loadSrc");
                }
            }

            self.parent.on("mouseenter.ctrl", function (){
                left.fadeIn(500);
                right.fadeIn(500);
            });
            self.parent.on("mouseleave.ctrl", function (){
                left.fadeOut(500);
                right.fadeOut(500);
            });

            left.on("click.ctrl", function (){
                if(self.lock) return false;
                if(self.auto)self.clear();

                self.index--;

                tab();
                self[method]();
            });
            right.on("click.ctrl", function (){
                if(self.lock) return false;
                if(self.auto)self.clear();

                self.index++;

                tab();
                self[method]();
            });
        }

        self[self.options.triggerType]();

        if(self.auto){
            self.parent.on("mouseenter", function (){
                self.auto = false;
                self.clear();
            });
            self.parent.on("mouseleave", function (){
                self.auto = true;
                self.autoPlay();
            });
        }

        return self;
    },
    //切换事件类型(click)
    click: function (){
        var self = this,
            bar= self.bar,
            index = -1,
            banner = $("#banner"),
            method = self.options.type;

        bar.on("click", function (event){
            event.stopPropagation();
            event.preventDefault();

            index = $(this).index();
            //console.log("index: "+index+"^^^self.index: "+self.index+"^^^self.lock: "+self.lock);
            if(index == self.index || self.lock) return false;
            if(self.auto)self.clear();
            if(self.children.eq($(this).index()).attr("data-loadSrc")){
                self.children.eq($(this).index()).css({
                    "background-image": "url(" + self.children.eq($(this).index()).attr("data-loadSrc") + ")"
                });
                self.children.eq($(this).index()).removeAttr("data-loadSrc");
            }
            self.index = index;
            self[method](index);
        });
    },
    //切换事件类型(hover)
    hover: function (){
        var self = this,
            bar= self.bar,
            index = -1,
            banner = $("#banner"),
            method = self.options.type;

        var hoverFn = debounce(function (){
            var args = arguments,
                $this = args[0];
            index = $this.index();
            //console.log("index: "+index+"^^^self.index: "+self.index+"^^^self.lock: "+self.lock);
            if(index == self.index || self.lock) return false;
            if(self.auto)self.clear();
            if(self.children.eq($this.index()).attr("data-loadSrc")){
                self.children.eq($this.index()).css({
                    "background-image": "url(" + self.children.eq($this.index()).attr("data-loadSrc") + ")"
                });
                self.children.eq($this.index()).removeAttr("data-loadSrc");
            }
            self.index = index;
            self[method](index);
        }, 300, false);

        bar.on("mouseenter", function (event) {
            //event.stopPropagation();
            //event.preventDefault();

            hoverFn($(this));
        });
    },
    //预加载（在这里调用动画）
    loadImg: function (){
        var self = this,
            method = self.options.type,
            children = self.children,
            index = self.index,
            img = new Image;

        /*如果li上有loadSrc属性 证明还未加载过*/
        if(children.eq(index).attr("data-loadSrc")){
            img.onload = function (){
                children.eq(index).css({
                    "background-image": "url(" + children.eq(index).attr("data-loadSrc") + ")"
                });
                children.eq(index).removeAttr("data-loadSrc");
                self[method]();
            };
            img.src = children.eq(index).attr("data-loadSrc");
        }else{
            self[method]();
        }
    },
    //清除动画
    clear: function (){
        var self = this;
        clearTimeout(self.flag);
        return self;
    },
    /*
    * 每次运动进入后 加锁
    * 运动完成之后，解除锁，并检测是否自动运动
    * */
    //运动形式：fade
    fade: function (){
        var self = this,
            activeClass = self.options.activeClass,
            index = self.index,
            children = self.children,
            bar = self.bar;
        self.lock = true;
        //self.f = new Date().getTime();
        bar.eq(index)
            .addClass(activeClass)
            .siblings()
            .removeClass(activeClass);
        children.eq(index)
            .fadeIn(self.options.duration, function (){
                self.lock = false;
                if(self.auto)self.autoPlay();
            })
            .siblings()
            .fadeOut(self.options.duration);

        $.isFunction(self.options.callback) && self.options.callback(self);
    },
    //运动形式： switchLR
    switchLR: function (n){
        var self = this,
            activeClass = self.options.activeClass,
            index = self.index,
            children = self.children,
            bar = self.bar,
            map = self.switchMap;
        self.lock = true;
        //self.s = new Date().getTime();

        bar.eq(index)
            .addClass(activeClass)
            .siblings()
            .removeClass(activeClass);

        if(n<self.switchMap.page){
            children.eq(index).css("left", map.r);
        }

        children
            .css("zIndex", 2)
            .eq(index)
            .css("zIndex", 3)
            .show()
            .animate({left: map.d}, self.options.duration, "easeInOutQuint", function (){
                self.lock = false;
                self.switchMap.page = index;
                children
                    .not(":eq(" + index +")")
                    .hide()
                    .css({left: map.l});
                if(self.auto)self.autoPlay();
            });
    },
    //运动形式： switchTB
    switchTB: function (n){
        var self = this,
            activeClass = self.options.activeClass,
            index = self.index,
            children = self.children,
            bar = self.bar,
            map = self.switchMap;
        self.lock = true;
        //self.s = new Date().getTime();

        if(self.options.now >= 0) self.bar.eq(self.options.now).text("今天");//项目需求

        bar.eq(index)
            .addClass(activeClass)
            .siblings()
            .removeClass(activeClass);

        if(n<self.switchMap.page){
            children.eq(index).css("top", map.b);
        }

        children
            .css("zIndex", 2)
            .eq(index)
            .css("zIndex", 3)
            .show()
            .animate({top: map.d}, self.options.duration, "easeInOutQuint", function (){
                self.switchMap.page = index;
                children
                    .not(":eq(" + index +")")
                    .hide()
                    .css({top: map.t});
                self.lock = false;
                if(self.auto)self.autoPlay();
            });

        $.isFunction(self.options.callback) && self.options.callback(self);
    },
    //自动运行
    autoPlay: function (){
        var self = this;

        clearTimeout(self.flag);
        self.flag = window.setTimeout(function (){
            //console.log("f:" + (new Date().getTime() - self.f) + "^^^^" + "s:" + (new Date().getTime() - self.s));
            self.index++;
            self.index %=  self.bar.length;
            self.loadImg();
        }, self.options.autoTime);
    }
};

export default slider;
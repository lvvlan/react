/**
 * Des
 * Created by luowei5 on 2016/10/27.
 * E-mail luowei5@jd.com
 * Update 2016/10/27
 */
const Banner = React.createClass({
    render() {
        return (
            <div class="banner" id="banner" data-index="1">
                <!--背景图-->
                <a href="//sale.jd.com/act/VHGlX8aoEhL.html" target="_blank" class="background" clstag="jr|keycount|newbthome|dabeijingtu">
                    <div class="mask1"></div>
                    <div class="mask2"></div>
                </a>
                <!--内容区-->
                <div class="content">
                    <!--左侧用户信息-->
                    <div class="userBox">
                        <!--背景视频-->
                        <div class="videoBg">
                            <div class="videoMask">
                                <div class="mask"></div>
                                <div class="nqblb"></div>
                                <div class="logo"></div>
                            </div>
                            <video autoplay loop></video>
                        </div>
                        <!--前景信息-->
                        <div class="userInfo" node-type="payments">
                            <a class="playBtn" href="javascript:void (0);" clstag="jr|keycount|newbthome|buliubaimv">
                                <i class="icon"></i>
                            </a>
                        </div>
                    </div>
                    <!--右侧详情-->
                    <div class="rightBox">
                        <!--tips-->
                        <div class="tips">
                            <a href="//baitiao.jd.com/coupon/init" target="_blank" class="yh" clstag="jr|keycount|newbthome|tuijianquanmore">
                                <span class="mask"></span><i></i><em>优惠</em>
                            </a>
                            <a href="//baitiao.jd.com/ious/btHelp" target="_blank" class="help" clstag="jr|keycount|newbthome|help">
                                <span class="mask"></span><i></i><em>帮助</em>
                            </a>
                            <a href="javascript:void (0);" class="app" clstag="jr|keycount|newbthome|yidongapp">
                                <span class="mask"></span><i></i><em>APP</em>
                            </a>
                        </div>
                        <!--焦点图-->
                        
                        <!--白条头条 & 白占便宜-->
                        <div class="summary" node-type="summary">
                            <div class="headlinesBg"></div>
                            <div class="cheapBg"></div>
                        </div>
                    </div>
                </div>
                <!--底部数据-->
                <div class="infoWrap" node-type="infoWrap">
                    <!--业务线-->
                    <div class="busiBox" node-type="busiBox"></div>
                </div>
            </div>
        );
    }
});
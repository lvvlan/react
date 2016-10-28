/**
 * Des
 * Created by luowei5 on 2016/10/27.
 * E-mail luowei5@jd.com
 * Update 2016/10/27
 */
const Carousel = React.createClass({
    render(){
        return (
            <div class="carousel" node-type="carousel">
                <a class="left" href="javascript:void (0);" node-type="left"></a>
                <a class="right" href="javascript:void (0);" node-type="right"></a>
                <ul class="clearfix" node-type="content">
                    {
                        this.props.data.map(
                            (res, i) =>
                            <li key={i} loadSrc={res.imgSrc}>
                                <a href={res.href} target="_blank" clstag="jr|keycount|newbthome|banner{i+1}"></a>
                            </li>
                        )
                    }
                });
                </ul>
            </div>
        );
    }
});

export default Carousel;
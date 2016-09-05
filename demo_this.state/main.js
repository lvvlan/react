/**
 * Des
 * Created by luowei5 on 2016/9/1.
 * E-mail luowei5@jd.com
 * Update 2016/9/1
 */
let LikeButton = React.createClass({
    getInitialState: function () {
        return {liked: false};
    },
    handleClick: function () {
        this.setState({liked: !this.state.liked});
    },
    /*handleClick: () => {
        console.log(this);
        this.setState({liked: !this.state.liked});
    },*/
    render: function () {
        let txt = this.state.liked ? 'liked' : 'have\'t liked';

        return (
            <p onClick={this.handleClick}>
                You {txt} this. Click to toggle.
            </p>
        );
    }
});

RD.render(
    <LikeButton />,
    document.querySelector('#reactBox')
);
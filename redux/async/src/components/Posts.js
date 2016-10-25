/**
 * Des
 * Created by luowei5 on 2016/10/24.
 * E-mail luowei5@jd.com
 * Update 2016/10/24
 */

const Posts = React.createClass({
    PropTypes: {
        posts: React.PropTypes.array.isRequired
    },
    render() {
        return (
            <ul>
                {this.props.posts.map(
                    (post, i) =>
                    <li key={i}>
                        {post.title}
                    </li>
                )}
            </ul>
        );
    }
});

export default Posts;
/**
 * Des
 * Created by luowei5 on 2016/9/2.
 * E-mail luowei5@jd.com
 * Update 2016/9/2
 */
let UserGist = React.createClass({
    getInitialState: function (){
        return {
            username: '',
            lastGistUrl: ''
        };
    },
    componentDidMount: function () {
        $.get(this.props.source, function (result) {
            let lastGist = result[0];
            console.log(result);
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            });
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                {this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>
            </div>
        );
    }
});

RD.render(
    <UserGist source="https://api.github.com/users/octocat/gists" />,
    document.getElementById('reactBox')
);
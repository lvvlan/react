/**
 * Des
 * Created by luowei5 on 2016/9/2.
 * E-mail luowei5@jd.com
 * Update 2016/9/2
 */

let RepoList = React.createClass({
    getInitialState: function () {
        return {
            loading: true,
            error: null,
            data: null
        };
    },
    componentDidMount: function () {
        this.props.promise.then(
            value => this.setState({loading: false, data: value}),
            error => this.setState({loading: false, error: error})
        );
    },
    render: function () {
        if(this.state.loading){
            return <span>Loading...</span>
        }
        else if (this.state.error !== null){
            return <span>Error: {this.state.error.message}</span>;
        }
        else {
            let repos = this.state.data.items,
                repoList = repos.map(function (repo, index) {
                    return (
                        <li key={index}>
                            <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
                        </li>
                    );
                });
                console.log(repoList);
            return (
                <main>
                    <h1>Most Popular Javascript in Github</h1>
                    <ol>{repoList}</ol>
                </main>
            );
        }
    }
});

RD.render(
    <RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />,
    document.querySelector('#reactBox')
);
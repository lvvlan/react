/**
 * Des
 * Created by luowei5 on 2016/9/1.
 * E-mail luowei5@jd.com
 * Update 2016/9/1
 */
let NodeList = React.createClass({
    render: function () {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child){
                        return <li>{child}</li>
                    })
                }
            </ol>
        );
    }
});

RD.render(
    <NodeList>
        <span>hello</span>
        <span>world</span>
    </NodeList>,
    document.querySelector('#reactBox')
);
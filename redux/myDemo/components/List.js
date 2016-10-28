/**
 * Des
 * Created by luowei5 on 2016/10/25.
 * E-mail luowei5@jd.com
 * Update 2016/10/25
 */
let List = React.createClass({
    render() {
        const {listData} = this.props;
        return (
            <ul style={{width: '420px', height: '300px', border: '1px solid #f00', listStyle: 'none', padding: 0, margin: 0}}>
                {listData.map(
                    (data, i) =>
                    <li style={{width: '200px', height: '300px', float: 'left', marginRight: '10px'}} key={i}>
                        <a style={{width: '200px', height: '100px'}} href={data.linkUrl}>{data.title}</a>
                        <p style={{width: '200px', height: '200px'}}>
                            <img style={{width: '200px', height: '200px'}} src={data.imgSrc}/>
                        </p>
                    </li>
                )}
            </ul>
        );
    }
});

export default List;
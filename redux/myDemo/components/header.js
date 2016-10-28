/**
 * Des
 * Created by luowei5 on 2016/10/25.
 * E-mail luowei5@jd.com
 * Update 2016/10/25
 */
let Header = React.createClass({
    render() {
        return (
            <div>
                <span style={{display: 'inline-block', width: '100px', height: '50px', marginRight: '10px', border: '1px solid #f00'}} onClick={() => this.props.onClick('START')}>start</span>
                <span style={{display: 'inline-block', width: '100px', height: '50px', marginRight: '10px', border: '1px solid #f0f'}} onClick={() => this.props.onClick('RUNNING')}>running</span>
                <span style={{display: 'inline-block', width: '100px', height: '50px', marginRight: '10px', border: '1px solid #0f0'}} onClick={() => this.props.onClick('ENDING')}>ending</span>
            </div>
        );
    }
});

export default Header;
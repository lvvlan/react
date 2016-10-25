/**
 * Des
 * Created by luowei5 on 2016/10/24.
 * E-mail luowei5@jd.com
 * Update 2016/10/24
 */
const Picker = React.createClass({
    propTypes: {
        options: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
        value: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired
    },
    render() {
        const {value, onChange, options} = this.props;

        return (
            <span>
                <h1>{value}</h1>
                <select onChange={e => onChange(e.target.value)} value={value}>
                    {options.map(option =>
                        <option value={option} key={option}>
                            {option}
                        </option>
                    )}
                </select>
            </span>
        );
    }
});

export default Picker;

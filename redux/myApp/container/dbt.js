import Left from '../components/dbt/left';
import Middle from '../components/dbt/middle';
import Right from '../components/dbt/right';
import Yhj from '../components/dbt/yhj';

const Dbt = React.createClass({
    render(){
        return (
            <div className="item_content clearfix">
                <div className="sideTitle">
                    <h3>打白条</h3>
                    <span className="privileged"><em>想要占便宜</em><em className="last">快来打我呀</em></span>
                    <div className="yhj" data-type="dbt-yhj">
                        <Yhj />
                    </div>
                </div>
                <div className="commodities">
                    <div className="left clearfix" data-type="leftProduct">
                        <Left />
                    </div>
                    <div className="between clearfix" data-type="dbtBetween">
                        <Middle />
                    </div>
                    <div className="right clearfix" data-type="rightList">
                        <Right />
                    </div>
                </div>
            </div>
        );
    }
});

export default Dbt;
/**
 * Des
 * Created by luowei5 on 2016/8/31.
 * E-mail luowei5@jd.com
 * Update 2016/8/31
 */
import React, {Component} from 'react';
import Immutable from 'immutable';

//子组件
class Person extends Component{
    componentWillReceiveProps(newProps) {
        // console.log(`我新的props的name是${newProps.name}, age是${newProps.age}。\n我旧的props的name是${this.props.name}, age是${this.props.age}。`);
        console.log('子组件componentWillReceiveProps方法!');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps);
        console.log(this.props);

        this.state = this.state || {};
        nextState = nextState || {};
        this.props = this.props || {};
        nextProps = nextProps || {};

        if(Object.keys(nextProps).length !== Object.keys(this.props).length ||
           Object.keys(nextState).length !== Object.keys(this.state).length) return true;

        let immutableThisProps = Immutable.fromJS(this.props),
            immutableNextProps = Immutable.fromJS(nextProps),
            immutableThisState = Immutable.fromJS(this.state),
            immutableNextState = Immutable.fromJS(nextState);

        console.log(Immutable.is(immutableThisProps, immutableNextProps), Immutable.is(immutableThisState, immutableNextState));

        if(!Immutable.is(immutableThisProps, immutableNextProps) ||
           !Immutable.is(immutableThisState, immutableNextState)) return true;

        console.log('子组件shouldComponentUpdate方法!');
        return false;
    }
    render() {
        const {name, age} = this.props;
        console.log('我执行了子组件render方法!');
        return (
            <div>
                <span>姓名是：</span><span>{name}</span> &nbsp;
                <span>年龄是：</span><span>{age}</span>
            </div>
        );
    }
}

//父组件
class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {
            immutable: Immutable.fromJS({
                name: '',
                age: '',
                persons: []
            })
        };
    }
    handleChange(e) {
        let immutable = this.state.immutable;

        this.setState({
            immutable: immutable.setIn([e.target.name], e.target.value)
        });
    }
    handleClick(e) {
        let immutable = this.state.immutable;
        const {name, age} = {name: immutable.get('name'), age: immutable.get('age')};
        this.setState({
            immutable: immutable
                .set('name', '',)
                .set('age', '')
                .set('persons', immutable.get('persons').push({name: name, age: age}))
        });
    }
    render (){
        let immutable = this.state.immutable;
        const {name, age, persons} = {name: immutable.get('name'), age: immutable.get('age'), persons: immutable.get('persons').toJS()};

        return (
            <div>
                <span>姓名：</span><input type="text" value={name} name="name" onChange={this.handleChange.bind(this)}/>
                <span>年龄：</span><input type="text" value={age} name="age" onChange={this.handleChange.bind(this)}/>
                <input type="button" onClick={this.handleClick.bind(this)} value="确认"/>
                {
                    persons.map((person, index) => (
                        <Person key={index} name={person.name} age={person.age} />
                    ))
                }
            </div>
        );
    }
}

RD.render(
    <Parent />,
    document.getElementById('app')
);
/**
 * Des
 * Created by luowei5 on 2016/8/31.
 * E-mail luowei5@jd.com
 * Update 2016/8/31
 */
import React, {Component} from 'react';

/*
* 本例的痛点在于：
* 父组件每次触发onChange 都会setState新值 也就意味着父组件本身会重新渲染
* 那么他下面的子组件也会跟着重新渲染 及时子组件的props、state并没有发生变化！
* */

//子组件
class Person extends Component{
    componentWillReceiveProps(newProps) {
        console.log(`我新的props的name是${newProps.name}, age是${newProps.age}。\n我旧的props的name是${this.props.name}, age是${this.props.age}。\n我要re-render了!`);
    }
    render() {
        const {name, age} = this.props;

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
            name: '',
            age: '',
            persons: []
        }
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick(e) {
        const {name, age} = this.state;

        this.setState({
            name: '',
            age: '',
            persons: this.state.persons.concat([{name: name, age: age}])
        });
    }
    render (){
        const {name, age, persons} = this.state;

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
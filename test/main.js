/**
 * Des
 * Created by luowei5 on 2016/8/31.
 * E-mail luowei5@jd.com
 * Update 2016/8/31
 */
import React, {Component} from 'react';
import _ from 'lodash';
import im from 'immutable';

$('h1').html('测试通过~');

let foo = x => x;

$(`<h2>${foo('es6测试通过~')}</h2>`).appendTo(document.body);

RD.render(
    <p>react测试通过~</p>,
    document.querySelector('#reactBox')
);

class Immutable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { times: 0 },
            immutableData: im.Map({num: 0})
        };
    }

    handleAdd() {
        let data = _.cloneDeep(this.state.data);
        data.times = data.times + 1;
        this.setState({ data: data });
        // 如果上面不做 cloneDeep，下面打印的结果会是已经加 1 后的值。
        console.log('data.times: '+data.times); //这里的data.times是深度clone后+1的结果 并没有更改原始值
        console.log('this.state.data.times: '+this.state.data.times);   //这里仍然是原始的值
    }
    
    handleAddImmutable() {
        this.setState({
            immutableData: this.state.immutableData.update('num', v => v + 1)
        });

        console.log(this.state.immutableData.get('num'));
    }
    
    render() {
        return (
            <div>
                <p>{this.state.data.times}</p>
                <button onClick={this.handleAdd.bind(this)}>change</button>
                <p>immutableNum => {this.state.immutableData.get('num')}</p>
                <button onClick={this.handleAddImmutable.bind(this)}>change immutable</button>
            </div>
        );
    }
}

RD.render(
    <Immutable />,
    document.querySelector('#testImmutable')
);
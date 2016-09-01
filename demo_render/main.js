/**
 * Des
 * Created by luowei5 on 2016/9/1.
 * E-mail luowei5@jd.com
 * Update 2016/9/1
 */
RD.render(
    <h1>Hello World!</h1>,
    document.getElementById('reactBox')
);

let names = ['Alice', 'Emily', 'Kate'];

RD.render(
    <ul>
        {
            names.map(function (name){
                return <li>Hello, {name}!</li>
            })
        }
    </ul>,
    document.getElementById('listName')
);

let arr = [
    <h1>React1</h1>,
    <h2>React2</h2>
];

RD.render(
    <div>
        {arr}
    </div>,
    document.getElementById('arrBox')
);
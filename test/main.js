/**
 * Des
 * Created by luowei5 on 2016/8/31.
 * E-mail luowei5@jd.com
 * Update 2016/8/31
 */
$('h1').html('测试通过~');

let foo = x => x;

$(`<h2>${foo('es6测试通过~')}</h2>`).appendTo(document.body);

RD.render(
    <p>react测试通过~</p>,
    document.querySelector('#reactBox')
);
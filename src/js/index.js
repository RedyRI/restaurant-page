import { header, btns, h1 } from './header';
import { initialPage, heroBtn } from './initial';
import { menu } from './menu';
import { contact } from './contact';
import { footer } from './footer';  

import '../less/index.less';
import '../less/base.less';
import '../less/menu.less';
import '../less/contact.less';

let content = document.querySelector('.content');
btns.forEach(btn => {
    btn.addEventListener('click', showContent)
})
h1.addEventListener('click', showContent)
heroBtn.addEventListener('click', showContent)
let actualContent = document.createElement('div');
actualContent.appendChild(initialPage)
let elems = [header, actualContent, footer]

render(elems)

function showContent(e) {

    let targ = e.target.textContent;
    console.log(targ);
    let cont = targ == 'Main page' || targ == 'Restaurant' ? initialPage:
               targ == 'Menu' ? menu: contact;

    if(cont !== actualContent.firstElementChild) {

        clean(actualContent);
        actualContent.appendChild(cont);

        let controller = e.target.textContent;;
        console.log(controller);
        if(controller == 'Main page' || controller == 'Restaurant') {
            btns[0].style.backgroundColor = 'crimson';
            btns[1].style.backgroundColor = 'transparent';
            btns[2].style.backgroundColor = 'transparent';
        } else if(controller == 'Menu') {
            btns[0].style.backgroundColor = 'transparent';
            btns[1].style.backgroundColor = 'crimson';
            btns[2].style.backgroundColor = 'transparent';
        } else {
            btns[0].style.backgroundColor = 'transparent';
            btns[1].style.backgroundColor = 'transparent';
            btns[2].style.backgroundColor = 'crimson';
        }
    }
}

function clean(targ) {
    targ.removeChild(targ.firstElementChild)
}

function render(l) {
    l.forEach(item => {
        content.appendChild(item);
    })
}
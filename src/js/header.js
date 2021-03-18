// hero section
const header = document.createElement('div');
header.classList.add('header');
const logo = document.createElement('div');
logo.classList.add('header__logo')
const h1 = document.createElement('h1');
h1.textContent = 'Restaurant';
logo.appendChild(h1);
const nav = document.createElement('div');
nav.classList.add('header__nav')

const links = ['Main page', 'Menu', 'Contact'];
const btns = []
for (let i = 0; i < 3; i++) {
    let btn = document.createElement('button');
    btn.textContent = links[i];
    nav.appendChild(btn);
    btns.push(btn)
}

header.appendChild(logo);
header.appendChild(nav);

export {
    header,
    btns,
    h1,
}
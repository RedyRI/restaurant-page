const footer = document.createElement('footer');
footer.classList.add('footer');
const info = document.createElement('div');
info.classList.add('footer__info');
info.textContent = 'all Rigths reserved - Made by Redy';
const github = document.createElement('div');
github.classList.add('footer__icon')
const link = document.createElement('a');
link.setAttribute('href', 'https://github.com/RedyRI/restaurant-page') 
link.setAttribute('target','_blank')
const img = document.createElement('div');
img.classList.add('img')
link.appendChild(img)
github.appendChild(link)
footer.appendChild(info);
footer.appendChild(github);
export {
    footer,
}
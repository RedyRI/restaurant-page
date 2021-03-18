// the whole initial page
const initialPage = document.createElement('div');
initialPage.classList.add('home');

// hero section
const hero = document.createElement('div');
hero.classList.add('hero');
const heroInfo = document.createElement('div');
heroInfo.classList.add('hero__info');
const heroH2 = document.createElement('h2');
heroH2.textContent = 'The best Burguer joint ever!';
const heroSub = document.createElement('p');
heroSub.textContent = "You won't find a place like this!";
const heroBtn = document.createElement('button');
heroBtn.textContent = 'Order now !';
heroInfo.appendChild(heroH2)
heroInfo.appendChild(heroSub)
heroInfo.appendChild(heroBtn)
hero.appendChild(heroInfo)
const heroWave = document.createElement('div');
heroWave.classList.add('hero__wave');
heroWave.innerHTML = '<svg viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#6cdbed" fill-opacity="1" d="M0,320L48,272C96,224,192,128,288,117.3C384,107,480,181,576,186.7C672,192,768,128,864,133.3C960,139,1056,213,1152,218.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>';
hero.appendChild(heroWave);

// presentation
const presentation = document.createElement('section');
presentation.classList.add('presentation');
const description = document.createElement('div');
const h2 = document.createElement('h2');
h2.textContent = 'Our History.'
description.classList.add('presentation__description');
const p = document.createElement('p');
p.textContent = 'this is the best restaurant in town, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque eaque voluptate iure rem cupiditate veniam quas laudantium libero distinctio ratione dolorum quaerat eligendi harum rerum quam, illum, laborum quisquam?';
description.appendChild(h2)
description.appendChild(p)
presentation.appendChild(description);
const imgCont = document.createElement('div');
imgCont.classList.add('presentation__image-cont');
const img =  document.createElement('div');
img.classList.add('img');
imgCont.appendChild(img);
presentation.appendChild(imgCont);
const wave1 = document.createElement('svg');
wave1.classList.add('presentation__wave1');
const wave2 = document.createElement('svg');
wave2.classList.add('presentation__wave2');
wave1.innerHTML = '<svg viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="rgba(220, 20, 60, 0.5)" fill-opacity="1" d="M0,320L48,272C96,224,192,128,288,117.3C384,107,480,181,576,186.7C672,192,768,128,864,133.3C960,139,1056,213,1152,218.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>';
wave2.innerHTML = '<svg viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="rgba(220, 20, 60, 0.4)" fill-opacity="1" d="M0,320L48,272C96,224,192,128,288,117.3C384,107,480,181,576,186.7C672,192,768,128,864,133.3C960,139,1056,213,1152,218.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>';
presentation.appendChild(wave1)
presentation.appendChild(wave2)

initialPage.appendChild(hero)
initialPage.appendChild(presentation)

export {
    initialPage,
    heroBtn,
}
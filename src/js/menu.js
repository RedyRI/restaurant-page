const menu = document.createElement('div');
menu.classList.add('menu');

// create the menu

const menuTitle = document.createElement('div');
menuTitle.classList.add('menu__title');
const h2 = document.createElement('h2');
h2.textContent = "MENU"
menuTitle.appendChild(h2);
const menuOption = document.createElement('div');
menuOption.classList.add('menu__options');
const left = document.createElement('div');
left.classList.add('left');

function template(dish, cost, inf) {
    let card = document.createElement('div');
    card.classList.add('card');

    let description = document.createElement('div');
    description.classList.add('card__description')
    let name = document.createElement('h2');
    name.textContent = dish;
    let info = document.createElement('p');
    info.textContent = inf;
    description.appendChild(name)
    description.appendChild(info)

    let price = document.createElement('div');
    price.classList.add('card__price')
    price.textContent = `S/.${cost}`;

    card.appendChild(description);
    card.appendChild(price);

    return card;
}

let available = {
    ceviche: {
        dish: 'ceviche',
        cost: 25.00,
        info: 'Delicious Peruvian Ceviche with the freshiest fish'
    },
    saltado: {
        dish: 'saltado',
        cost: 30.00,
        info: 'stir fried rice salted white fresh vegetables from the Andes of Cusco '
    },
    papaRellena: {
        dish: 'papa rellena',
        cost: 15.00,
        info: 'stir fried rice salted white fresh vegetables from the Andes of Cusco '
    }
}

for (let key in available) {
    let dish = template(available[key].dish, available[key].cost, available[key].info);
    left.appendChild(dish);
}

menuOption.appendChild(left);

menu.appendChild(menuTitle);
menu.appendChild(menuOption);

export {
    menu,
}
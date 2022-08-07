import Food from './img/food.png';
import { getFoodItems } from './food';

function getHome () {
    const home = document.createElement('div');
    home.classList += 'home';
    const image = document.createElement('img');
    const fig = document.createElement('figure');
    image.alt = "Ai-generated Pasta Dish";
    image.src = Food;
    fig.classList += "image is-128x128";
    const text = document.createElement('div');
    text.textContent = "The food we serve is definitely real";
    fig.appendChild(image);
    home.append(fig, text);
    return home;
}

function getMenu () {
    const menu = document.createElement('div');
    menu.classList += 'menu';

    const foodItems = getFoodItems();

    foodItems.forEach( ({img, alt, desc}) => {
        const hold = document.createElement('div');
        hold.classList += "food-item";
        const image = document.createElement('img');
        const fig = document.createElement('figure');
        image.src = img;
        image.alt = alt;
        fig.classList += "image is-128x128";
        const text = document.createElement('p');
        text.textContent = desc;
        fig.appendChild(image);
        hold.append(fig, text);
        menu.appendChild(hold);
    })
    return menu;
}

function getContact () {
    // don't feel like adding a form right now
    const contact = document.createElement('div');
    contact.classList += 'contact';
    const text = document.createElement('p');
    text.textContent = "Contact us at 123-456-7890";
    contact.appendChild(text);
    return contact;
}

export {getHome, getMenu, getContact};
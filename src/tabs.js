import Food from './img/food.png';
import { getFoodItems } from './food';

function getHome () {
    const home = document.createElement('div');
    home.classList += 'home';
    const image = document.createElement('img');
    image.alt = "Ai-generated Pasta Dish";
    image.src = Food;
    const text = document.createElement('div');
    text.textContent = "The food we serve is definitely real";
    home.append(image, text);
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
        image.src = img;
        image.alt = alt;
        const text = document.createElement('p');
        text.textContent = desc;
        hold.append(image, text);
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
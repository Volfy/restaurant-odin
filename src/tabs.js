import Food from './food.png';

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
    const home = document.createElement('div');
    home.classList += 'menu';
    const image = document.createElement('img');
    image.alt = "Ai-generated Pasta Dish";
    image.src = Food;
    const text = document.createElement('div');
    text.textContent = "This is actually the menu, lol";
    home.append(image, text);
    return home;
}

function getContact () {
    const home = document.createElement('div');
    home.classList += 'menu';
    const image = document.createElement('img');
    image.alt = "Ai-generated Pasta Dish";
    image.src = Food;
    const text = document.createElement('div');
    text.textContent = "This is actually the contact page, lol";
    home.append(image, text);
    return home;
}

export {getHome, getMenu, getContact};
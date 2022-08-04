const content = document.querySelector("#content");
import Food from './food.png';

function makeHeader () {
    const header = document.createElement('header');
    const heading = document.createElement('h1');
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    heading.classList += 'res-name';
    home.classList += 'home-btn';
    menu.classList += 'menu-btn';
    contact.classList += 'contact-btn';

    heading.textContent = "Restaurant Name";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    nav.append(home, menu, contact);
    header.append(heading, nav);
    content.appendChild(header);
}

function makeMain () {
    // check where we are
    const main = document.createElement('main');




    const home = document.createElement('div');
    home.classList += 'home';
    const image = document.createElement('img');
    image.alt = "Ai-generated Pasta Dish";
    image.src = Food;
    const text = document.createElement('div');
    text.textContent = "The food we serve is definitely real";
    home.append(image, text);
    main.appendChild(home);
    content.appendChild(main);
}

function makeFooter () {
    const footer = document.createElement('footer');
    const para = document.createElement('p');

    para.textContent = "Made by Me More than All Rights Reserved";
    footer.appendChild(para);
    content.appendChild(footer);
}

function initSite () {
    makeHeader();
    makeMain();
    makeFooter();
}

export {initSite};
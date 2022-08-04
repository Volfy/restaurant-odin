const content = document.querySelector("#content");

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
    return [home, menu, contact];
}

function makeMain (page) {
    // check where we are
    const main = document.createElement('main');

    main.appendChild(page);
    content.appendChild(main);
}

function refreshMain (page) {
    const main = document.querySelector('main');
    main.innerHTML = "";
    main.appendChild(page);
}

function makeFooter () {
    const footer = document.createElement('footer');
    const para = document.createElement('p');

    para.textContent = "Made by Me More than All Rights Reserved";
    footer.appendChild(para);
    content.appendChild(footer);
}

function initSite (page) {
    //content.innerHTML = "";

    const navBtns = makeHeader();
    makeMain(page);
    makeFooter();

    return navBtns;
}

export {initSite, refreshMain};
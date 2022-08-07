const content = document.querySelector("#content");

function makeHeader () {
    const header = document.createElement('header');
    const heading = document.createElement('h1');
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    heading.classList += 'res-name title';
    home.classList += 'home-btn pagination-link button is-medium';
    menu.classList += 'menu-btn pagination-link button is-medium';
    contact.classList += 'contact-btn pagination-link button is-medium';

    heading.textContent = "AI Restaurant";
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    nav.classList += "pagination";

    nav.append(home, menu, contact);
    header.append(heading, nav);
    content.appendChild(header);
    return [home, menu, contact];
}

function makeMain (page) {
    // check where we are
    const main = document.createElement('main');
    main.classList += "container";

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
    footer.classList += "footer";
    
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
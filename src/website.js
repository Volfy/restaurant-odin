const content = document.querySelector("#content");

function makeHeader () {
    const header = document.createElement('header');
    const heading = document.createElement('h1.res-name');
    heading.textContent = "Restaurant Name";
    const nav = document.createElement('nav');
    const home = document.createElement('button.home');
    const menu = document.createElement('button.menu');
    const contact = document.createElement('button.contact');

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    header.appendChild(heading);
    header.appendChild(nav);

    content.appendChild(header);
}

export {makeHeader};
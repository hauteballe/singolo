function burgerClickHandler(ev) {
    let popup = document.getElementsByClassName('menu-popup')[0];
    popup.style.display = 'block';
}

function closeSideMenu(ev) {
    let popup = document.getElementsByClassName('menu-popup')[0];
    popup.style.display = 'none';
}

let burgerBtn = document.getElementsByClassName('burger-button')[0];
burgerBtn.addEventListener('click', burgerClickHandler)

let sideMenuCloseBtn = document.getElementsByClassName('side-burger')[0];
sideMenuCloseBtn.addEventListener('click', closeSideMenu)


var triggers = document.getElementsByClassName('trigger-tabs');
var tabs = document.getElementsByClassName('items-tabs');

window.onload = function () {

    for (let i = 0; i < triggers.length; i++) {
        triggers[i].addEventListener('click', changeTab);
    }
}

function changeTab(event) {
    event.preventDefault();
    let element = event.target;
    let tabfirst = element.getAttribute('href');
    let destiny = tabfirst.replace('#','');
    let tab = document.getElementById(destiny);

    for (let i = 0; i < triggers.length; i++) {
        triggers[i].classList.remove('color--blue');
        tabs[i].classList.remove('tabs-active');
    }
    element.classList.add('color--blue');
    tab.classList.add('tabs-active');
}
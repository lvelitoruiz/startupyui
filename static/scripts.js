var triggers = document.getElementsByClassName("trigger-tabs");
var addTriggers = document.getElementsByClassName("addTrigger");
var tabs = document.getElementsByClassName("items-tabs");

window.onload = function () {
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", changeTab);
  }

  for (let i = 0; i < addTriggers.length; i++) {
    addTriggers[i].addEventListener("click", removeElement, true);
  }
};

function changeTab(event) {
  event.preventDefault();
  let element = event.target;
  let tabfirst = element.getAttribute("href");
  let destiny = tabfirst.replace("#", "");
  let tab = document.getElementById(destiny);

  for (let i = 0; i < triggers.length; i++) {
    triggers[i].classList.remove("color--blue");
    triggers[i].classList.remove("font-bold");
    tabs[i].classList.remove("tabs-active");
  }
  element.classList.add("color--blue");
  element.classList.add("font-bold");
  tab.classList.add("tabs-active");
}

function removeElement() {
  event.stopPropagation();
  // Removes an element from the document
  console.log("element to get");
  let elementId = this.getAttribute("rel");
  let element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}

var triggers = document.getElementsByClassName("trigger-tabs");
var addTriggers = document.getElementsByClassName("addTrigger");
var tabs = document.getElementsByClassName("items-tabs");
var editBoxes = document.getElementsByClassName("box-info-edit"); 

var editTriggers = document.getElementsByClassName("launchEdit");
var closeTriggers = document.getElementsByClassName("closeBox");

window.onload = function () {
  for (let i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", changeTab);
  }

  for (let i = 0; i < addTriggers.length; i++) {
    addTriggers[i].addEventListener("click", removeElement, true);
  }

  for (let i = 0; i < editTriggers.length; i++) {
    editTriggers[i].addEventListener("click", launchEditInfo, true);
  }

  for (let i = 0; i < closeTriggers.length; i++) {
    closeTriggers[i].addEventListener("click", closeBox, true);
  }
};


function launchEditInfo(event) {
  let element = event.target;
  let elementParent = element.parentNode;
  let editInfo = elementParent.getElementsByClassName('box-info-edit');

  for (let i = 0; i < editBoxes.length; i++) {
    editBoxes[i].classList.add("hidden");
  }

  editInfo[0].classList.remove("hidden");
}

function closeBox(event) {
  event.preventDefault();

  let element = event.target;
  let parent = element.parentNode.parentNode;
  parent.classList.add("hidden");
  
}


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

function removeElement(event) {
  event.stopPropagation();
  // Removes an element from the document
  console.log("element to get");
  let elementId = this.getAttribute("rel");
  let element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}

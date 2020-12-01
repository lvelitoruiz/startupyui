var triggers = document.getElementsByClassName("trigger-tabs");
var addTriggers = document.getElementsByClassName("addTrigger");
var tabs = document.getElementsByClassName("items-tabs");
var editBoxes = document.getElementsByClassName("box-info-edit");

var editTriggers = document.getElementsByClassName("launchEdit");
var closeTriggers = document.getElementsByClassName("closeBox");

var searchBox = document.getElementsByClassName("search--content");
var eyeIcon = document.getElementById("icon-changer");
var menuIcon = document.getElementById("menuicon");

var first = document.getElementById("header-first");
var scroller = document.getElementById("header-scroll");
var second = document.getElementById("header-second");
var third = document.getElementById("header-third");

var inputAllow = true;

window.onload = function () {
  if (searchBox.length >= 1) {
    console.log("we have a box here");
    let inputHere = searchBox[0].getElementsByTagName("input");
    let pholder = inputHere[0].getAttribute("placeholder");
    let wide = pholder.length;
    inputHere[0].style.width = wide * 11 + "px";

    inputHere[0].addEventListener("input", function () {
      let inputcontent = inputHere[0].value;
      if (inputcontent.length >= 1) {
        let wider = inputcontent.length;
        inputHere[0].style.width = wider * 11 + "px";
      } else {
        inputHere[0].style.width = wide * 11 + "px";
      }
    });
  }

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

window.onscroll = function () {
  if (searchBox.length >= 1) {
    let y = window.scrollY;

    if (y >= 100) {
      eyeIcon.classList.remove("icon-eye-home");
      eyeIcon.classList.add("icon-iso");
      first.classList.add("hidden");
      scroller.classList.remove("hidden");
      menuIcon.addEventListener("click", showInput);
    } else {
      eyeIcon.classList.remove("icon-eye-close");
      eyeIcon.classList.remove("icon-iso");
      eyeIcon.classList.add("icon-eye-home");
      scroller.classList.add("hidden");
      second.classList.remove("hidden");
      third.classList.add("hidden");
      first.classList.remove("hidden");
      menuIcon.removeEventListener("click", showInput);
      inputAllow = true;
    }
  }
};

function showInput() {
  if (inputAllow == true) {
    second.classList.add("hidden");
    third.classList.remove("hidden");
    eyeIcon.classList.remove("icon-iso");
    eyeIcon.classList.add("icon-eye-close");
    inputAllow = false;
  } else {
    second.classList.remove("hidden");
    third.classList.add("hidden");
    eyeIcon.classList.add("icon-iso");
    eyeIcon.classList.remove("icon-eye-close");
    inputAllow = true;
  }
}

function launchEditInfo(event) {
  let element = event.target;
  let elementParent = element.parentNode;
  let editInfo = elementParent.getElementsByClassName("box-info-edit");

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

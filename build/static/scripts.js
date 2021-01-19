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

var extenders = document.getElementsByClassName("fade-out");

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

  if (extenders.length > 0) {
    for (let i = 0; i < extenders.length; i++) {
      let elmt = extenders[i].getElementsByTagName("div")[0];
      elmt.addEventListener("click", extendBox.bind(null, elmt), true);
    }
  }

  tippy("#myButton", {
    content: "<strong>Bolded content</strong>",
    allowHTML: true,
    interactive: true,
  });

  tippy("#myJosh", {
    content: `
    <div>
      <div class="flex justify-between">
        <div class="flex flex-col w-100">
          <div class="flex items-center">  
            <p class="font-bold mr-3 text-xs">Comrad Socks</p>
            <span class="text-xs bkg--blue2 px-2 py-1 mr-3">Mature</span>
          </div>
          <div class="flex items-center">
            <i class="icon-eye-black text-xs text-white pr-2"></i>
            <span class="text-xs">sari-azout</span>
          </div>
        </div>
        <i class="icon-eye-black text-xl text-white"></i>
      </div>
      <p class="text-xs text-white pt-2 pb-4 pr-3">This is a little bio for the hover bubble that is here.</p>
      <div class="flex items-center flex-wrap">
        <span class="text-xs pr-2">Design <b>Fuzzco</b></span>
        <span class="text-xs pr-2">Design <b>Fuzzco</b></span>
      </div>
    </div>`,
    allowHTML: true,
    interactive: true,
  });

  tippy("#myTag", {
    content: `
    <div>
      <div class="flex justify-between w-100"> 
        <p class="font-bold mr-3 text-xs text-cut">The Future of Venture Capitan Capitan</p>
        <i class="icon-eye-black text-xl text-white"></i>
      </div>
      <div class="flex items-center">
        <i class="icon-eye-black text-xs text-white pr-2"></i>
        <span class="text-xs">sari-azout</span>
      </div>
      <p class="text-xs text-white pt-2 pb-4 pr-3">02/21/20 Last Updated</p>
      <div class="flex items-center flex-wrap">
        <span class="text-xs pr-2"><b>284</b> Companies</span>
        <span class="text-xs pr-2"><b>284</b> Companies</span>
      </div>
    </div>`,
    allowHTML: true,
    interactive: true,
  });
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

function extendBox(elmt) {
  console.log(elmt);
  if (elmt.style.maxHeight == "3000px") {
    elmt.style.maxHeight = "";
  } else {
    elmt.style.maxHeight = "3000px";
  }
}

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

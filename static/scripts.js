var triggers = document.getElementsByClassName("trigger-tabs");
var addTriggers = document.getElementsByClassName("addTrigger");
var tabs = document.getElementsByClassName("items-tabs");
var editBoxes = document.getElementsByClassName("box-info-edit");

var editTriggers = document.getElementsByClassName("launchEdit");
var closeTriggers = document.getElementsByClassName("closeBox");

var menuResTrigger = document.getElementById("menuicon-responsive");

var searchBox = document.getElementsByClassName("search--content");
var eyeIcon = document.getElementById("icon-changer");
var menuIcon = document.getElementById("menuicon");

var first = document.getElementById("header-first");
var scroller = document.getElementById("header-scroll");
var second = document.getElementById("header-second");
var third = document.getElementById("header-third");
var overlayTriggerImage = document.getElementById("overlayTrigger");

var showInputScroll = true;

var inputAllow = true;

var extenders = document.getElementsByClassName("fade-out");

var cleaner = document.querySelector("#remove-text");
var cleaner2 = document.querySelector("#esc-sign");

var clasesToUse = "";

var convoTriggers = document.getElementsByClassName("showConvo");
var selectElements = document.getElementsByClassName("custom-radio-checkbox");

var dateInput1 = document.querySelector("#date1");
var dateInput2 = document.querySelector("#date2");

window.onload = function () {
  if (document.querySelector("#sliderRange")) {
    var mySlider = new rSlider({
      target: "#sliderRange",
      values: { min: 0, max: 100 },
      range: true, // range slider
      set: null, // an array of preselected values
      width: null,
      scale: false,
      labels: false,
      tooltip: true,
      step: 1, // step size
      disabled: false, // is disabled?
      onChange: null, // callback
    });
  }

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
        if (cleaner2 != null) {
          cleaner.style.display = "block";
          cleaner2.style.display = "block";
        }
        inputHere[0].style.width = wider * 11 + "px";
      } else {
        if (cleaner2 != null) {
          cleaner.style.display = "none";
          cleaner2.style.display = "none";
        }
        inputHere[0].style.width = wide * 11 + "px";
      }
    });
  }

  var picker1 = new Pikaday({
    field: document.getElementById("date1"),
    theme: "triangle-theme",
  });

  var picker2 = new Pikaday({
    field: document.getElementById("date2"),
    theme: "triangle-theme",
  });

  for (let i = 0; i < convoTriggers.length; i++) {
    convoTriggers[i].addEventListener("click", showConvoOpen);
  }

  if (menuIcon != null) {
    menuIcon.addEventListener("click", showInput);
  }

  if (eyeIcon != null) {
    eyeIcon.addEventListener("click", showMenuInput);
  }

  if (cleaner != null) {
    cleaner.addEventListener("click", cleanInput);
  }

  if (menuResTrigger != null) {
    menuResTrigger.addEventListener("click", openMenuRes);
  }

  if (overlayTriggerImage != null) {
    overlayTriggerImage.addEventListener("click", openOverlayMenu);
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

  for (let i = 0; i < selectElements.length; i++) {
    selectElements[i].addEventListener("click", getValueItem, true);
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

  if (document.querySelector("#menuSideElement")) {
    let element = document.querySelector("#menuSideElement");
    let element2 = document.querySelector("#sideMenuAlt");
    let links = element.getElementsByTagName("li");
    let links2 = element2.getElementsByTagName("li");
    let parent = document.querySelector("#land-container");
    let parent2 = document.querySelector("#ideals");
    let topheight = parent.offsetTop;
    let lowerheight = parent2.offsetTop + topheight;

    for (let i = 0; i < links.length; i++) {
      let linked = links[i].getElementsByTagName("a")[0];
      linked.addEventListener("click", (e) => {
        e.preventDefault();
        let linkToClick = e.target;
        let anchor = linkToClick.getAttribute("href");
        let elementoTogo = document.querySelector(anchor);
        let distance = elementoTogo.offsetTop;
        let finaldistance = distance + topheight - 130;
        console.log(finaldistance);
        window.scrollTo({
          top: finaldistance,
          left: 0,
          behavior: "smooth",
        });
      });
    }

    for (let i = 0; i < links2.length; i++) {
      let linked = links2[i].getElementsByTagName("a")[0];
      linked.addEventListener("click", (e) => {
        e.preventDefault();
        let linkToClick = e.target;
        let anchor = linkToClick.getAttribute("href");
        let elementoTogo = document.querySelector(anchor);
        let distance = elementoTogo.offsetTop;
        let finaldistance = distance + lowerheight - 130;
        console.log(finaldistance);
        window.scrollTo({
          top: finaldistance,
          left: 0,
          behavior: "smooth",
        });
      });
    }
  }
};

window.onscroll = function () {
  if (searchBox.length >= 1) {
    let y = window.scrollY;

    if (y >= 100) {
      if (showInputScroll) {
        if (eyeIcon != null) {
          eyeIcon.classList.add("icon-eye-home");
          eyeIcon.classList.remove("icon-iso");
        }
        first.classList.add("hidden");
        if (scroller != null) {
          scroller.classList.remove("hidden");
        }
        second.classList.remove("hidden");
      }
    } else {
      if (eyeIcon != null) {
        eyeIcon.classList.remove("icon-eye-close");
        eyeIcon.classList.add("icon-iso");
        eyeIcon.classList.remove("icon-eye-home");
      }
      if (scroller != null) {
        scroller.classList.add("hidden");
      }
      // second.classList.add("hidden");
      third.classList.add("hidden");
      first.classList.remove("hidden");
      // menuIcon.removeEventListener("click", showInput);
      inputAllow = true;
      showInputScroll = true;
    }
  }

  if (document.querySelector("#menuSideElement")) {
    let element = document.querySelector("#menuSideElement");
    let element2 = document.querySelector("#sideMenuAlt");
    let parent = document.querySelector("#land-container");
    let parent2 = document.querySelector("#ideals");
    let topheight = parent.offsetTop;
    let lowerheight = parent2.offsetTop + topheight;
    let yepheight = lowerheight - 130;
    let notheight = topheight - 130;
    let topheight2 = window.scrollY;
    console.log(lowerheight);
    if (topheight2 >= notheight) {
      let newTop = topheight2 - notheight;
      element.style.paddingTop = "80px";
      element.style.marginTop = newTop + "px";
    } else {
      element.style.paddingTop = "40px";
      element.style.marginTop = "0px";
    }

    if (topheight2 >= yepheight) {
      let newTop = topheight2 - yepheight;
      element2.style.paddingTop = "80px";
      element2.style.marginTop = newTop + "px";
    } else {
      element2.style.paddingTop = "40px";
      element2.style.marginTop = "0px";
    }
  }
};

function cleanInput() {
  let inputHere = document.querySelector("#input-search-one");
  let pholder = inputHere.getAttribute("placeholder");
  let wide = pholder.length;
  inputHere.value = "";
  cleaner.style.display = "none";
  inputHere.style.width = wide * 11 + "px";
}

function changeicon() {
  if (eyeIcon != null) {
    let clases = eyeIcon.getAttribute("class");
    console.log(clases);
    clasesToUse = clases;
    eyeIcon.setAttribute("class", "iso text-black pl-4 icon-eye-ellipse");
  }
}

function changeicon2() {
  if (eyeIcon != null) {
    eyeIcon.setAttribute("class", clasesToUse);
  }
}

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
    if (eyeIcon != null) {
      eyeIcon.classList.remove("icon-iso");
      eyeIcon.classList.add("icon-eye-close");
    }
    inputAllow = false;
    showInputScroll = false;
  } else {
    second.classList.remove("hidden");
    third.classList.add("hidden");
    if (eyeIcon != null) {
      eyeIcon.classList.add("icon-iso");
      eyeIcon.classList.remove("icon-eye-close");
    }
    inputAllow = true;
    showInputScroll = true;
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

function openMenuRes() {
  let menuRes = document.getElementById("responsive-menu");
  menuRes.classList.toggle("open");
}

function openOverlayMenu() {
  let elParent = document.getElementById("parentOverlay");
  let menusOverlay = document.getElementsByClassName("overlay-menu-items");

  elParent.classList.toggle("opened");
  for (let i = 0; i < menusOverlay.length; i++) {
    menusOverlay[i].classList.toggle("opened");
  }
}

function showMenuInput() {
  first.classList.toggle("hidden");
  if (scroller != null) {
    scroller.classList.toggle("hidden");
  }
  if (eyeIcon != null) {
    eyeIcon.classList.toggle("icon-iso");
    eyeIcon.classList.toggle("icon-eye-home");
  }
  if (searchBox.length >= 1) {
    let y = window.scrollY;

    if (y >= 100) {
    } else {
      // eyeIcon.classList.add("icon-home");
    }
  }
}

function showConvoOpen() {
  console.log("evening");
  let targetted = event.target;
  let parent = targetted.parentNode.parentNode;
  let convo = parent.getElementsByClassName("convoBoxItems")[0];
  convo.classList.toggle("opened");
}

function getValueItem() {
  event.stopImmediatePropagation();
  let targetted = event.target;
  let valueHolder = targetted.getElementsByTagName("input")[0];
  valueHolder.checked = !valueHolder.checked;
  let value = valueHolder.value;
  if (valueHolder.checked) {
    console.log("add name");
  } else {
    console.log("remove name");
  }
}

var slider = document.querySelectorAll(".slider")[0];
if (slider != undefined) {
  let thumb = slider.querySelector(".circular-indicator-used");

  thumb.onmousedown = function (event) {
    event.preventDefault(); // prevent selection start (browser action)

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;
    // shiftY not needed, the thumb moves only horizontally

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    function onMouseMove(event) {
      let newLeft =
        event.clientX - shiftX - slider.getBoundingClientRect().left;
      let rightEdge = slider.offsetWidth - thumb.offsetWidth;
      let unitValue = rightEdge / 100;
      let millions = newLeft / unitValue;

      console.log(millions);
      let millionCounter = document.querySelectorAll(".million-counter")[0];

      if (millions >= 100) {
        millionCounter.innerHTML = Math.floor(millions) + "m+";
      } else {
        millionCounter.innerHTML = Math.floor(millions) + "m";
      }

      thumb.style.left = newLeft + "px";
    }

    function onMouseUp() {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    }
  };

  thumb.ondragstart = function () {
    return false;
  };
}

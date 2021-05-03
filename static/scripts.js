var triggers = document.getElementsByClassName("trigger-tabs");
var addTriggers = document.getElementsByClassName("addTrigger");
var tabs = document.getElementsByClassName("items-tabs");
var editBoxes = document.getElementsByClassName("box-info-edit");

var nonEditables = document.getElementsByClassName("non-editables");

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

var _main_search_page = document.getElementById("search-page");
var _main_page = document.getElementById("main-page");

var trigAlert = document.querySelectorAll(".modal-repurpose");

var inputModal = document.querySelectorAll('.modal-input-validation');
var inputModalSpan = document.querySelectorAll('.modal-input-span-circle');
var inputModalSpanKeys = document.querySelectorAll('.modal-input-span-keys');
var modalComboOpen = document.querySelectorAll('.modal-combo-open');
var modalComboItems = document.querySelectorAll('.modal-combo-items');
var modalComboWriteOpen = document.querySelectorAll('.modal-combo-write-open');
var modalComboItemsSpan = document.querySelectorAll('.modal-combo-items-span');




if (has_filter == undefined) {
  var has_filter = false;
}

function show_main_page() {
  if (_main_page != undefined) {
    _main_page.classList.remove("hidden");
    _main_search_page.classList.add("hidden");
  }
}

function show_search_page() {
  if (_main_search_page != undefined) {
    _main_page.classList.add("hidden");
    _main_search_page.classList.remove("hidden");
  }
}

function searchRedirect() {
  if (
    document.getElementById("icon-changer").classList.contains("icon-eye-home")
  ) {
    show_main_page();
    eyeIcon.classList.remove("icon-eye-close");
    eyeIcon.classList.add("icon-iso");
    eyeIcon.classList.remove("icon-eye-home");
    document.getElementById("search").value = "";
    has_filter = false;
  } else {
    window.location.href = location.protocol + "//" + location.host + "/search";
  }
}

function show_main_page() {
  if (_main_page != undefined && _main_search_page != undefined) {
    _main_page.classList.remove("hidden");
    _main_search_page.classList.add("hidden");
  }
}

function show_search_page() {
  if (_main_search_page != undefined && _main_page != undefined) {
    _main_page.classList.add("hidden");
    _main_search_page.classList.remove("hidden");
  }
}

var selectsOne = document.querySelectorAll(".convoBoxItems");

var selectElms = document.querySelectorAll(".toselect");

var noSelect = document.getElementsByClassName("showConvoNoSelect");
var noSelectItems = document.querySelectorAll(".convoBoxNoSelect");

window.onload = function () {
  if (searchBox.length >= 1) {
    let inputHere = searchBox[0].getElementsByTagName("input");
    let pholder = inputHere[0].getAttribute("placeholder");
    let wide = pholder.length;
    inputHere[0].style.width = wide * 20 + "px";

    inputHere[0].addEventListener("input", function () {
      let inputcontent = inputHere[0].value;
      if (inputcontent.length >= 1) {
        let wider = inputcontent.length;
        if (cleaner2 != null) {
          cleaner.style.display = "block";
          cleaner2.style.display = "block";
        }
        //        inputHere[0].style.width = wider * 11 + "px";
      } else {
        if (cleaner2 != null) {
          cleaner.style.display = "none";
          cleaner2.style.display = "none";
        }
        //        inputHere[0].style.width = wide * 11 + "px";
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
    convoTriggers[i].addEventListener("focus", showConvoOpen);
  }

  for (let i = 0; i < noSelect.length; i++) {
    noSelect[i].addEventListener("focus", showConvoOpenNoSelect);
  }

  for (let i = 0; i < inputModal.length; i++) {
    inputModal[i].addEventListener("blur", modalError);
  }

  for (let i = 0; i < inputModalSpan.length; i++) {
    inputModalSpan[i].addEventListener('keydown', checkEnter);
  }

  for (let i = 0; i < inputModalSpanKeys.length; i++) {
    inputModalSpanKeys[i].addEventListener('keyup', keyListen);
  }

  for (let i = 0; i < modalComboItemsSpan.length; i++) {
    modalComboItemsSpan[i].addEventListener('focus', keyListenItemsSpan);
  }

  for (let i = 0; i < modalComboWriteOpen.length; i++) {
    modalComboWriteOpen[i].addEventListener('keydown', keylistendown);
  }
  

  for (let i = 0; i < modalComboOpen.length; i++) {
    modalComboOpen[i].addEventListener('focus', openModalCombo);
  }

  for (let i = 0; i < modalComboItems.length; i++) {
    modalComboItems[i].addEventListener('blur', closeModalCombo);
    modalComboItems[i].addEventListener('keydown', getModalComboData);
  }

  if (menuIcon != null) {
    menuIcon.addEventListener("click", showInput);
  }

  for (let i = 0; i < selectsOne.length; i++) {
    // selectsOne[i].addEventListener("click", multipleItemsClick);
    selectsOne[i].addEventListener("focus", multipleItems);
    selectsOne[i].addEventListener("click", multipleItemsClick);
    selectsOne[i].addEventListener("blur", closeItems);
  }

  for (let i = 0; i < noSelectItems.length; i++) {
    // selectsOne[i].addEventListener("click", multipleItemsClick);
    selectsOne[i].addEventListener("blur", closeItemsNoSelect);
  }

  for (let i = 0; i < trigAlert.length; i++) {
    // selectsOne[i].addEventListener("click", multipleItemsClick);
    trigAlert[i].addEventListener("click", launchAlertModal);
  }

  for (let i = 0; i < selectElms.length; i++) {
    // selectsOne[i].addEventListener("click", multipleItemsClick);
    selectElms[i].addEventListener("click", selectItemsDown);
  }

  if (eyeIcon != null) {
    eyeIcon.addEventListener("click", searchRedirect);
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

  for (let i = 0; i < nonEditables.length; i++) {
    nonEditables[i].addEventListener("focus", moveElements);
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

  tippy("#myToogle", {
    content: `
    <div class="p-3">
      <div class="flex justify-between w-100">
        <p class="font-bold text-xs text-cut">start•up•y / stärtˈəpˈē / adj.</p>
      </div>
      <p class="text-xs text-white pt-2">a state of mind that is non-linear and associative, meandering and attentive. To be startupy is to be ever curious, concerned with building things and uncovering unexpected connections and patterns between ideas.</p>
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

function show_search_header() {
  first.classList.add("hidden");
  scroller.classList.remove("hidden");
  second.classList.remove("hidden");
}

function show_main_header() {
  second.classList.add("hidden");
  first.classList.remove("hidden");
}

window.onscroll = function () {
  if (searchBox.length >= 1) {
    let y = window.scrollY;

    var search_input = document.getElementById("search");

    if (y >= 100) {
      show_search_header();
      if (has_filter == false) {
        _show_main_page();
        third.classList.add("hidden");

        inputAllow = true;
        showInputScroll = true;
      } else {
        _show_search_page();
      }
    } else {
      if (has_filter == true) {
        _show_search_page();
        show_search_header();
      } else {
        show_main_header();
        _show_main_page();
      }
    }
  } else {
    if (has_filter == true) {
      _show_search_page();
      show_search_header();
    } else {
      show_main_header();
      _show_main_page();
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
  let targetted = event.target;
  let parent = targetted.parentNode.parentNode;
  let convo = parent.getElementsByClassName("convoBoxItems")[0];
  convo.classList.toggle("opened");
  convo.focus();
}

function showConvoOpenNoSelect() {
  let targetted = event.target;
  let parent = targetted.parentNode.parentNode;
  let convo = parent.getElementsByClassName("convoBoxNoSelect")[0];
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

function multipleItems(e) {
  console.log("multiple items here");
  // e.preventDefault();
  // let childs = e.target.querySelectorAll("option");
  // for (let i = 0; i < childs.length; i++) {
  //   childs[i].addEventListener("click", (e) => {
  //     e.preventDefault();
  //     let selectedstatus = e.target.getAttribute("selected");
  //     e.target.selected ? true : false;
  //     // e.target.selected = !e.target.selected;
  //   });
  // }

  e.target.addEventListener("keypress", (e) => {
    let entered = e.keyCode;
    if (entered === 13) {
      let selected = e.target.selectedOptions;
      for (let i = 0; i < selected.length; i++) {
        console.log("enter push", selected[i].value);
      }
      e.target.classList.remove("opened");
    }
  });
  // var select = this;
  // var scroll = select.scrollTop;

  // e.target.selected = !e.target.selected;

  // setTimeout(function () {
  //   select.scrollTop = scroll;
  // }, 0);

  // e.target.focus();
}

function multipleItemsClick(e) {
  let selectedElement = e.target;
  let elUsed = selectedElement.selected;
  if (elUsed) {
    selectedElement.removeAttribute("selected");
    selectedElement.selected = false;
  } else {
    selectedElement.setAttribute("selected", "");
    selectedElement.selected = true;
  }
  e.preventDefault();
}

function closeItems(e) {
  console.log("close items here");
  // e.preventDefault();
  let selected = e.target.selectedOptions;
  for (let i = 0; i < selected.length; i++) {
    console.log("enter push", selected[i].value);
  }
  e.target.classList.remove("opened");
}

function closeItemsNoSelect(e) {
  console.log("close items here");
  // e.preventDefault();
  let parent = e.target;
  let selected = parent.querySelector(".activeElement");
  for (let i = 0; i < selected.length; i++) {
    console.log("enter push", selected[i]);
  }
  e.target.classList.remove("opened");
}

// function multipleItemsClick(e) {
//   var select = this;
//   var scroll = select.scrollTop;

//   e.target.selected = !e.target.selected;

//   setTimeout(function () {
//     select.scrollTop = scroll;
//   }, 0);

//   e.target.focus();
// }

function moveElements(e) {
  let parent = e.target;
  let firstElement = parent.querySelectorAll("div")[0];
  firstElement.classList.add("activeElement");
  let index1 = 0;
  parent.onkeydown = (e) => {
    let valueCode = e.keyCode;

    if (
      valueCode !== 38 &&
      valueCode !== 40 &&
      valueCode !== 9 &&
      valueCode !== 13
    ) {
      return false;
    } else {
      if (valueCode === 38) {
        console.log("go up");
        let elements = parent.querySelectorAll("div");
        let prev = parent.querySelectorAll("div")[index1 - 1];
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("activeElement");
        }
        if (prev != undefined) {
          prev.classList.add("activeElement");
          index1 = index1 - 1;
        } else {
          parent.querySelectorAll("div")[index1].classList.add("activeElement");
          index1 = index1;
          console.log("too wide");
        }
      } else if (valueCode === 40) {
        let elements = parent.querySelectorAll("div");
        let next = parent.querySelectorAll("div")[index1 + 1];
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("activeElement");
        }
        if (next != undefined) {
          next.classList.add("activeElement");
          index1 = index1 + 1;
        } else {
          parent.querySelectorAll("div")[index1].classList.add("activeElement");
          index1 = index1;
          console.log("too far");
        }
        console.log("go down");
      } else if (valueCode === 13) {
        let el = parent.querySelectorAll(".activeElement")[0];
        parent.classList.remove("opened");
        console.log("this is the active Element: ", el);
      }
    }
  };
}

function selectItemsDown(e) {
  e.stopPropagation();
  let targetted = e.target.closest(".toselect");
  let parent = targetted.parentNode;
  let elms = parent.querySelectorAll(".toselect");
  // for (let i = 0; i < elms.length; i++) {
  //   elms[i].classList.remove("activeElement");
  // }
  targetted.classList.toggle("activeElement");
  console.log(targetted);
  // let el = parent.querySelectorAll(".activeElement")[0];
  // parent.classList.remove("opened");
  // console.log("this is the active Element: ", el);
}

function launchAlertModal() {
  console.log("launch modal alert");
  let element = event.target;
  let parent = element.parentNode;
  let alertModal = parent.querySelectorAll(".g-modal-alert")[0];
  console.log(parent.querySelectorAll(".g-modal-alert"));
  if (alertModal) {
    console.log(parent.querySelectorAll(".g-modal-alert"));
    alertModal.style.display = "flex";
  } else {
    vanillaModal.close();
  }
}

function closeAlertModal() {
  let element = event.target;
  let parent = element.closest(".g-modal-alert");
  parent.style.display = "none";
}

function closeModalAll() {
  let element = event.target;
  let parent = element.closest(".g-modal-alert");
  parent.style.display = "none";
  vanillaModal.close();
}

function checkEnter(event) {
  if(event.keyCode == 13) {
    event.preventDefault();
    console.log(event.keyCode);
    callOnEnter();
    return false;
  }
}

function keyListen(event) {
    console.log(event.keyCode);
    console.log(event.key);
}

function keylistendown(event) {
  if(event.keyCode !== 40) {
    openModalComboNoFocus();
  } else {
    event.preventDefault();
    openModalCombo();
  }
}

function keyListenItemsSpan(event) {
  console.log(event.target);
  let parent = event.target;
  let index1 = 0;
  console.log(parent);
  parent.onkeydown = (e) => { 
    let codekey = e.keyCode;
    if(codekey !== 38 && codekey !== 40 && codekey !== 9 && codekey !== 13) {
      return false;
    } else {
      if(codekey === 40) {
        console.log('going down');
        let elements = parent.querySelectorAll('div.selectable[contenteditable="true"]');
        let next = elements[index1 + 1];
        let actual = elements[index1];
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("activeElement");
        }
        if (next != undefined) {
          next.classList.add("activeElement");
          index1 = index1 + 1;
        } else {
          actual.classList.add("activeElement");
          e.preventDefault();
          index1 = index1;
          console.log("too far");
        }
      } else if(codekey === 38) {
        let elements = parent.querySelectorAll('div.selectable[contenteditable="true"]');
        let prev = elements[index1 - 1];
        let actual = elements[index1];
        for (let i = 0; i < elements.length; i++) {
          elements[i].classList.remove("activeElement");
        }
        if (prev != undefined) {
          prev.classList.add("activeElement");
          index1 = index1 - 1;
        } else {
          e.preventDefault();
          actual.classList.add("activeElement");
          index1 = index1;
          console.log("too wide");
        }
      } else if(codekey === 9 || codekey === 13) {
        e.preventDefault();
        let activeoption = parent.querySelectorAll('.activeElement')[0];
        console.log(activeoption);
        closeModalCombo(parent);
      }
    }
  }
}

function callOnEnter() {
  console.log('enter pressed');
}


function modalError() {
  let targetted = event.target;
  let content = targetted.value;
  let contentEdited = targetted.innerText;
  let parent = targetted.closest('.modal-input-container');
  if(!content && !contentEdited) {
    errorShow(targetted,parent);
  } else if(content) {
    errorHide(targetted,parent);
  } else if(contentEdited) {
    errorHide(targetted,parent);
  }
}

function openModalCombo() {
  let targetted = event.target;
  let parent = targetted.closest('.modal-input-container');
  let siblingCombo = parent.querySelector('.modal-combo-items');
  siblingCombo.focus();
  siblingCombo.classList.add('open-combo');
}

function openModalComboNoFocus() {
  let targetted = event.target;
  let parent = targetted.closest('.modal-input-container');
  let siblingCombo = parent.querySelector('.modal-combo-items');
  siblingCombo.classList.add('open-combo');
}

function closeModalCombo() {
  let targetted = event.target;
  targetted.classList.remove('open-combo');
}

function errorShow(targetted, parent) {
  targetted.closest('.modal-input-border').classList.add('border-color--purple-2');
  parent.querySelector('.modal-label').classList.add('color--purple-2');
  parent.querySelector('.modal-error').classList.add('active');
}

function errorHide(targetted, parent) {
  targetted.closest('.modal-input-border').classList.remove('border-color--purple-2');
  parent.querySelector('.modal-label').classList.remove('color--purple-2');
  parent.querySelector('.modal-error').classList.remove('active');
}

function getModalComboData() {
  console.log('get that data boy');
}
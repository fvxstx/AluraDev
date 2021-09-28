/* --- Modal */

const sumario = document.querySelector(".sumario");
const modal = document.querySelector(".modal");
const icon = document.querySelector(".icon-sumario");

sumario.onclick = () => {
  classListModal = modal.classList;

  classListModal.toggle("hidden");

  if (classListModal[1] === "hidden") {
    icon.setAttribute("src", "/images/icons/sumario.svg");
  } else {
    icon.setAttribute("src", "/images/icons/x.svg");
  }
};

/* --- Button search */

const iconSumario = document.querySelector(".icon-sumario");
const iconSearch = document.querySelector(".icon-search");
const buttonSearch = document.querySelector(".buscar");
const logotype = document.querySelector(".title");
const campSearch = document.querySelector("header .model-input");

buttonSearch.onclick = () => {
  let classListSumario = iconSumario.classList;
  let classListLogotype = logotype.classList;
  let classListCampSearch = campSearch.classList;

  classListSumario.toggle("hidden");
  classListLogotype.toggle("hidden");
  classListCampSearch.toggle("hidden");

  if (classListSumario[1] === "hidden") {
    iconSearch.setAttribute("src", "/images/icons/x.svg");
  } else {
    iconSearch.setAttribute("src", "/images/icons/search.svg");
  }
};

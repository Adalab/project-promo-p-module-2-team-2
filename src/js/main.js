"use strict";

const completeLegend = document.querySelector(".js_complete_legend");

const designLegend = document.querySelector(".js_design_legend");
const shareLegend = document.querySelector(".js_share_legend");
const completeForm = document.querySelector(".js_complete_form");
const designForm = document.querySelector(".js_design_form");
const shareForm = document.querySelector(".js_share_form");
const arrow = document.querySelectorAll(".js_arrow");

function openForm(legendId) {
  if (legendId === "completeLegend") {
    completeForm.classList.toggle("collapsed");
    designForm.classList.add("collapsed");
    shareForm.classList.add("collapsed");
  }

  if (legendId === "designLegend") {
    designForm.classList.toggle("collapsed");
    completeForm.classList.add("collapsed");
    shareForm.classList.add("collapsed");
  }

  if (legendId === "shareLegend") {
    shareForm.classList.toggle("collapsed");
    designForm.classList.add("collapsed");
    completeForm.classList.add("collapsed");
  }
}

// arrow[0] = design
// arrow[1] = complete
// arrow[2] = share

function rotateArrow(legendId) {
  if (legendId === "completeLegend") {
    arrow[1].classList.toggle("toggle_arrow");
    arrow[0].classList.add("toggle_arrow");
    arrow[2].classList.add("toggle_arrow");
  }

  if (legendId === "designLegend") {
    arrow[0].classList.toggle("toggle_arrow");
    arrow[1].classList.add("toggle_arrow");
    arrow[2].classList.add("toggle_arrow");
  }

  if (legendId === "shareLegend") {
    arrow[2].classList.toggle("toggle_arrow");
    arrow[1].classList.add("toggle_arrow");
    arrow[0].classList.add("toggle_arrow");
  }
}

function handleCollapsed(event) {
  event.preventDefault();
  const legendId = event.currentTarget.id;
  rotateArrow(legendId);
  openForm(legendId);
}

completeLegend.addEventListener("click", handleCollapsed);

designLegend.addEventListener("click", handleCollapsed);

shareLegend.addEventListener("click", handleCollapsed);

//
//
// Mostrar el texto mientras se escribe
//
//

// Identificar los elementos de los que se recoge la información:
const realTimeNameInput = document.querySelector(".js_name_input");
const realTimeOcupationInput = document.querySelector(".js_ocupation_input");

// Identificar los elementos sobre los que se va a pintar:
const realTimeName = document.querySelector(".js_name");
const realTimeOcupation = document.querySelector(".js_ocupation");

function showName() {
  realTimeName.innerHTML = realTimeNameInput.value;
}

function showOcupation() {
  realTimeOcupation.innerHTML = realTimeOcupationInput.value;
}

realTimeNameInput.addEventListener("keyup", showName);
realTimeOcupationInput.addEventListener("keyup", showOcupation);

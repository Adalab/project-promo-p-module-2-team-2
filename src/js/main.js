'use strict';

const completeLegend = document.querySelector ('.js_complete_legend');

const designLegend = document.querySelector ('.js_design_legend');

const shareLegend = document.querySelector ('.js_share_legend');

const completeForm = document.querySelector ('.js_complete_form');

const designForm = document.querySelector ('.js_design_form');

const shareForm = document.querySelector ('.js_share_form');

const arrow = document.querySelectorAll ('.js_arrow');



function openForm (legendId) {
  if (legendId ==='completeLegend'){
    completeForm.classList.toggle('collapsed');
    designForm.classList.add('collapsed');
    shareForm.classList.add('collapsed');
  }

  if (legendId ==='designLegend'){
    designForm.classList.toggle('collapsed');
    completeForm.classList.add('collapsed');
    shareForm.classList.add('collapsed');
  }

  if (legendId ==='shareLegend'){
    shareForm.classList.toggle('collapsed');
    designForm.classList.add('collapsed');
    completeForm.classList.add('collapsed');
  }

}


function rotateArrow (legendId) {
  if (legendId ==='completeLegend'){
    arrow[1].classList.add('toggle_arrow');
    arrow[0].classList.remove('toggle_arrow');
    arrow[2].classList.remove('toggle_arrow');
  }

  if (legendId ==='designLegend'){
    arrow[0].classList.add('toggle_arrow');
    arrow[1].classList.remove('toggle_arrow');
    arrow[2].classList.remove('toggle_arrow');

  }

  if (legendId ==='shareLegend'){
    arrow[2].classList.add('toggle_arrow');
    arrow[1].classList.remove('toggle_arrow');
    arrow[0].classList.remove('toggle_arrow');

  }

}



function handleCollapsed (event) {
  event.preventDefault ();
  const legendId = event.currentTarget.id;
  rotateArrow (legendId);
  openForm (legendId);

}

completeLegend.addEventListener('click', handleCollapsed);

designLegend.addEventListener('click', handleCollapsed);

shareLegend.addEventListener('click', handleCollapsed);



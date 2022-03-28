'use strict';

const completeLegend = document.querySelector ('.js_complete_legend');

const designLegend = document.querySelector ('.js_design_legend');

const shareLegend = document.querySelector ('.js_share_legend');

const completeForm = document.querySelector ('.js_complete_form');

const designForm = document.querySelector ('.js_design_form');

const shareForm = document.querySelector ('.js_share_form');


//function rotateArrow () {}



//
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



function handleCollapsed (event) {
  event.preventDefault ();
  //rotateArrow ();
  const legendId = event.currentTarget.id;
  openForm (legendId);

}

completeLegend.addEventListener('click', handleCollapsed);

designLegend.addEventListener('click', handleCollapsed);

shareLegend.addEventListener('click', handleCollapsed);



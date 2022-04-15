'use strict';
const completeLegend = document.querySelector('.js_complete_legend'),
  designLegend = document.querySelector('.js_design_legend'),
  shareLegend = document.querySelector('.js_share_legend'),
  completeForm = document.querySelector('.js_complete_form'),
  designForm = document.querySelector('.js_design_form'),
  shareForm = document.querySelector('.js_share_form'),
  arrow = document.querySelectorAll('.js_arrow'),
  stylePreview = document.querySelector('.js_style_preview'),
  style_001 = document.querySelector('#style_001'),
  style_002 = document.querySelector('#style_002'),
  style_003 = document.querySelector('#style_003');
function openForm(e) {
  'completeLegend' === e &&
    (completeForm.classList.toggle('collapsed'),
    designForm.classList.add('collapsed'),
    shareForm.classList.add('collapsed')),
    'designLegend' === e &&
      (designForm.classList.toggle('collapsed'),
      completeForm.classList.add('collapsed'),
      shareForm.classList.add('collapsed')),
    'shareLegend' === e &&
      (shareForm.classList.toggle('collapsed'),
      designForm.classList.add('collapsed'),
      completeForm.classList.add('collapsed'));
}
function rotateArrow(e) {
  'completeLegend' === e &&
    (arrow[1].classList.toggle('toggle_arrow'),
    arrow[0].classList.add('toggle_arrow'),
    arrow[2].classList.add('toggle_arrow')),
    'designLegend' === e &&
      (arrow[0].classList.toggle('toggle_arrow'),
      arrow[1].classList.add('toggle_arrow'),
      arrow[2].classList.add('toggle_arrow')),
    'shareLegend' === e &&
      (arrow[2].classList.toggle('toggle_arrow'),
      arrow[1].classList.add('toggle_arrow'),
      arrow[0].classList.add('toggle_arrow'));
}
function handleCollapsed(e) {
  e.preventDefault();
  const s = e.currentTarget.id;
  rotateArrow(s), openForm(s);
}
completeLegend.addEventListener('click', handleCollapsed),
  designLegend.addEventListener('click', handleCollapsed),
  shareLegend.addEventListener('click', handleCollapsed);
const realTimeNameInput = document.querySelector('.js_name_input'),
  realTimeOcupationInput = document.querySelector('.js_ocupation_input'),
  realTimeName = document.querySelector('.js_name'),
  realTimeOcupation = document.querySelector('.js_ocupation');
function showName() {
  realTimeName.innerHTML = realTimeNameInput.value;
}
function showOcupation() {
  realTimeOcupation.innerHTML = realTimeOcupationInput.value;
}
function changeColorStyle(e) {
  const s = e.currentTarget.id;
  'style_001' === s &&
    (stylePreview.classList.add('style_001'),
    stylePreview.classList.remove('style_002'),
    stylePreview.classList.remove('style_003')),
    'style_002' === s &&
      (stylePreview.classList.add('style_002'),
      stylePreview.classList.remove('style_001'),
      stylePreview.classList.remove('style_003')),
    'style_003' === s &&
      (stylePreview.classList.add('style_003'),
      stylePreview.classList.remove('style_002'),
      stylePreview.classList.remove('style_001'));
}
realTimeNameInput.addEventListener('keyup', showName),
  realTimeOcupationInput.addEventListener('keyup', showOcupation),
  style_001.addEventListener('click', changeColorStyle),
  style_002.addEventListener('click', changeColorStyle),
  style_003.addEventListener('click', changeColorStyle);

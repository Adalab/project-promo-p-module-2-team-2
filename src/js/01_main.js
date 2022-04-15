'use strict';

const completeLegend = document.querySelector('.js_complete_legend');
const designLegend = document.querySelector('.js_design_legend');
const shareLegend = document.querySelector('.js_share_legend');

const completeForm = document.querySelector('.js_complete_form');
const designForm = document.querySelector('.js_design_form');
const shareForm = document.querySelector('.js_share_form');

const arrow = document.querySelectorAll('.js_arrow');

const stylePreview = document.querySelector('.js_style_preview');
const style_001 = document.querySelector('#style_001');
const style_002 = document.querySelector('#style_002');
const style_003 = document.querySelector('#style_003');

// CONSTANTES PARA LAS IMÁGENES DE MINIATURA Y AVATAR DE LA TARJETA "PREVIEW".

const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

function openForm(legendId) {
  if (legendId === 'completeLegend') {
    completeForm.classList.toggle('collapsed');
    designForm.classList.add('collapsed');
    shareForm.classList.add('collapsed');
  }

  if (legendId === 'designLegend') {
    designForm.classList.toggle('collapsed');
    completeForm.classList.add('collapsed');
    shareForm.classList.add('collapsed');
  }

  if (legendId === 'shareLegend') {
    shareForm.classList.toggle('collapsed');
    designForm.classList.add('collapsed');
    completeForm.classList.add('collapsed');
  }
}

// arrow[0] = design
// arrow[1] = complete
// arrow[2] = share

function rotateArrow(legendId) {
  if (legendId === 'completeLegend') {
    arrow[1].classList.toggle('toggle_arrow');
    arrow[0].classList.add('toggle_arrow');
    arrow[2].classList.add('toggle_arrow');
  }

  if (legendId === 'designLegend') {
    arrow[0].classList.toggle('toggle_arrow');
    arrow[1].classList.add('toggle_arrow');
    arrow[2].classList.add('toggle_arrow');
  }

  if (legendId === 'shareLegend') {
    arrow[2].classList.toggle('toggle_arrow');
    arrow[1].classList.add('toggle_arrow');
    arrow[0].classList.add('toggle_arrow');
  }
}

function handleCollapsed(event) {
  event.preventDefault();
  const legendId = event.currentTarget.id;
  rotateArrow(legendId);
  openForm(legendId);
}

completeLegend.addEventListener('click', handleCollapsed);

designLegend.addEventListener('click', handleCollapsed);

shareLegend.addEventListener('click', handleCollapsed);

//
//
// Mostrar el texto mientras se escribe
//
//

// Identificar los elementos de los que se recoge la información:
// const realTimeNameInput = document.querySelector('.js_name_input');
// const realTimeOcupationInput = document.querySelector('.js_ocupation_input');

// // Identificar los elementos sobre los que se va a pintar:
// const realTimeName = document.querySelector('.js_name');
// const realTimeOcupation = document.querySelector('.js_ocupation');

// function showName() {
//   realTimeName.innerHTML = realTimeNameInput.value;
// }

// function showOcupation() {

//   realTimeOcupation.innerHTML = realTimeOcupationInput.value;
// }

// realTimeNameInput.addEventListener('keyup', showName);
// realTimeOcupationInput.addEventListener('keyup', showOcupation);

//
//
// Cambiar los colores de la tarjeta Preview
//
//

function changeColorStyle(event) {
  const styleX = event.currentTarget.id;
  if (styleX === 'style_001') {
    stylePreview.classList.add('style_001');
    stylePreview.classList.remove('style_002');
    stylePreview.classList.remove('style_003');
  }
  if (styleX === 'style_002') {
    stylePreview.classList.add('style_002');
    stylePreview.classList.remove('style_001');
    stylePreview.classList.remove('style_003');
  }
  if (styleX === 'style_003') {
    stylePreview.classList.add('style_003');
    stylePreview.classList.remove('style_002');
    stylePreview.classList.remove('style_001');
  }
}

style_001.addEventListener('click', changeColorStyle);
style_002.addEventListener('click', changeColorStyle);
style_003.addEventListener('click', changeColorStyle);

///DESDE AQUÍ!!

//CONSTANTE DATA
//En una misma variable creo un objeto que guarde todos los valores que la usuaria escriba, es útil para luego pasar todos esos datos al servidor.
const data = {
  palette: 1,
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
};

const inputsForm = document.querySelector('.js_allInputs'); //PRIMER DIV DEBAJO DE SECTION INPUTS
const emailIcon = document.querySelector('.js_icon_email'); //CREO CLASE PARA ICONOS RRSS Y ME LOS TRAIGO
const phoneIcon = document.querySelector('.js_icon_phone');
const linkedinIcon = document.querySelector('.js_icon_linkedin');
const githubIcon = document.querySelector('.js_icon_github');

//CON ESTA FUNCIÓN RECOJO LOS DATOS DE LA USUARIA Y SE LOS DOY COMO VALOR A LA CONST DATA
function handleData(event) {
  const inputType = event.target;
  if (inputType.id === 'name') {
    data.name = inputType.value;
  } else if (inputType.id === 'job') {
    data.job = inputType.value;
  } else if (inputType.id === 'email') {
    data.email = inputType.value;
  } else if (inputType.id === 'phone') {
    data.phone = inputType.value;
  } else if (inputType.id === 'linkedin') {
    data.linkedin = inputType.value;
  } else if (inputType.id === 'github') {
    data.github = inputType.value;
  }
  previewUser(); //llamo a la función que me va cambiando el valor de la tarjeta preview, con lo que he ido guardando en el data
}

//Función que cambia los valores del preview con los datos que se van pasando a la constante data.
const realTimeName = document.querySelector('.js_name');
const realTimeOcupation = document.querySelector('.js_ocupation');

function previewUser() {
  realTimeName.innerHTML = data.name;
  realTimeOcupation.innerHTML = data.job;
  //Para que cuando quite mi nombre vuelva a salir lo que estaba escrito en la tarjeta, nombre y apellidos y profesión
  if (data.name === '') {
    realTimeName.innerHTML = 'Nombre y Apellidos';
  } else {
    realTimeName.innerHTML = data.name;
  }

  if (data.job === '') {
    realTimeOcupation.innerHTML = 'Profesión';
  } else {
    realTimeOcupation.innerHTML = data.job;
  }

  emailIcon.href = `mailto:${data.email}`; //Ponemos target="_blank", en los enlaces del main-preview?
  phoneIcon.href = `tel:${data.phone}`;
  linkedinIcon.href = data.linkedin;
  githubIcon.href = data.github;
}

inputsForm.addEventListener('keyup', handleData);

// Reset button

const btnReset = document.querySelector('.js-reset-btn');
const inputName = document.querySelector('.js_name_input');
const inputJob = document.querySelector('.js_ocupation_input');
const inputEmail = document.querySelector('.js_input_email');
const inputPhone = document.querySelector('.js_input_phone');
const inputLinkedin = document.querySelector('.js_input_linkedin');
const inputGithub = document.querySelector('.js_input_github');

function resetPreview() {
  // Resetea los valores del objeto a cadenas vacias.
  (data.palette = 1), (data.name = '');
  data.job = '';
  data.email = '';
  data.phone = '';
  data.linkedin = '';
  data.github = '';
  (data.photo = ''),
    // Resetea los valores del formurio a cadenas vacias.
    (inputName.value = '');
  inputJob.value = '';
  inputEmail.value = '';
  inputPhone.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';

  // Resetea los valores por defecto de la tarjeta de vista previa.
  realTimeName.innerHTML = 'Nombre y Apellidos';
  realTimeOcupation.innerHTML = 'Profesión';
}

function handleReset(event) {
  event.preventDefault();
  resetPreview();
  //previewUser();
  profileImage.style.backgroundImage = '';
  profilePreview.style.backgroundImage = '';
}

btnReset.addEventListener('click', handleReset);

//TWITTER

const createButton = document.querySelector('.js_create_button'); //Botón de crear tarjeta
const urlTwitter = document.querySelector('.js_url'); //URL twitter
const shareButton = document.querySelector('.share__button--in');
const feedBack = document.querySelector('.js_share__title--done');

function handleClickCreateButton(event) {
  event.preventDefault();

  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    header: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((serverResp) => {
      console.log(serverResp);

      if (serverResp.success === false) {
        feedBack.innerHTML = 'Falta algún dato del formulario';
        // Mostrar un mensajito de error en la página
      } else {
        // El servidor ha aceptado los datos.
        // Mostrar la dirección que está en serverResp.cardURL y el botón de Tw.
        feedBack.innerHTML = 'La tarjeta ha sido creada:';
        urlTwitter.innerHTML = serverResp.cardURL;
        urlTwitter.href = serverResp.cardURL;
      }
    });
  shareButton.remove('hidden');
}

function shareOnTwitter(event) {
  event.preventDefault();
  console.log(urlTwitter.href);
  let url = `https://twitter.com/intent/tweet?text=He%20creado%20una%20tarjeta%20profesional.%20Conóceme!%20&url=${urlTwitter.href}`;
  window.location.href = url;
}

createButton.addEventListener('click', handleClickCreateButton);
shareButton.addEventListener('click ', shareOnTwitter);

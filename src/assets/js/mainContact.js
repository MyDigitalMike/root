function contactMain() {

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const contactForm = document.getElementById('contact-form');
  const errorElement = document.getElementById('error');
  const successMsg = document.getElementById('success-msg');
  const submitBtn = document.getElementById('submit');

  const validate = (e) => {
    e.preventDefault();

    if (name.value.length < 3) {
      errorElement.innerHTML = 'Tu nombre debe tener al menos 3 caracteres.';
      return false;
    }

    if (!(email.value.includes('.') && (email.value.includes('@')))) {
      errorElement.innerHTML = 'Por favor, introduce una dirección de correo electrónico válida.';
      return false;
    }

    if (!emailIsValid(email.value)) {
      errorElement.innerHTML = 'Por favor, introduce una dirección de correo electrónico válida.';
      return false;
    }

    if (message.value.length < 15) {
      errorElement.innerHTML = 'Escribe un mensaje más largo.';
      return false;
    }

    errorElement.innerHTML = '';
    successMsg.innerHTML = '¡Gracias! Me pondré en contacto contigo lo antes posible.';

    e.preventDefault();
    setTimeout(function () {
      successMsg.innerHTML = '';
      document.getElementById('contact-form').reset();
    }, 6000);

    return true;

  }

  const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  submitBtn.addEventListener('click', validate);
}
contactMain();

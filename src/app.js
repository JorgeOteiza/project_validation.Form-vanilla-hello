import "./style.css";

// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
  console.log("Hello Rigo from the console!");

  // Selecciona el formulario por su ID
  const form = document.getElementById("paymentForm");

  // Agrega un listener para el evento submit del formulario
  form.addEventListener("submit", function(event) {
    // Evita que el formulario se envíe automáticamente
    event.preventDefault();

    // Llama a la función de validación y muestra los mensajes de error si es necesario
    if (validateForm()) {
      // Si la validación pasa, se puede enviar el formulario o realizar otras acciones aquí
      console.log("Formulario válido. Puedes enviarlo.");
    } else {
      console.log("Formulario inválido. Por favor, corrige los errores.");
      displayMissingFieldsError();
    }
  });

  // Llamada al evento click del botón send
  document.getElementById("sendButton").addEventListener("click", function() {
    // Llama a la función de validación y muestra los mensajes de error si es necesario
    if (validateForm()) {
      // Si la validación pasa, se puede enviar formulario u otras acciones
      console.log("Formulario válido. Puedes enviarlo.");
    } else {
      console.log("Formulario inválido. Por favor, corrige los errores.");
      displayMissingFieldsError();
    }
  });

  // Función para mostrar mensajes de error de campos faltantes
  function displayMissingFieldsError() {
    const missingFieldsError = document.getElementById("missingFieldsError");
    missingFieldsError.style.display = "block";
  }

  // Función para mostrar mensajes de error
  function displayError(message) {
    const errorContainer = document.getElementById("missingFieldsError");
    errorContainer.innerText = message;
  }

  // Función para reiniciar los mensajes de error
  function resetErrorMessages() {
    const errorContainer = document.getElementById("missingFieldsError");
    errorContainer.innerText = ""; //
    errorContainer.style.display = "none";
  }

  // Función validación del formulario
  function validateForm() {
    resetErrorMessages();

    // Obtiene los valores de los campos de formulario
    const cardNumber = document.getElementById("cardNumber");
    const cvc = document.getElementById("cvc");
    const amount = document.getElementById("password");
    const firstName = document.getElementById("First_Name");
    const lastName = document.getElementById("Last_Name");

    // Verifica la longitud de los campos
    if (cardNumber.value.length !== 16) {
      displayError("El campo de tarjeta debe tener exactamente 16 caracteres.");
      cardNumber.classList.add("error-field");
    } else {
      cardNumber.classList.remove("error-field");
    }

    if (cvc.value.length !== 3) {
      displayError("El campo CVC debe tener exactamente 3 caracteres.");
      cvc.classList.add("error-field");
    } else {
      cvc.classList.remove("error-field");
    }

    // Verifica si los campos son numéricos
    if (isNaN(cardNumber.value) || isNaN(cvc.value)) {
      displayError("Los campos de tarjeta y CVC deben ser numéricos.");
      cardNumber.classList.add("error-field");
      cvc.classList.add("error-field");
    } else {
      cardNumber.classList.remove("error-field");
      cvc.classList.remove("error-field");
    }

    // Verifica si el campo CVC tiene el formato correcto (numérico)
    if (!/^\d+$/.test(cvc.value)) {
      displayError("El campo CVC debe contener solo números.");
      cvc.classList.add("error-field");
      return false;
    } else {
      cvc.classList.remove("error-field");
    }

    // Verifica que Amount sea un número
    if (isNaN(amount)) {
      displayError("El campo Amount debe ser un valor numérico.");
      return false;
    }

    // Verifica que First Name y Last Name contengan solo letras y espacios
    if (!/^[A-Z]+$/.test(firstName) || !/^[A-Z]+$/.test(lastName)) {
      displayError(
        "Los campos de nombre y apellido deben contener solo letras y espacios."
      );
      return false;
    }

    // Espacio para más validaciones

    // Muestra el mensaje de error
    const errorContainer = document.getElementById("missingFieldsError");
    if (errorContainer.innerText !== "") {
      errorContainer.style.display = "block";
    }

    // Devuelve true solo si no hay errores
    return errorContainer.innerText === ""; // Se puede cambiar dependiendo de la lógica de validacion
  }
});

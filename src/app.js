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
      // Si la validación pasa, puedes enviar el formulario o realizar otras acciones aquí
      console.log("Formulario válido. Puedes enviarlo.");
    } else {
      console.log("Formulario inválido. Por favor, corrige los errores.");
    }
  });

  // Función de validación del formulario
  function validateForm() {
    // Reinicia los mensajes de error
    resetErrorMessages();

    // Obtiene los valores de los campos de tarjeta y CVC
    const cardNumber = document.getElementById("nombre").value;
    const cvc = document.getElementById("email").value;

    // Verifica si los campos están vacíos
    if (!cardNumber || !cvc) {
      displayError("Todos los campos son obligatorios.");
      return false;
    }

    // Verifica si los campos son numéricos
    if (isNaN(cardNumber) || isNaN(cvc)) {
      displayError("Los campos de tarjeta y CVC deben ser numéricos.");
      return false;
    }

    // Aquí puedes agregar más validaciones según sea necesario

    // Si la validación pasa, devuelve true
    return true;
  }

  // Función para mostrar mensajes de error
  function displayError(message) {
    const errorContainer = document.getElementById("errorContainer");
    errorContainer.innerText = message;
  }

  // Función para reiniciar los mensajes de error
  function resetErrorMessages() {
    const errorContainer = document.getElementById("errorContainer");
    errorContainer.innerText = "";
  }
});

$(document).ready(function () {
  var chatBubble = $("#chat-bubble");
  var chatContainer = $("#chat-container");

  chatBubble.click(function () {
    chatContainer.slideToggle();
    chatBubble.toggle();
  });

  $(".close-icon").click(function () {
    chatContainer.slideUp();
    chatBubble.toggle();
  });

  $("#send-btn").click(function () {
    var userInput = $("#user-input").val().trim();
    if (userInput !== "") {
      appendMessage("Cliente", userInput);

      simulateServerResponse(userInput);

      $("#user-input").val("");
    }
  });

  function simulateServerResponse(userInput) {
    var botResponse;
  
    if (userInput.toLowerCase() === "hola") {
      botResponse = "Hola, buenos días. ¿Cómo te encuentras? ¿En qué te podemos ayudar?";
    } else if (userInput.toLowerCase() === "precios") {
      botResponse = "Nuestros precios varían según el tipo y tamaño del pastel. Los pasteles pequeños comienzan en $15, los medianos en $25, y los grandes en $40. ¿Te gustaría más información sobre algún pastel en particular?";
    } else if (userInput.toLowerCase() === "historia") {
      botResponse = "Nuestra pastelería comenzó en 1995 como un pequeño negocio familiar. Con los años, hemos crecido y nos hemos convertido en una de las pastelerías más queridas de la ciudad, manteniendo siempre la calidad y el sabor tradicional.";
    } else if (userInput.toLowerCase() === "tipos de pasteles") {
      botResponse = "Ofrecemos una amplia variedad de pasteles, incluyendo pasteles de chocolate, vainilla, fresa, red velvet, y muchos más. También tenemos opciones veganas y sin gluten.";
    } else if (userInput.toLowerCase() === "direccion") {
      botResponse = "Nos encontramos en Tlalpujahua Michoacán, Calle 5 de Mayo., Num. 23, C.P 61060.";
    } else if (userInput.toLowerCase() === "horarios") {
      botResponse = "Nuestro horario de atención lo puedes validar en la sección de Dirección'";
    } else if (userInput.toLowerCase() === "contacto") {
      botResponse = "Puedes contactarnos al teléfono +52 (720) 155 6053o al correo electrónico contacto@lamonarca.com ¡Estamos aquí para ayudarte!";
    } else {
      botResponse = "Lo siento, no tengo una respuesta preparada para eso. ¿Podrías intentar preguntar de otra manera o sobre otro tema?";
    }
  
    setTimeout(function () {
      appendMessage("PasteBot", botResponse);
    }, 1000);
  }
  
  function appendMessage(sender, message) {
    var messageClass = sender === "Cliente" ? "user-message" : "bot-message";
    var messageElement =
      '<div class="message ' +
      messageClass +
      '">' +
      sender.capitalize() +
      ": " +
      message +
      "</div>";
    $("#chat-box").append(messageElement);
    $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);
  }

  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
});

function openModal() {
  const modal = document.getElementById("success");

  if (!modal) {
    alert("El modal no existe");
  } else {
    $(modal).modal("show");
  }
}
function toggleChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";

  // Hacer scroll al inicio cuando se abre el chat
  if (chatBox.style.display === "block") {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function responder(pregunta) {
  const chat = document.getElementById("chatMessages");
  const respuesta = document.createElement("div");
  respuesta.classList.add("user");
  respuesta.innerText = pregunta;
  chat.appendChild(respuesta);

  const bot = document.createElement("div");
  bot.classList.add("bot");

 if (pregunta.includes("agendar") || pregunta.includes("cita")) {
  bot.innerHTML = `
    Puedes agendar una asesoría o consultoría escribiéndome a: 
    <a href="mailto:ingenieropabloandres0@gmail.com" target="_blank">ingenieropabloandres0@gmail.com</a><br>
    O directamente por 
    <a href="https://wa.me/573217476850" target="_blank">WhatsApp aquí 📲</a>
  `;
} else if (pregunta.includes("servicios") || pregunta.includes("ofreces")) {
  bot.innerHTML = `
    👨‍💻 Servicios profesionales disponibles:<br>
    • Asesoría en Inteligencia Artificial<br>
    • Desarrollo de Landing Pages<br>
    • Desarrollo de software con Angular, .NET, Python y Azure<br>
    • Mentoría y acompañamiento educativo<br><br>
    <a href="index.html#servicios" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
      Ver más sobre servicios →
    </a>
  `;
} else if (pregunta.includes("proyectos") || pregunta.includes("portafolio")) {
  bot.innerHTML = `
    Aquí puedes explorar algunos de los proyectos más recientes que he desarrollado:<br>
    • Chatbot con LLMs y Azure<br>
    • Motor de recomendación con MLflow<br>
    • Panel Angular para aplicaciones empresariales<br><br>
    <a href="proyectos.html" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
      Ver proyectos →
    </a>
  `;
} else if (pregunta.includes("contacto") || pregunta.includes("correo")) {
  bot.innerHTML = `
    Puedes escribirme a <a href="mailto:pablo.dev.ai@gmail.com">pablo.dev.ai@gmail.com</a> o vía 
    <a href="https://www.linkedin.com/in/pabandres" target="_blank">LinkedIn</a> para colaboraciones y asesorías.
  `;
} else if (pregunta.includes("horario") || pregunta.includes("disponible")) {
  bot.innerHTML = `
    📆 Horario de atención:<br>
    Lunes a viernes de 8:00 a.m. a 6:00 p.m.<br>
    Escríbeme para reservar tu espacio. ¡Estoy para ayudarte!
  `;
} else {
  bot.innerHTML = `
    Lo siento, aún no tengo una respuesta programada para eso 😅<br>
    Puedes preguntar sobre mis servicios, proyectos, contacto o cómo agendar una cita.
  `;
}


  chat.appendChild(bot);
  chat.scrollTop = chat.scrollHeight;
}

// Cerrar el chatbot al hacer clic fuera
document.addEventListener("click", function (event) {
  const chatBox = document.getElementById("chatBox");
  const toggleButton = document.querySelector(".chatbot-toggle");

  if (
    chatBox &&
    chatBox.style.display === "block" &&
    !chatBox.contains(event.target) &&
    !toggleButton.contains(event.target)
  ) {
    chatBox.style.display = "none";
  }
});

document.getElementById('chatbot-icon').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

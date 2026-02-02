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

  // Get current language
  const currentLang = window.languageSwitcher ? window.languageSwitcher.getCurrentLanguage() : 'es';

  // Normalize question for English keywords
  const preguntaLower = pregunta.toLowerCase();

  // Sobre Pablo y experiencia
  if (preguntaLower.includes("sobre") || preguntaLower.includes("experiencia") || preguntaLower.includes("quien") || preguntaLower.includes("pablo") ||
      preguntaLower.includes("about") || preguntaLower.includes("experience") || preguntaLower.includes("who")) {
    bot.innerHTML = currentLang === 'es' ? `
      👋 Soy Pablo Andrés Muñoz, Ingeniero de Sistemas con 4+ años de experiencia en desarrollo full stack, IA y automatización.<br><br>
      🎓 Especialización en Gerencia de Proyectos e IA<br>
      📚 Maestrante en IA y Ciencias de Datos (UAO)<br><br>
      <a href="trayectoria.html" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
        Ver trayectoria completa →
      </a>
    ` : `
      👋 I'm Pablo Andrés Muñoz, Systems Engineer with 4+ years of experience in full stack development, AI, and automation.<br><br>
      🎓 Specialization in Project Management and AI<br>
      📚 Master's student in AI and Data Science (UAO)<br><br>
      <a href="trayectoria.html" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
        View full trajectory →
      </a>
    `;
  }

  // Tecnologías y stack técnico
  else if (preguntaLower.includes("tecnolog") || preguntaLower.includes("herramientas") || preguntaLower.includes("stack") || preguntaLower.includes("lenguajes") ||
           preguntaLower.includes("technology") || preguntaLower.includes("tools") || preguntaLower.includes("languages")) {
    bot.innerHTML = currentLang === 'es' ? `
      💻 Stack tecnológico:<br><br>
      <strong>Frontend:</strong> Angular 17+, HTML5, CSS3, TypeScript<br>
      <strong>Backend:</strong> .NET Core, Python (FastAPI), Node.js<br>
      <strong>IA/ML:</strong> AzureML, MLflow, HuggingFace, LangChain<br>
      <strong>Cloud:</strong> Azure, Docker, DevOps<br>
      <strong>Automatización:</strong> n8n, Power Automate<br><br>
      <a href="index.html#competencias" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
        Ver competencias técnicas →
      </a>
    ` : `
      💻 Tech stack:<br><br>
      <strong>Frontend:</strong> Angular 17+, HTML5, CSS3, TypeScript<br>
      <strong>Backend:</strong> .NET Core, Python (FastAPI), Node.js<br>
      <strong>AI/ML:</strong> AzureML, MLflow, HuggingFace, LangChain<br>
      <strong>Cloud:</strong> Azure, Docker, DevOps<br>
      <strong>Automation:</strong> n8n, Power Automate<br><br>
      <a href="index.html#competencias" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
        View technical skills →
      </a>
    `;
  }

  // Servicios
  else if (preguntaLower.includes("servicios") || preguntaLower.includes("ofreces") || preguntaLower.includes("que haces") ||
           preguntaLower.includes("services") || preguntaLower.includes("offer") || preguntaLower.includes("what do you do")) {
    bot.innerHTML = currentLang === 'es' ? `
      👨‍💻 Servicios profesionales disponibles:<br>
      • Asesoría en Inteligencia Artificial<br>
      • Desarrollo de Landing Pages<br>
      • Desarrollo de software con Angular, .NET, Python y Azure<br>
      • Mentoría y acompañamiento educativo<br><br>
      <a href="servicios.html" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
        Ver servicios detallados →
      </a>
    ` : `
      👨‍💻 Professional services available:<br>
      • Artificial Intelligence Consulting<br>
      • Landing Page Development<br>
      • Software Development with Angular, .NET, Python, and Azure<br>
      • Educational Mentoring and Coaching<br><br>
      <a href="servicios.html" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
        View detailed services →
      </a>
    `;
  }

  // Precios y presupuesto
  else if (preguntaLower.includes("precio") || preguntaLower.includes("costo") || preguntaLower.includes("presupuesto") || preguntaLower.includes("cuanto") ||
           preguntaLower.includes("price") || preguntaLower.includes("cost") || preguntaLower.includes("budget") || preguntaLower.includes("how much")) {
    bot.innerHTML = currentLang === 'es' ? `
      💰 Los precios varían según el alcance del proyecto:<br><br>
      • <strong>Landing Page:</strong> Desde $300 USD<br>
      • <strong>Asesoría IA:</strong> $80 USD/hora<br>
      • <strong>Desarrollo Software:</strong> Cotización personalizada<br>
      • <strong>Mentoría:</strong> $50 USD/sesión<br><br>
      📩 Contáctame para un presupuesto ajustado a tus necesidades.<br>
      <a href="https://wa.me/573217476850" target="_blank">WhatsApp 📲</a>
    ` : `
      💰 Pricing varies based on project scope:<br><br>
      • <strong>Landing Page:</strong> From $300 USD<br>
      • <strong>AI Consulting:</strong> $80 USD/hour<br>
      • <strong>Software Development:</strong> Custom quote<br>
      • <strong>Mentoring:</strong> $50 USD/session<br><br>
      📩 Contact me for a customized budget.<br>
      <a href="https://wa.me/573217476850" target="_blank">WhatsApp 📲</a>
    `;
  }

  // Certificaciones y educación
  else if (preguntaLower.includes("certificacion") || preguntaLower.includes("estudios") || preguntaLower.includes("formacion") || preguntaLower.includes("educacion") ||
           preguntaLower.includes("certification") || preguntaLower.includes("studies") || preguntaLower.includes("education") || preguntaLower.includes("degree")) {
    bot.innerHTML = currentLang === 'es' ? `
      🎓 Formación y certificaciones:<br><br>
      • Ingeniero de Sistemas<br>
      • Especialista en Gerencia de Proyectos<br>
      • Especialista en Inteligencia Artificial<br>
      • Maestrante en IA y Ciencias de Datos (UAO)<br>
      • Certificaciones en Azure, DevOps y metodologías ágiles<br><br>
      <a href="trayectoria.html" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
        Ver formación completa →
      </a>
    ` : `
      🎓 Education and certifications:<br><br>
      • Systems Engineer<br>
      • Specialist in Project Management<br>
      • Specialist in Artificial Intelligence<br>
      • Master's student in AI and Data Science (UAO)<br>
      • Certifications in Azure, DevOps, and agile methodologies<br><br>
      <a href="trayectoria.html" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
        View full education →
      </a>
    `;
  }

  // Metodología de trabajo
  else if (preguntaLower.includes("metodologia") || preguntaLower.includes("como trabajas") || preguntaLower.includes("proceso") || preguntaLower.includes("workflow") ||
           preguntaLower.includes("methodology") || preguntaLower.includes("how do you work") || preguntaLower.includes("process")) {
    bot.innerHTML = currentLang === 'es' ? `
      🔄 Metodología de trabajo:<br><br>
      1. <strong>Análisis inicial:</strong> Entendimiento de necesidades y objetivos<br>
      2. <strong>Propuesta técnica:</strong> Arquitectura, tecnologías y cronograma<br>
      3. <strong>Desarrollo ágil:</strong> Sprints con entregas incrementales<br>
      4. <strong>Testing y QA:</strong> Pruebas continuas y validación<br>
      5. <strong>Despliegue:</strong> CI/CD y monitoreo<br>
      6. <strong>Soporte:</strong> Acompañamiento post-entrega<br><br>
      📋 Aplicando metodologías Scrum y DevOps.
    ` : `
      🔄 Work methodology:<br><br>
      1. <strong>Initial analysis:</strong> Understanding needs and objectives<br>
      2. <strong>Technical proposal:</strong> Architecture, technologies, and timeline<br>
      3. <strong>Agile development:</strong> Sprints with incremental deliveries<br>
      4. <strong>Testing & QA:</strong> Continuous testing and validation<br>
      5. <strong>Deployment:</strong> CI/CD and monitoring<br>
      6. <strong>Support:</strong> Post-delivery assistance<br><br>
      📋 Applying Scrum and DevOps methodologies.
    `;
  }

  // Proyectos y portafolio
  else if (preguntaLower.includes("proyectos") || preguntaLower.includes("portafolio") || preguntaLower.includes("trabajos") ||
           preguntaLower.includes("projects") || preguntaLower.includes("portfolio") || preguntaLower.includes("work")) {
    bot.innerHTML = currentLang === 'es' ? `
      🚀 Proyectos destacados que he desarrollado:<br><br>
      • Chatbot con LLMs y Azure<br>
      • Motor de recomendación con MLflow<br>
      • Panel Angular para aplicaciones empresariales<br>
      • Automatización de procesos con n8n<br>
      • Sistemas de análisis de datos con Python<br><br>
      <a href="proyectos.html" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
        Ver portafolio completo →
      </a>
    ` : `
      🚀 Featured projects I've developed:<br><br>
      • Chatbot with LLMs and Azure<br>
      • Recommendation engine with MLflow<br>
      • Angular dashboard for enterprise applications<br>
      • Process automation with n8n<br>
      • Data analysis systems with Python<br><br>
      <a href="proyectos.html" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
        View full portfolio →
      </a>
    `;
  }

  // Referencias y testimonios
  else if (preguntaLower.includes("referencias") || preguntaLower.includes("testimonios") || preguntaLower.includes("clientes") || preguntaLower.includes("opiniones") ||
           preguntaLower.includes("references") || preguntaLower.includes("testimonials") || preguntaLower.includes("clients") || preguntaLower.includes("reviews")) {
    bot.innerHTML = currentLang === 'es' ? `
      ⭐ Referencias y colaboraciones:<br><br>
      He trabajado con empresas en sectores de tecnología, educación y servicios, entregando soluciones que optimizan procesos y potencian la transformación digital.<br><br>
      📧 Puedo proporcionarte referencias específicas vía email o LinkedIn según el tipo de proyecto que te interese.<br><br>
      <a href="www.linkedin.com/in/pabandres85" target="_blank">Ver perfil en LinkedIn →</a>
    ` : `
      ⭐ References and collaborations:<br><br>
      I've worked with companies in technology, education, and services sectors, delivering solutions that optimize processes and drive digital transformation.<br><br>
      📧 I can provide specific references via email or LinkedIn based on your project type.<br><br>
      <a href="www.linkedin.com/in/pabandres85" target="_blank">View LinkedIn profile →</a>
    `;
  }

  // Tiempo de respuesta y disponibilidad
  else if (preguntaLower.includes("horario") || preguntaLower.includes("disponible") || preguntaLower.includes("cuando") || preguntaLower.includes("respuesta") ||
           preguntaLower.includes("schedule") || preguntaLower.includes("available") || preguntaLower.includes("when") || preguntaLower.includes("response time")) {
    bot.innerHTML = currentLang === 'es' ? `
      📆 Horario y disponibilidad:<br><br>
      <strong>Atención:</strong> Lunes a viernes, 8:00 a.m. - 6:00 p.m. (UTC-5)<br>
      <strong>Tiempo de respuesta:</strong> 24-48 horas máximo<br>
      <strong>Reuniones:</strong> Agendables vía email o WhatsApp<br><br>
      ⚡ Para consultas urgentes, contáctame por WhatsApp.<br>
      <a href="https://wa.me/573217476850" target="_blank">WhatsApp 📲</a>
    ` : `
      📆 Schedule and availability:<br><br>
      <strong>Hours:</strong> Monday to Friday, 8:00 a.m. - 6:00 p.m. (UTC-5)<br>
      <strong>Response time:</strong> 24-48 hours maximum<br>
      <strong>Meetings:</strong> Bookable via email or WhatsApp<br><br>
      ⚡ For urgent inquiries, contact me via WhatsApp.<br>
      <a href="https://wa.me/573217476850" target="_blank">WhatsApp 📲</a>
    `;
  }

  // Agendar cita
  else if (preguntaLower.includes("agendar") || preguntaLower.includes("cita") || preguntaLower.includes("reunion") || preguntaLower.includes("consulta") ||
           preguntaLower.includes("schedule") || preguntaLower.includes("appointment") || preguntaLower.includes("meeting") || preguntaLower.includes("book")) {
    bot.innerHTML = currentLang === 'es' ? `
      📅 Agenda tu asesoría o consultoría:<br><br>
      Puedes contactarme por:<br>
      📧 Email: <a href="mailto:ingenieropabloandres0@gmail.com" target="_blank">ingenieropabloandres0@gmail.com</a><br>
      📱 WhatsApp: <a href="https://wa.me/573217476850" target="_blank">Clic aquí 📲</a><br><br>
      Te responderé en máximo 24-48 horas para coordinar fecha y hora.
    ` : `
      📅 Schedule your consultation or advisory:<br><br>
      You can contact me via:<br>
      📧 Email: <a href="mailto:ingenieropabloandres0@gmail.com" target="_blank">ingenieropabloandres0@gmail.com</a><br>
      📱 WhatsApp: <a href="https://wa.me/573217476850" target="_blank">Click here 📲</a><br><br>
      I'll respond within 24-48 hours to coordinate date and time.
    `;
  }

  // Contacto
  else if (preguntaLower.includes("contacto") || preguntaLower.includes("correo") || preguntaLower.includes("email") || preguntaLower.includes("comunicar") ||
           preguntaLower.includes("contact") || preguntaLower.includes("reach") || preguntaLower.includes("get in touch")) {
    bot.innerHTML = currentLang === 'es' ? `
      📬 Canales de contacto:<br><br>
      📧 Email principal: <a href="mailto:ingenieropabloandres0@gmail.com">ingenieropabloandres0@gmail.com</a><br>
      📧 Email alternativo: <a href="mailto:ingenieropabloandres0@gmail.com">ingenieropabloandres0@gmail.com</a><br>
      💼 LinkedIn: <a href="https://www.linkedin.com/in/pabandres85" target="_blank">pabandres85</a><br>
      📱 WhatsApp: <a href="https://wa.me/573217476850" target="_blank">+57 321 747 6850</a>
    ` : `
      📬 Contact channels:<br><br>
      📧 Primary email: <a href="mailto:ingenieropabloandres0@gmail.com">ingenieropabloandres0@gmail.com</a><br>
      📧 Alternative email: <a href="mailto:ingenieropabloandres0@gmail.com">ingenieropabloandres0@gmail.com</a><br>
      💼 LinkedIn: <a href="https://www.linkedin.com/in/pabandres85" target="_blank">pabandres85</a><br>
      📱 WhatsApp: <a href="https://wa.me/573217476850" target="_blank">+57 321 747 6850</a>
    `;
  }

  // Blog y artículos
  else if (preguntaLower.includes("blog") || preguntaLower.includes("articulos") || preguntaLower.includes("contenido") ||
           preguntaLower.includes("articles") || preguntaLower.includes("content") || preguntaLower.includes("posts")) {
    bot.innerHTML = currentLang === 'es' ? `
      📝 Blog y contenido técnico:<br><br>
      Escribo sobre tendencias en tecnología, IA, automatización y ciberseguridad.<br><br>
      Artículos recientes:<br>
      • IA Autónoma: El Futuro de la Automatización<br>
      • Ciberseguridad en la Era de la Interconexión<br><br>
      <a href="blog.html" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
        Leer artículos →
      </a>
    ` : `
      📝 Blog and technical content:<br><br>
      I write about trends in technology, AI, automation, and cybersecurity.<br><br>
      Recent articles:<br>
      • Autonomous AI: The Future of Automation<br>
      • Cybersecurity in the Interconnection Era<br><br>
      <a href="blog.html" target="_blank" style="display:inline-block; margin-top: 0.5rem; font-weight: 600; text-decoration: none; color: #333;">
        Read articles →
      </a>
    `;
  }

  // Respuesta por defecto mejorada
  else {
    bot.innerHTML = currentLang === 'es' ? `
      🤖 No tengo una respuesta específica para eso, pero puedo ayudarte con:<br><br>
      • Información <strong>sobre mí y mi experiencia</strong><br>
      • Detalles de <strong>servicios y precios</strong><br>
      • Mi <strong>stack tecnológico</strong><br>
      • <strong>Proyectos</strong> y portafolio<br>
      • <strong>Agendar una cita</strong> o consultoría<br>
      • <strong>Certificaciones</strong> y formación<br>
      • <strong>Metodología</strong> de trabajo<br><br>
      ¿Qué te gustaría saber?
    ` : `
      🤖 I don't have a specific answer for that, but I can help you with:<br><br>
      • Information <strong>about me and my experience</strong><br>
      • <strong>Services and pricing</strong> details<br>
      • My <strong>tech stack</strong><br>
      • <strong>Projects</strong> and portfolio<br>
      • <strong>Schedule an appointment</strong> or consultation<br>
      • <strong>Certifications</strong> and education<br>
      • Work <strong>methodology</strong><br><br>
      What would you like to know?
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

// Update chatbot UI based on language
function updateChatbotLanguage(lang) {
  const header = document.getElementById('chatbotHeader');
  const greeting = document.getElementById('chatbotGreeting');
  const buttons = document.querySelectorAll('#chatbotOptions button');

  if (header) {
    header.textContent = lang === 'es' ? 'Asistente Virtual' : 'Virtual Assistant';
  }

  if (greeting) {
    greeting.innerHTML = lang === 'es'
      ? '¡Hola! Soy el asistente virtual de Pablo<br> ¿En qué puedo ayudarte?💻'
      : 'Hi! I\'m Pablo\'s virtual assistant<br> How can I help you?💻';
  }

  buttons.forEach(button => {
    const textSpan = button.querySelector('.btn-text');
    const questionEs = button.getAttribute('data-es');
    const questionEn = button.getAttribute('data-en');

    if (textSpan && questionEs && questionEn) {
      const question = lang === 'es' ? questionEs : questionEn;
      textSpan.textContent = lang === 'es'
        ? button.getAttribute('data-es').replace('¿', '').replace('?', '')
        : getButtonLabel(questionEn);
      button.setAttribute('onclick', `responder('${question}')`);
    }
  });
}

// Helper function to get short button labels in English
function getButtonLabel(fullQuestion) {
  const labels = {
    'Who is Pablo?': 'About',
    'What services?': 'Services',
    'What technologies?': 'Technologies',
    'View projects': 'Projects',
    'How much does it cost?': 'Pricing',
    'How to schedule?': 'Schedule',
    'What\'s the methodology?': 'Methodology',
    'Contact information': 'Contact'
  };
  return labels[fullQuestion] || fullQuestion;
}

// Listen for language changes
if (window.languageSwitcher) {
  const originalChangeLanguage = window.languageSwitcher.changeLanguage;
  window.languageSwitcher.changeLanguage = function(lang) {
    originalChangeLanguage.call(this, lang);
    updateChatbotLanguage(lang);
  };
}

// Initialize chatbot language on load
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = window.languageSwitcher ? window.languageSwitcher.getCurrentLanguage() : 'es';
  updateChatbotLanguage(currentLang);
});

// Keep the original event listener if it exists
const chatbotIcon = document.getElementById('chatbot-icon');
if (chatbotIcon) {
  chatbotIcon.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

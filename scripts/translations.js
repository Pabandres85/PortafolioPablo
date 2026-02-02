const translations = {
  es: {
    // Header
    "nav-sobre-mi": "Sobre mí",
    "nav-competencias": "Competencias", 
    "nav-servicios": "Servicios",
    "nav-proyectos": "Proyectos",
    "nav-blog": "Blog",
    "nav-contacto": "Contacto",
    "nav-trayectoria": "Trayectoria",

    // Hero Section
    "hero-title": "Innovación, desarrollo y automatización",
    "hero-description": "Integro mi experiencia en tecnologías de vanguardia con el potencial de la inteligencia artificial y herramientas de automatización para desarrollar soluciones innovadoras, eficientes y alineadas a las necesidades del entorno digital actual.",

    // About Section
    "about-title": "Sobre mí",
    "about-description": "Ingeniero de Sistemas, especialista en Gerencia de Proyectos y en Inteligencia Artificial, con una sólida trayectoria en desarrollo de software, programación y algoritmos. Cuento con conocimientos en IA, aplicados al desarrollo de soluciones innovadoras para optimizar procesos y potenciar estrategias de negocio. Poseo experiencia en la gestión de proyectos tecnológicos mediante metodologías ágiles, así como en la optimización e implementación de soluciones disruptivas.",
    "about-button": "Ver trayectoria completa →",

    // Skills Section
    "skills-title": "Competencias",
    "skills-description-1": "Experiencia sólida en desarrollo web Full Stack empleando tecnologías como Angular, .NET Core, Python, Azure y n8n para la automatización de procesos. He desarrollado soluciones robustas e inteligentes basadas en modelos de Inteligencia Artificial, integrando arquitecturas escalables y modernas.",
    "skills-description-2": "Manejo de metodologías ágiles como Scrum y Kanban, con experiencia liderando sprints, retrospectivas y gestión de historias de usuario a través de Azure DevOps.",
    "skills-description-3": "Habilidades blandas destacadas: liderazgo colaborativo, pensamiento analítico, comunicación efectiva, autonomía y adaptabilidad al cambio continuo en entornos tecnológicos dinámicos.",

    // Services Section
    "services-title": "Servicios Profesionales",
    "service-ia-title": "Asesoría en IA",
    "service-ia-description": "Implementación y guía técnica en soluciones de inteligencia artificial personalizadas.",
    "service-ia-detail": "Te acompaño en la implementación de modelos de IA usando tecnologías como AzureML, MLflow y LLMs. Diseño soluciones personalizadas basadas en tus datos, automatizo procesos con n8n, y configuro entornos híbridos con HuggingFace o Azure para despliegue eficiente.",
    "service-ia-feature-1": "Modelos de clasificación, clustering o recomendación.",
    "service-ia-feature-2": "Automatización con agentes y flujos n8n.",
    "service-ia-feature-3": "Evaluación y mejora de modelos existentes.",
    "service-landing-title": "Landing Pages",
    "service-landing-description": "Diseño y desarrollo de páginas de aterrizaje modernas, rápidas y orientadas a conversión.",
    "service-landing-detail": "Diseño páginas de aterrizaje modernas y responsivas pensadas para capturar atención y facilitar el contacto. Especializado en páginas para profesionales, emprendimientos o portafolios técnicos con enfoque visual atractivo.",
    "service-landing-feature-1": "Diseño personalizado con foco en UX/UI.",
    "service-landing-feature-2": "Formulario de contacto, chatbot y optimización SEO básica.",
    "service-landing-feature-3": "Compatible con GitHub Pages o servidores personalizados.",
    "service-software-title": "Desarrollo de Software",
    "service-software-description": "Soluciones en Angular, .NET, Python y Azure para aplicaciones empresariales robustas.",
    "service-software-detail": "Construyo soluciones robustas con tecnologías como Angular, .NET, Python y Azure. Especializado en arquitecturas modernas, APIs RESTful, automatización de procesos e integración de sistemas.",
    "service-software-feature-1": "Front-end en Angular 17+ con diseño dinámico.",
    "service-software-feature-2": "Back-end escalables en .NET Core y FastAPI.",
    "service-software-feature-3": "Despliegue en Azure, Docker y DevOps pipelines.",
    "service-mentoria-title": "Mentoría Educativa",
    "service-mentoria-description": "Acompañamiento profesional en formación técnica, proyectos académicos y desarrollo de habilidades.",
    "service-mentoria-detail": "Brindo acompañamiento en formación técnica para estudiantes, profesionales en transición o personas que quieren aprender sobre IA, desarrollo y automatización.",
    "service-mentoria-feature-1": "Mentoría 1 a 1 o en grupo (online).",
    "service-mentoria-feature-2": "Revisión de proyectos académicos y arquitectura de código.",
    "service-mentoria-feature-3": "Material de apoyo, recursos prácticos y seguimiento continuo.",
    "service-request": "Solicitar servicio",
    "services-button": "Ver servicios completos →",

    // Projects Section
    "projects-title": "Proyectos Destacados",
    "projects-detail-title": "Proyectos en Detalle",
    "project-chatbot-title": "Chatbot Multisectorial con DeepSeek",
    "project-chatbot-stack": "Stack: Python, Streamlit, LM Studio, DeepSeek, HuggingFace",
    "project-chatbot-description": "Plataforma adaptable que permite a empresas ofrecer servicio al cliente personalizado mediante un modelo LLM alojado localmente con DeepSeek.",
    "project-chatbot-detail": "Plataforma adaptable que permite a empresas ofrecer servicio al cliente personalizado mediante un modelo LLM alojado localmente con DeepSeek. Incluye interfaz moderna con modo oscuro, analítica de conversaciones, gestión de empresas y pruebas unitarias. Desplegado en LM Studio como API local.",
    "project-health-title": "Detección de Neumonía con IA",
    "project-health-stack": "Stack: Python, Docker, Radiografías",
    "project-health-description": "Sistema inteligente para detectar neumonía en imágenes de rayos X. Incluye pruebas unitarias y despliegue con Docker.",
    "project-health-detail": "Sistema basado en inteligencia artificial para detectar neumonía en radiografías de tórax. Incluye despliegue con Docker y pruebas unitarias para asegurar fiabilidad. Desarrollado con Python y bibliotecas de procesamiento de imagen médica.",
    "project-automation-title": "Automatización Empresarial con IA",
    "project-automation-stack": "Stack: n8n, FastAPI, Streamlit, PostgreSQL",
    "project-automation-description": "Flujo inteligente con IA para automatizar procesos empresariales, clasificar solicitudes y visualizar monitoreo en tiempo real.",
    "project-automation-detail": "Proyecto integral que conecta flujos inteligentes en n8n con un backend FastAPI y visualización en Streamlit. Utiliza una base de datos PostgreSQL compartida y un modelo LLM local para clasificación automática, monitoreo y análisis de datos empresariales. Primera fase operativa: atención al cliente inteligente.",
    "project-mcp-title": "MCP_IA – IA Local con Análisis Futbolístico",
    "project-mcp-detail": "Plataforma desarrollada bajo la arquitectura Model Context Protocol (MCP), que integra un modelo LLM local ejecutado desde LM Studio con una interfaz web en Streamlit y un bot de Telegram. Permite realizar predicciones, análisis de rendimiento y visualización avanzada de datos en fútbol. Incluye panel de métricas, exportación en PDF, y lógica de conversación impulsada por contexto estructurado.",
    "project-mlflow-title": "Clasificador con TinyBERT + MLflow",
    "project-mlflow-detail": "Proyecto de clasificación de textos usando modelos TinyBERT, BERT-Mini y DistilBERT. Monitoriza métricas clave (accuracy, F1-score, precision) mediante MLflow. Evalúa rendimiento comparado en noticias usando dataset AG News.",
    "project-rio-title": "Proyecto con Ciencia de Datos: Calidad del Agua del Río Cauca en el Valle del Cauca (Colombia)",
    "project-rio-detail": "Este proyecto analiza datos públicos sobre la calidad del agua del Río Cauca, aplicando técnicas de limpieza, análisis exploratorio, visualización interactiva y modelado predictivo con inteligencia artificial. Está diseñado para funcionar tanto en entornos locales (con Docker) como en la nube mediante Streamlit Cloud.",
    "project-landing-title": "Landing Page Para Profesionales",
    "project-landing-detail": "Diseño de landing page moderna, responsive y con chatbot embebido para profesionales que quieran hacerse notar en la red. Incluye blog, formularios de contacto y enfoque en experiencia de usuario con estilo profesional.",
    "projects-button": "Ver proyectos completos →",
    "project-github": "🔗 Ver en GitHub",
    "project-streamlit": "🔗 Ver en Streamlit Cloud",

    // Blog Section
    "blog-title": "📘 Blog Técnico",
    "blog-description": "Explora entradas sobre desarrollo de software, inteligencia artificial, automatización y herramientas como Angular y Azure.",
    "blog-button": "Ir al Blog →",
    "blog-page-title": "Blog de Tecnología",
    "blog-page-subtitle": "Tendencias, análisis y reflexiones sobre el mundo digital",
    "blog-recent-articles": "Artículos Recientes",
    "blog-article-1-title": "Inteligencia Artificial Autónoma: El Futuro de la Automatización",
    "blog-article-1-summary": "Descubre cómo la IA está evolucionando hacia sistemas más autónomos y sus implicaciones.",
    "blog-article-1-content": "La inteligencia artificial (IA) está evolucionando hacia sistemas más autónomos capaces de operar con mínima intervención humana. Estos avances permiten que la IA tome decisiones en tiempo real, optimizando procesos en sectores como la logística, la medicina y las finanzas. Sin embargo, esta autonomía también plantea desafíos éticos y de privacidad que deben ser abordados para garantizar un uso responsable de la tecnología.",
    "blog-article-2-title": "Ciberseguridad en la Era de la Interconexión",
    "blog-article-2-summary": "La seguridad digital se reinventa con IA, cifrado cuántico y nuevas amenazas globales.",
    "blog-article-2-content-1": "Con la creciente interconexión de dispositivos y sistemas, la ciberseguridad se ha convertido en una prioridad. La IA desempeña un papel dual: mientras los atacantes la utilizan para lanzar ciberataques más sofisticados, los defensores emplean herramientas de IA para anticipar, identificar y mitigar amenazas en tiempo real.",
    "blog-article-2-content-2": "Además, tecnologías emergentes como el cifrado cuántico ofrecen niveles de seguridad imposibles de romper con tecnologías actuales, protegiendo infraestructuras críticas como hospitales y redes de transporte.",
    "blog-read-more": "Leer más →",
    "blog-source": "Fuente: Gartner",

    // Contact Section
    "contact-title": "Contacto",
    "contact-name": "Nombre:",
    "contact-email": "Correo:",
    "contact-message": "Mensaje:",
    "contact-send": "Enviar mensaje",
    "contact-also": "También Contactame:",

    // Footer
    "footer-text": "© 2026 Pablo Andres Muñoz - Ingeniero de Software Full Stack",

    // Stats
    "stats-experience": "Años de Experiencia",
    "stats-certifications": "Certificaciones",

    // Timeline
    "timeline-experience": "💼 Experiencia Profesional",
    "timeline-experience-desc": "He trabajado como desarrollador full stack en múltiples proyectos empresariales, integrando tecnologías como Angular, .NET, Python y Azure. Enfocado en construir soluciones robustas y seguras, aplico metodologías ágiles junto a herramientas modernas de automatización y despliegue continuo.",
    "timeline-education": "🎓 Formación Académica",
    "timeline-education-desc": "Soy Ingeniero de Sistemas, con especialización en Gerencia de Proyectos y en Inteligencia Artificial. Actualmente curso una Maestría en Inteligencia Artificial y Ciencias de Datos en la Universidad Autónoma de Occidente (UAO). Mi formación integra habilidades en programación, estructuras de datos y pensamiento estratégico, lo que me permite implementar y liderar soluciones inteligentes orientadas a la transformación digital.",
    "timeline-ai": "🤖 Automatización e IA",
    "timeline-ai-desc": "Integración y entrenamiento de modelos de inteligencia artificial en procesos empresariales, manejo de herramientas como n8n para automatización de flujos, AzureML para desarrollo y monitoreo de modelos supervisados y no supervisados. Optimización de procesos y toma de decisiones.",
    "timeline-leadership": "🚀 Liderazgo y Proyectos",
    "timeline-leadership-desc": "Liderazgo en proyectos de transformación digital y soluciones tecnológicas. Promotor de buenas prácticas DevOps, CI/CD, y metodologías ágiles. Acompaño equipos en su evolución técnica y estratégica.",

    // Page titles
    "page-title": "Pablo Andres Muñoz | Ingeniero de Software Full Stack",
    "page-title-trajectory": "Trayectoria Profesional - Pablo Andres Muñoz",
    "page-title-projects": "Proyectos - Pablo Andres Muñoz",
    "page-title-services": "Servicios - Pablo Andres Muñoz",
    "page-title-blog": "Blog - Pablo Andres Muñoz",
    "subtitle-profession": "| Ingeniero de Sistemas - Software - IA |"
  },

  en: {
    // Header
    "nav-sobre-mi": "About Me",
    "nav-competencias": "Skills",
    "nav-servicios": "Services", 
    "nav-proyectos": "Projects",
    "nav-blog": "Blog",
    "nav-contacto": "Contact",
    "nav-trayectoria": "Trajectory",

    // Hero Section
    "hero-title": "Innovation, development and automation",
    "hero-description": "I integrate my experience in cutting-edge technologies with the potential of artificial intelligence and automation tools to develop innovative, efficient solutions aligned with the needs of the current digital environment.",

    // About Section
    "about-title": "About Me",
    "about-description": "Systems Engineer, specialist in Project Management and Artificial Intelligence, with a solid background in software development, programming and algorithms. I have knowledge in AI, applied to the development of innovative solutions to optimize processes and enhance business strategies. I have experience in managing technological projects through agile methodologies, as well as in optimizing and implementing disruptive solutions.",
    "about-button": "View complete trajectory →",

    // Skills Section
    "skills-title": "Skills",
    "skills-description-1": "Solid experience in Full Stack web development using technologies such as Angular, .NET Core, Python, Azure and n8n for process automation. I have developed robust and intelligent solutions based on Artificial Intelligence models, integrating scalable and modern architectures.",
    "skills-description-2": "Management of agile methodologies such as Scrum and Kanban, with experience leading sprints, retrospectives and user story management through Azure DevOps.",
    "skills-description-3": "Outstanding soft skills: collaborative leadership, analytical thinking, effective communication, autonomy and adaptability to continuous change in dynamic technological environments.",

    // Services Section
    "services-title": "Professional Services",
    "service-ia-title": "AI Consulting",
    "service-ia-description": "Implementation and technical guidance in personalized artificial intelligence solutions.",
    "service-ia-detail": "I accompany you in the implementation of AI models using technologies such as AzureML, MLflow and LLMs. I design customized solutions based on your data, automate processes with n8n, and configure hybrid environments with HuggingFace or Azure for efficient deployment.",
    "service-ia-feature-1": "Classification, clustering or recommendation models.",
    "service-ia-feature-2": "Automation with agents and n8n flows.",
    "service-ia-feature-3": "Evaluation and improvement of existing models.",
    "service-landing-title": "Landing Pages",
    "service-landing-description": "Design and development of modern, fast and conversion-oriented landing pages.",
    "service-landing-detail": "I design modern and responsive landing pages designed to capture attention and facilitate contact. Specialized in pages for professionals, entrepreneurs or technical portfolios with attractive visual focus.",
    "service-landing-feature-1": "Custom design with focus on UX/UI.",
    "service-landing-feature-2": "Contact form, chatbot and basic SEO optimization.",
    "service-landing-feature-3": "Compatible with GitHub Pages or custom servers.",
    "service-software-title": "Software Development",
    "service-software-description": "Solutions in Angular, .NET, Python and Azure for robust enterprise applications.",
    "service-software-detail": "I build robust solutions with technologies such as Angular, .NET, Python and Azure. Specialized in modern architectures, RESTful APIs, process automation and system integration.",
    "service-software-feature-1": "Front-end in Angular 17+ with dynamic design.",
    "service-software-feature-2": "Scalable back-end in .NET Core and FastAPI.",
    "service-software-feature-3": "Deployment in Azure, Docker and DevOps pipelines.",
    "service-mentoria-title": "Educational Mentoring",
    "service-mentoria-description": "Professional accompaniment in technical training, academic projects and skills development.",
    "service-mentoria-detail": "I provide technical training support for students, professionals in transition or people who want to learn about AI, development and automation.",
    "service-mentoria-feature-1": "1-on-1 or group mentoring (online).",
    "service-mentoria-feature-2": "Review of academic projects and code architecture.",
    "service-mentoria-feature-3": "Support material, practical resources and continuous follow-up.",
    "service-request": "Request service",
    "services-button": "View complete services →",

    // Projects Section
    "projects-title": "Featured Projects",
    "projects-detail-title": "Projects in Detail",
    "project-chatbot-title": "Multi-sector Chatbot with DeepSeek",
    "project-chatbot-stack": "Stack: Python, Streamlit, LM Studio, DeepSeek, HuggingFace",
    "project-chatbot-description": "Adaptable platform that allows companies to offer personalized customer service through a locally hosted LLM model with DeepSeek.",
    "project-chatbot-detail": "Adaptable platform that allows companies to offer personalized customer service through a locally hosted LLM model with DeepSeek. Includes modern interface with dark mode, conversation analytics, company management and unit tests. Deployed in LM Studio as local API.",
    "project-health-title": "Pneumonia Detection with AI",
    "project-health-stack": "Stack: Python, Docker, X-rays",
    "project-health-description": "Intelligent system to detect pneumonia in X-ray images. Includes unit tests and Docker deployment.",
    "project-health-detail": "AI-based system to detect pneumonia in chest X-rays. Includes Docker deployment and unit tests to ensure reliability. Developed with Python and medical image processing libraries.",
    "project-automation-title": "Business Automation with AI",
    "project-automation-stack": "Stack: n8n, FastAPI, Streamlit, PostgreSQL",
    "project-automation-description": "Intelligent flow with AI to automate business processes, classify requests and visualize real-time monitoring.",
    "project-automation-detail": "Comprehensive project that connects intelligent flows in n8n with a FastAPI backend and Streamlit visualization. Uses a shared PostgreSQL database and a local LLM model for automatic classification, monitoring and analysis of business data. First operational phase: intelligent customer service.",
    "project-mcp-title": "MCP_IA – Local AI with Football Analysis",
    "project-mcp-detail": "Platform developed under the Model Context Protocol (MCP) architecture, which integrates a local LLM model run from LM Studio with a Streamlit web interface and a Telegram bot. Allows predictions, performance analysis and advanced data visualization in football. Includes metrics panel, PDF export, and conversation logic driven by structured context.",
    "project-mlflow-title": "Classifier with TinyBERT + MLflow",
    "project-mlflow-detail": "Text classification project using TinyBERT, BERT-Mini and DistilBERT models. Monitors key metrics (accuracy, F1-score, precision) through MLflow. Evaluates comparative performance in news using AG News dataset.",
    "project-rio-title": "Data Science Project: Water Quality of the Cauca River in Valle del Cauca (Colombia)",
    "project-rio-detail": "This project analyzes public data on the water quality of the Cauca River, applying cleaning techniques, exploratory analysis, interactive visualization and predictive modeling with artificial intelligence. It is designed to work both in local environments (with Docker) and in the cloud through Streamlit Cloud.",
    "project-landing-title": "Landing Page for Professionals",
    "project-landing-detail": "Modern, responsive landing page design with embedded chatbot for professionals who want to stand out online. Includes blog, contact forms and focus on user experience with professional style.",
    "projects-button": "View complete projects →",
    "project-github": "🔗 View on GitHub",
    "project-streamlit": "🔗 View on Streamlit Cloud",

    // Blog Section
    "blog-title": "📘 Technical Blog",
    "blog-description": "Explore entries about software development, artificial intelligence, automation and tools like Angular and Azure.",
    "blog-button": "Go to Blog →",
    "blog-page-title": "Technology Blog",
    "blog-page-subtitle": "Trends, analysis and reflections on the digital world",
    "blog-recent-articles": "Recent Articles",
    "blog-article-1-title": "Autonomous Artificial Intelligence: The Future of Automation",
    "blog-article-1-summary": "Discover how AI is evolving towards more autonomous systems and their implications.",
    "blog-article-1-content": "Artificial intelligence (AI) is evolving towards more autonomous systems capable of operating with minimal human intervention. These advances allow AI to make decisions in real time, optimizing processes in sectors such as logistics, medicine and finance. However, this autonomy also poses ethical and privacy challenges that must be addressed to ensure responsible use of technology.",
    "blog-article-2-title": "Cybersecurity in the Era of Interconnection",
    "blog-article-2-summary": "Digital security is reinvented with AI, quantum encryption and new global threats.",
    "blog-article-2-content-1": "With the increasing interconnection of devices and systems, cybersecurity has become a priority. AI plays a dual role: while attackers use it to launch more sophisticated cyberattacks, defenders use AI tools to anticipate, identify and mitigate threats in real time.",
    "blog-article-2-content-2": "In addition, emerging technologies such as quantum encryption offer levels of security impossible to break with current technologies, protecting critical infrastructures such as hospitals and transportation networks.",
    "blog-read-more": "Read more →",
    "blog-source": "Source: Gartner",

    // Contact Section
    "contact-title": "Contact",
    "contact-name": "Name:",
    "contact-email": "Email:",
    "contact-message": "Message:",
    "contact-send": "Send message",
    "contact-also": "Also Contact Me:",

    // Footer
    "footer-text": "© 2026 Pablo Andres Muñoz - Full Stack Software Engineer",

    // Stats
    "stats-experience": "Years of Experience",
    "stats-certifications": "Certifications",

    // Timeline
    "timeline-experience": "💼 Professional Experience",
    "timeline-experience-desc": "I have worked as a full stack developer in multiple business projects, integrating technologies such as Angular, .NET, Python and Azure. Focused on building robust and secure solutions, I apply agile methodologies along with modern automation and continuous deployment tools.",
    "timeline-education": "🎓 Academic Training",
    "timeline-education-desc": "I am a Systems Engineer, with specialization in Project Management and Artificial Intelligence. I am currently pursuing a Master's degree in Artificial Intelligence and Data Science at the Universidad Autónoma de Occidente (UAO). My training integrates programming skills, data structures and strategic thinking, which allows me to implement and lead intelligent solutions oriented to digital transformation.",
    "timeline-ai": "🤖 Automation and AI",
    "timeline-ai-desc": "Integration and training of artificial intelligence models in business processes, handling tools such as n8n for flow automation, AzureML for development and monitoring of supervised and unsupervised models. Process optimization and decision making.",
    "timeline-leadership": "🚀 Leadership and Projects",
    "timeline-leadership-desc": "Leadership in digital transformation projects and technological solutions. Promoter of DevOps best practices, CI/CD, and agile methodologies. I accompany teams in their technical and strategic evolution.",

    // Page titles
    "page-title": "Pablo Andres Muñoz | Full Stack Software Engineer",
    "page-title-trajectory": "Professional Trajectory - Pablo Andres Muñoz",
    "page-title-projects": "Projects - Pablo Andres Muñoz",
    "page-title-services": "Services - Pablo Andres Muñoz",
    "page-title-blog": "Blog - Pablo Andres Muñoz",
    "subtitle-profession": "| Systems Engineer - Software - AI |"
  }
}; 
// Language switcher functionality
let currentLanguage = 'es'; // Default language

// Function to change language
function changeLanguage(lang) {
  currentLanguage = lang;
  
  // Update all elements with data-translate attribute
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update page title
  const pageTitle = document.querySelector('title');
  if (pageTitle) {
    const titleKey = getPageTitleKey();
    if (translations[lang] && translations[lang][titleKey]) {
      pageTitle.textContent = translations[lang][titleKey];
    }
  }

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    const descKey = getMetaDescriptionKey();
    if (translations[lang] && translations[lang][descKey]) {
      metaDescription.setAttribute('content', translations[lang][descKey]);
    }
  }

  // Update form placeholders
  updateFormPlaceholders(lang);

  // Save language preference
  localStorage.setItem('preferred-language', lang);

  // Update language switcher button
  updateLanguageSwitcher(lang);
}

// Function to get page title key based on current page
function getPageTitleKey() {
  const path = window.location.pathname;
  if (path.includes('trayectoria')) return 'page-title-trajectory';
  if (path.includes('proyectos')) return 'page-title-projects';
  if (path.includes('servicios')) return 'page-title-services';
  if (path.includes('blog')) return 'page-title-blog';
  return 'page-title';
}

// Function to get meta description key based on current page
function getMetaDescriptionKey() {
  const path = window.location.pathname;
  if (path.includes('trayectoria')) return 'meta-description-trajectory';
  if (path.includes('proyectos')) return 'meta-description-projects';
  if (path.includes('servicios')) return 'meta-description-services';
  if (path.includes('blog')) return 'meta-description-blog';
  return 'meta-description';
}

// Function to update form placeholders
function updateFormPlaceholders(lang) {
  const nameInput = document.getElementById('nombre');
  const emailInput = document.getElementById('correo');
  const messageTextarea = document.getElementById('mensaje');

  if (nameInput) {
    nameInput.placeholder = lang === 'es' ? 'Tu nombre' : 'Your name';
  }
  if (emailInput) {
    emailInput.placeholder = lang === 'es' ? 'tu@email.com' : 'your@email.com';
  }
  if (messageTextarea) {
    messageTextarea.placeholder = lang === 'es' ? 'Tu mensaje...' : 'Your message...';
  }
}

// Function to update language switcher button
function updateLanguageSwitcher(lang) {
  const switcher = document.getElementById('language-switcher');
  const langText = document.getElementById('lang-text');
  if (switcher) {
    if (langText) langText.textContent = lang === 'es' ? 'EN' : 'ES';
    switcher.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
  }
}

// Function to initialize language
function initializeLanguage() {
  // Check for saved language preference
  const savedLanguage = localStorage.getItem('preferred-language');
  if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
    currentLanguage = savedLanguage;
  } else {
    // Check browser language
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) {
      currentLanguage = 'en';
    }
  }

  // Apply initial language
  changeLanguage(currentLanguage);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeLanguage();
});

// Export for use in other scripts
window.languageSwitcher = {
  changeLanguage: changeLanguage,
  getCurrentLanguage: () => currentLanguage
}; 
// Configuración de partículas conectadas para el fondo
// Colores adaptados a la paleta monocromática del portafolio

const particlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#666666" // Gris medio para las partículas
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#888888", // Gris para las líneas de conexión
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
};

// Función para inicializar las partículas
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', particlesConfig);
  }
}

// Ajustar cantidad de partículas según el tamaño de pantalla
function adjustParticlesForMobile() {
  if (window.innerWidth < 768) {
    particlesConfig.particles.number.value = 40; // Menos partículas en móvil
    particlesConfig.particles.line_linked.distance = 100; // Menor distancia de conexión
  } else if (window.innerWidth < 1024) {
    particlesConfig.particles.number.value = 60; // Cantidad media para tablets
    particlesConfig.particles.line_linked.distance = 120;
  }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  adjustParticlesForMobile();
  initParticles();
});

// Reajustar al cambiar tamaño de ventana
window.addEventListener('resize', function() {
  adjustParticlesForMobile();
  if (typeof pJSDom !== 'undefined' && pJSDom[0]) {
    pJSDom[0].pJS.fn.particlesRefresh();
  }
});

// Configuración de partículas para el header (fondo oscuro)
// Partículas más claras para contrastar con el fondo oscuro del header

const headerParticlesConfig = {
  particles: {
    number: {
      value: 50, // Menos partículas que el fondo para que sea más sutil
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff" // Partículas blancas/claras para contrastar
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.3, // Más sutiles
      random: true,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.5,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#bbbbbb", // Líneas grises claras
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5, // Movimiento más lento y sutil
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false
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
        distance: 100,
        line_linked: {
          opacity: 0.5
        }
      },
      push: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

// Función para inicializar las partículas del header
function initHeaderParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('header-particles-js', headerParticlesConfig);
  }
}

// Ajustar cantidad de partículas del header según el tamaño de pantalla
function adjustHeaderParticlesForMobile() {
  if (window.innerWidth < 768) {
    headerParticlesConfig.particles.number.value = 25; // Menos partículas en móvil
    headerParticlesConfig.particles.line_linked.distance = 80;
  } else if (window.innerWidth < 1024) {
    headerParticlesConfig.particles.number.value = 35; // Cantidad media para tablets
    headerParticlesConfig.particles.line_linked.distance = 100;
  }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  // Esperar un poco para asegurar que particles.js esté cargado
  setTimeout(function() {
    adjustHeaderParticlesForMobile();
    initHeaderParticles();
  }, 100);
});

// Reajustar al cambiar tamaño de ventana
window.addEventListener('resize', function() {
  adjustHeaderParticlesForMobile();
  if (typeof pJSDom !== 'undefined' && pJSDom[1]) {
    pJSDom[1].pJS.fn.particlesRefresh();
  }
});

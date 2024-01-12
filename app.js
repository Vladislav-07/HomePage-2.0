let particlesNumber = 150
let width = window.innerWidth

if (width <= 1200) {
  particlesNumber = 100
}

if (width <= 700) {
  particlesNumber = 75
}

if (width <= 500) {
  particlesNumber = 55
}

if (width <= 320) {
  particlesNumber = 40
}


tsParticles.load("tsparticles", {
  fpsLimit: 60,
  bacgroundMode: {
    enable: true,
    zIndex: 0,
  },
  particles: {
    number: {
      value: particlesNumber,
      density: {
        enable: false, 
        area: 1000,
      }
    },
    color: {
      value: "#ff2828"
    },

    shape: {
      type: "circle",
      options: {
        polygon: {
          sides: 5,
        },

        image: {
          src: "",
          width: 100,
          height: 100
        }
      }
    },
    stroke: {
      width: 0
    },
    opacity: {
      value: 1,
      random: false,
      animation: {
        enable: false,
        speed: 3,
        minimumValue: 0.1,
        sync: false,
      }
    },

    size: {
      value: 3.5,
      minimumValue: 2.5,
      randum: true,
      animation: {
        enable: false,
        speed: 20,
        minimumValue: 1,
        sync: false,
      }
    },
    links: {
      enable: true,
      distance: 100,
      color: "random",
      blink: false,
      consent: false,
      opacity: 0.5,
      width: 2,
      triangles: {
        enable: false,
        opacity: 0.05,
      }
    },

    move: {
      wrap: true,
      enable: true,
      speed: 1,
      random: false,
      straight: false,
      straight: false,
      outMode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: false,
        mode: ""
      },
      onClick: {
        enable: false,
        mode: ""
      },
      resize: true
    },

    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1
        }
      },
      connect: {
        radius: 1000,
      },

      bubble: {
        distance: 400, 
        size: 40,  
        duration: 2,
        opacity: 0.8,
      },
      repulse: {
        distance: 50,
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      }
    }
  },

  detectRetina: true,
  background:{
    color: "rgb(17, 17, 19)",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  }
})



// particlesJS('particles-js',
  
//   {
//     "particles": {
//       "number": {
//         "value": 100,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ff2828"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 3,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#ff2828",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 2,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": false,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": false,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 2
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//     }

// );
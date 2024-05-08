import Palette from '../util/theme/Palette'


export const particleOptions = {
  autoplay: true,
  fpsLimit: 120,
  fullscreen: {
    enable: true,
  },
  background:{
    'z-index': -10,
  },
  fullScreen: {
    "enable": true,
    "z-index": -10
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        // mode: ["repulse", "light"]
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      push: {
        quantity: 4
      },
      repulse: {
        distance: 400,
        duration: 0.7,
        factor: 1,
        speed: 1,
        easing: "ease-out-cubic",
      },
      // light: {
      //   area: {
      //     gradient: {
      //       start: {
      //         value: "#ffffff"
      //       },
      //       stop: {
      //         value: "#000000"
      //       },
      //       radius: 1000,
      //     }
      //   },
      //   shadow: {
      //     color: {
      //       value: "#000000",
      //     },
      //     length: 0, 
      //   }
      // }
    }
  },
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        area: 1000
      }
    },
    color: {
      value: [Palette.monoBluePalette['dark-blue'][500]]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: { min: 1, max: 3 }
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: false,
      straight: false,
      outModes: "out"
    },
    twinkle: {
      particles: {
        "enable": true,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    repulse: {
      enabled : true,
    },
    light:{
      enabled: true,
    }
  },
  detectRetina: true,
}



export default particleOptions;
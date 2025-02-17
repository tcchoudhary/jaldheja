// ========= Process
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let paragraphs = [...document.querySelectorAll('.process_desgin .text--text')];
let spans = [];

paragraphs.forEach(paragraph => {
  let htmlString = '';
  let pArray = paragraph.textContent.split('');
  for (let i = 0; i < pArray.length; i++) {
      htmlString += `<span>${pArray[i]}</span>`;
  }
  paragraph.innerHTML = htmlString;
})

spans = [...document.querySelectorAll('.process_desgin .text--text span')];
function revealSpans() {
  const viewportCenter = window.innerHeight / 2;

  spans.forEach(span => {
      const spanRect = span.getBoundingClientRect();
      const spanCenter = (spanRect.top + spanRect.bottom) / 2;

      if (spanCenter > viewportCenter) {
          const distanceToCenter = spanCenter - viewportCenter;
          const opacityValue = 1 - (distanceToCenter * 0.01);

          span.style.opacity = Math.max(0.1, opacityValue.toFixed(3));
      } else {
          span.style.opacity = 1;
      }
  });
}

window.addEventListener('scroll', revealSpans);
revealSpans();

// =========================

let scrollUp = document.querySelector('.headerNavbar');

ScrollTrigger.create({
  start: 'top -50',
  end: 99999,
  // markers: true,
  toggleClass: { className: 'jwpnavbar--scrolled', targets: '.headerNavbar' }
});

ScrollTrigger.create({
  start: 'top -300',
  end: 99999,
  toggleClass: { className: 'jwpnavbar--up', targets: '.headerNavbar' },
  onUpdate: ({ direction }) => {
    if (direction == -1) {
      scrollUp.classList.remove('jwpnavbar--up');
    } else {
      scrollUp.classList.add('jwpnavbar--up');
    }
  }
});


// ================================

const sections = gsap.utils.toArray('.inner_wraper');

sections.forEach(section => {
  gsap.to(section, {
    opacity: 0,
    scale: 0.8,
    y: -200,
    scrollTrigger: {
      trigger: section,
      scrub: true,
      start: "bottom bottom",
      pin: true,
      pinSpacing: false,
    }
  })
})


gsap.from(".lineShape", {
  scrollTrigger: {
    trigger: ".lineShape",
    scrub: 1,
    start: "top bottom",
    end: "top top"
  },
  x: 100,
  transformOrigin: "right center",
  ease: "none"
});



// let titleOne = new SplitText(".hero__title");
// let oneWords = titleOne.lines;

// gsap.from(oneWords, {
//   opacity: 0,
//   duration: 1.5,
//   y: 80,
//   ease: "power4",
//   stagger: {
//     each: 0.15
//   },
//   scrollTrigger: {
//     toggleActions: "restart pause resume reset"
//   }
// });

// gsap.config({ trialWarn: false });
// console.clear();
// gsap.registerPlugin(SplitText);
// // const split = new SplitText(".titleGreathorned", { type: "lines" });

// split.lines.forEach((target) => {
//   gsap.to(target, {
//     backgroundPositionX: 0,
//     ease: "none",
//     duration: 2, // Adjust the duration as needed
//     scrollTrigger: {
//       toggleActions: "restart pause resume reset"
//     }
//   });
// });


gsap.to(".leftMove", {
  xPercent: -10,
  scrollTrigger: {
    trigger: ".leftMove",
    start: "bottom bottom",
    // pin: true,
    scrub: 0.5
  }
});
gsap.to(".rightMove", {
  xPercent: 10,
  scrollTrigger: {
    trigger: ".rightMove",
    start: "20% bottom",
    // pin: true,
    scrub: 0.5
  }
});

const processSection = gsap.utils.toArray('.inner_pd .imagexIcon');

processSection.forEach(section => {
  gsap.to(section, {
    scale: .9,
    scrollTrigger: {
      trigger: ".process_desgin",
      scrub: .5,
      start: "50% bottom",
      end: "50% top",
      // markers: true
    }
  })
})



let text = gsap.utils.toArray(".revealer-text");
text.forEach((el, i) => {
  gsap.from(el, {
    yPercent: 120,
    duration: .6,
    scrollTrigger: {
      trigger: el,
      start: "bottom bottom",
      end: "top top",
      toggleActions: "restart none none reset"
    }
  });
});


// =========================

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      // markers: true,
      onEnter: function () { animateFrom(elem) },
      // onEnterBack: function () { animateFrom(elem, -1) },
      // onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});


// ============================

gsap.registerPlugin(ScrollTrigger);

const Marquee = function (el, dir, canReverse) {
  this.el = el;

  let direction = dir ? dir : 1; // 1 = forward, -1 = backward scroll
  console.log(direction)

  this.tl = (el, settings, reverse) => {
    if (!canReverse) reverse = false;

    const tl = gsap.timeline({
      repeat: -1,
      onReverseComplete() {
        this.totalTime(this.rawTime() + this.duration() * 10);
      }
    });

    settings = settings || {};
    settings.ease || (settings.ease = 'none');

    let clone = el.cloneNode(true);
    let clone2 = el.cloneNode(true);
    let clone3 = el.cloneNode(true);
    let clone4 = el.cloneNode(true);
    let clone5 = el.cloneNode(true);
    el.parentNode.appendChild(clone);
    el.parentNode.appendChild(clone2);
    el.parentNode.appendChild(clone3);
    el.parentNode.appendChild(clone4);
    el.parentNode.appendChild(clone5);

    tl.to([el, clone, clone2, clone3, clone4, clone5], {
      xPercent: reverse ? 100 * direction : -100 * direction, ...settings
    }, 0);

    return tl;
  };

  const anim = this.tl(this.el, { duration: 15 });

  this.init = () => {
    ScrollTrigger.create({
      onUpdate(self) {
        if (self.direction !== direction) {
          if (canReverse) direction *= -1;
          gsap.to(anim, {
            timeScale: direction,
            overwrite: true
          });
        }
      }
    });
  };

  this.pause = () => {
    anim.pause();
  };

  this.resume = () => {
    anim.resume();
  };
}


const wrappers = document.querySelectorAll('.marquee__wrapper');

wrappers.forEach((wrapper) => {
  const inner = wrapper.querySelector('.marquee__inner');
  const el = wrapper.querySelector('.marquee');
  const direction = (el.dataset.direction == 'right') ? -1 : 1;

  const marquee = new Marquee(el, direction, true);

  marquee.init();

  ScrollTrigger.create({
    trigger: wrapper,
    // onEnter: () => marquee.resume(),
    // onLeave: () => marquee.pause(),
    // onEnterBack: () => marquee.resume(),
    // onLeaveBack: () => marquee.pause(),
    animation: gsap.to(inner, { x: direction * -1000 }),
    scrub: true,
  });
});

// ======================
let images = gsap.utils.toArray(".reveal-img");
images.forEach((el) => {
  gsap.from(el, {
    // opacity: 0,
    yPercent: 10,
    scale: 1.2,
    duration: 1.5,
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      //markers: true,
      toggleActions: "restart pause resume pause"
    }
  });
});


// ========================

gsap.to(".career .leftMove", {
  xPercent: -10,
  scrollTrigger: {
    trigger: ".career .leftMove",
    start: "bottom bottom",
    // pin: true,
    scrub: 0.5
  }
});
gsap.to(".career .rightMove", {
  xPercent: 10,
  scrollTrigger: {
    trigger: ".career .rightMove",
    start: "20% bottom",
    // pin: true,
    scrub: 0.5
  }
});


// =============================================

//Change width and time on your desire

initMarquee(190, 27)

function initMarquee(boxWidth, time) {
  const boxElement = $('.marquee__part');
  const boxLength = boxElement.length;
  const wrapperWidth = boxWidth * boxLength;
  const windowWidth = $(window).width();

  boxElement.parent().css('left', '-' + boxWidth + 'px');
  boxElement.css('width', boxWidth + 'px');

  gsap.set(".marquee__part", {
    x: (i) => i * boxWidth
  });

  gsap.to(".marquee__part", {
    duration: time,
    ease: "none",
    x: "-=" + wrapperWidth,
    modifiers: {
      x: gsap.utils.unitize(
        function (x) {
          return parseFloat(x + windowWidth + boxWidth) % wrapperWidth
        }
      )
    },
    repeat: -1
  });

}

// ===========================
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// // create the smooth scroller FIRST!
// const smoother = ScrollSmoother.create({
//   content: "#scrollsmoother-container",
//   smooth: 1.5,
//   normalizeScroll: true,
//   ignoreMobileResize: true,
//   effects: true,
//   //preventDefault: true,
//   //ease: 'power4.out',
//   //smoothTouch: 0.1, 
// });




// ===========================
const cursor = document.querySelector(".cb-cursor");
window.onpointermove = event => {
  const { clientX, clientY } = event;
  cursor.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" })
}
const elements = [...document.querySelectorAll(".case a")]
elements.map(element => {
  element.onmouseover = () => {
    cursor.classList.add("-video")
  }
  element.onmouseout = () => {
    cursor.classList.remove("-video")
  }
})

// =====================

gsap.to(".form_wrapper", {
  ease: "none",
  scrollTrigger: {
    trigger: ".contact_info",
    scrub: 1,
    pin: true,
    // end: "+=10",
  },
});

// -----



// =========================== parallax background ===========================

gsap.registerEffect({
  name: "zoom",
  effect: (targets, config) => {
    const vars = { transformOrigin: "0px 0px", ...config },
      { scale, origin } = config,
      clamp = gsap.utils.clamp(-100 * (scale - 1), 0);
    delete vars.origin;
    vars.xPercent = clamp((0.5 - origin[0] * scale) * 100);
    vars.yPercent = clamp((0.5 - origin[1] * scale) * 100);
    vars.overwrite = "auto";
    return gsap.to(targets, vars);
  },
  extendTimeline: true,
  defaults: { origin: [0.5, 0.5], scale: 2 }
});


gsap.utils.toArray(".banner_img").forEach((bannerSection, index) => {
  ScrollTrigger.create({
    trigger: bannerSection,
    start: "center 100%",
    end: "+=100%",
    onToggle(self) {
      if (self.isActive) { // if it enters forward or backward
        gsap.effects.zoom(".banner_img .inner_image", {
          scale: 1.1,
          // origin: zoom.origin,
          duration: 1.5,
          ease: "power1.inOut"
        });
      }
    }
  });
});


// =======================
$(window).on('beforeunload', function () {
  $(window).scrollTop(0);
});


// ============================== Three js Image effect 
// variables
const imageContainer = document.getElementById("imageContainer");
const imageElement = document.getElementById("myImage");

let easeFactor = 0.02;
let scene, camera, renderer, planeMesh;
let mousePosition = { x: 0.5, y: 0.5 };
let targetMousePosition = { x: 0.5, y: 0.5 };
let mouseStopTimeout;
let aberrationIntensity = 0.0;
let lastPosition = { x: 0.5, y: 0.5 };
let prevPosition = { x: 0.5, y: 0.5 };

// shaders
const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    varying vec2 vUv;
    uniform sampler2D u_texture;    
    uniform vec2 u_mouse;
    uniform vec2 u_prevMouse;
    uniform float u_aberrationIntensity;

    void main() {
        vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
        vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
        
        vec2 mouseDirection = u_mouse - u_prevMouse;
        
        vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
        float pixelDistanceToMouse = length(pixelToMouseDirection);
        float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);
 
        vec2 uvOffset = strength * - mouseDirection * 0.2;
        vec2 uv = vUv - uvOffset;

        vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
        vec4 colorG = texture2D(u_texture, uv);
        vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

        gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
    }
`;

function initializeScene(texture) {
  //   scene creation
  scene = new THREE.Scene();

  // camera setup
  camera = new THREE.PerspectiveCamera(
    80,
    imageElement.offsetWidth / imageElement.offsetHeight,
    0.01,
    10
  );
  camera.position.z = 1;

  //   uniforms
  let shaderUniforms = {
    u_mouse: { type: "v2", value: new THREE.Vector2() },
    u_prevMouse: { type: "v2", value: new THREE.Vector2() },
    u_aberrationIntensity: { type: "f", value: 0.0 },
    u_texture: { type: "t", value: texture }
  };

  //   creating a plane mesh with materials
  planeMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.ShaderMaterial({
      uniforms: shaderUniforms,
      vertexShader,
      fragmentShader
    })
  );

  //   add mesh to scene
  scene.add(planeMesh);

  //   render
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(imageElement.offsetWidth, imageElement.offsetHeight);

  //   create a canvas
  imageContainer.appendChild(renderer.domElement);
}

// use the existing image from html in the canvas
initializeScene(new THREE.TextureLoader().load(imageElement.src));

animateScene();

function animateScene() {
  requestAnimationFrame(animateScene);

  mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
  mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

  planeMesh.material.uniforms.u_mouse.value.set(
    mousePosition.x,
    1.0 - mousePosition.y
  );

  planeMesh.material.uniforms.u_prevMouse.value.set(
    prevPosition.x,
    1.0 - prevPosition.y
  );

  aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);

  planeMesh.material.uniforms.u_aberrationIntensity.value = aberrationIntensity;

  renderer.render(scene, camera);
}

// event listeners
imageContainer.addEventListener("mousemove", handleMouseMove);
imageContainer.addEventListener("mouseenter", handleMouseEnter);
imageContainer.addEventListener("mouseleave", handleMouseLeave);

function handleMouseMove(event) {
  easeFactor = 0.02;
  let rect = imageContainer.getBoundingClientRect();
  prevPosition = { ...targetMousePosition };

  targetMousePosition.x = (event.clientX - rect.left) / rect.width;
  targetMousePosition.y = (event.clientY - rect.top) / rect.height;

  aberrationIntensity = 1;
}

function handleMouseEnter(event) {
  easeFactor = 0.02;
  let rect = imageContainer.getBoundingClientRect();

  mousePosition.x = targetMousePosition.x = (event.clientX - rect.left) / rect.width;
  mousePosition.y = targetMousePosition.y = (event.clientY - rect.top) / rect.height;
}

function handleMouseLeave() {
  easeFactor = 0.05;
  targetMousePosition = { ...prevPosition };
}



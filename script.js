const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll('a');
const body = document.body;
const perguntas = document.querySelectorAll(".faq-question");
let control = 0;

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (control == 0){
        body.classList.add("no-scroll");
        control = 1;
    } else {
        body.classList.remove("no-scroll");
        control = 0;
    }
});
links.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.remove("no-scroll");
        navLinks.classList.remove("active");
        control = 0;
    });
});        
perguntas.forEach((btn) => {
    btn.addEventListener("click", () => {
        const resposta = btn.nextElementSibling;
  const isOpen = resposta.style.display === "block";

        document.querySelectorAll(".faq-answer").forEach((ans) => ans.style.display = "none");

        if (!isOpen) {
            resposta.style.display = "block";
        }
    });
});                 

gsap.registerPlugin(ScrollTrigger);
gsap.set(".h2", { opacity: 0, y: 50 });
gsap.utils.toArray(".h2").forEach((elemento) => {
    gsap.to(elemento, {
      scrollTrigger: {
        trigger: elemento,
        start: "top 80%",
        toggleActions: "play none none none"          
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.in"
    });
});
gsap.from(".p", {
    scrollTrigger: {
      trigger: ".text",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power4.in"
});
gsap.from(".bt", {
    scrollTrigger: {
      trigger: ".text",     
      start: "top bottom",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: 100,
    duration: 1.3,
    ease: "power4.in"
  });
gsap.set(".anim-text", { opacity: 0, y: 30 });
gsap.utils.toArray(".anim-text").forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 70%",    
        end: "top 40%",      
        scrub: true,         
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "none"
    });
});


document.addEventListener("DOMContentLoaded", (event) => {   
  gsap.registerPlugin(ScrollTrigger)
  const areas = gsap.utils.toArray('.area')
  areas.forEach(area => {
    gsap.to(area,{
      scale: 0.9,
      duration: 2,
      scrollTrigger:{
        trigger: area,
        start: '40% top',
        end:'bottom top',
        scrub: true
      }
    })
  })

});

document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('toggleGaleria');
  const galeria = document.querySelector('.list');

  if (botao && galeria) {
      botao.addEventListener('click', () => {
          galeria.classList.toggle('expandido');
          galeria.classList.toggle('escondido');

          botao.textContent = galeria.classList.contains('expandido') ? 'Ver menos' : 'Ver mais';
      });
      galeria.classList.add('escondido');
  }
});

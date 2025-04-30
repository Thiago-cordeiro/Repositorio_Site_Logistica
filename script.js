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

        // Fecha todas
        document.querySelectorAll(".faq-answer").forEach((ans) => ans.style.display = "none");

        // Abre se não estava aberto
        if (!isOpen) {
            resposta.style.display = "block";
        }
    });
});                 


gsap.registerPlugin(ScrollTrigger);

gsap.from(".h2", {
  scrollTrigger: {
    trigger: ".text",     // elemento que ativa a animação
    start: "top 80%",     // quando o topo do elemento chegar a 80% da altura da viewport
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power1.in"
});
gsap.from(".p", {
    scrollTrigger: {
      trigger: ".text",     // elemento que ativa a animação
      start: "top 80%",     // quando o topo do elemento chegar a 80% da altura da viewport
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power1.in"
});
gsap.from(".bt", {
    scrollTrigger: {
      trigger: ".text",     
      start: "top bottom",     // ajustado para esperar mais do scroll
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1.3,
    ease: "power1.in"
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

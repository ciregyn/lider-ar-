

//Entrar ao scroll com IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('entrar');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0,  
  rootMargin: '0px 0px -5% 0px'  
 });

document.querySelectorAll('.oculto').forEach(el => observer.observe(el));

const form = document.querySelector('.formulario')
const mascara = document.querySelector('.mascara-formulario')

function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-60%)"
    mascara.style.visibility = "visible"
    form.style.display = "flex";
}

function clickForm(){
    form.style.left = "-180px"
    mascara.style.visibility = "hidden"
}



//Form validation + submit
const contactForm = document.getElementById('form-contato');
contactForm.addEventListener('submit', e=>{
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const tel = document.getElementById('telefone').value.trim();
  const msg = document.getElementById('duvida').value.trim();
  if(!nome) return alert('Preencha o nome');
  if(msg.length<10) return alert('Mensagem muito curta');
  contactForm.submit();
});




//Mostrar seta para o topo após rolar a página
const setaTopo = document.querySelector('.seta-topo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    setaTopo.classList.add('mostrar');
  } else {
    setaTopo.classList.remove('mostrar');
  }
});







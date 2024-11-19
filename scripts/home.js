//barra de navegação//
const navItems = document.querySelectorAll('.nav-list li a');
const highlightBar = document.querySelector('.linha-animada');

navItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        const itemPosition = item.getBoundingClientRect();
        const navPosition = document.querySelector('nav').getBoundingClientRect();

        // Calcula a posição e largura da barra de destaque
        highlightBar.style.left = `${itemPosition.left - navPosition.left}px`;
        highlightBar.style.width = `${item.offsetWidth}px`;
    });
});

// Volta a barra de destaque para o início quando o mouse sai do menu
document.querySelector('nav').addEventListener('mouseleave', () => {
    highlightBar.style.width = '0';
});

const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});


//animação da barra de navegação//
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    
    // Se a rolagem é maior que 0, adiciona a classe 'scrolled'
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }); 
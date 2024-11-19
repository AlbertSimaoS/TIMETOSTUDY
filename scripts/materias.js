// Barra de navegação
const navItems = document.querySelectorAll('.nav-list li a');
const highlightBar = document.querySelector('.linha-animada');
const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');

// Barra de destaque ao passar o mouse sobre os itens
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

// Alterna a visibilidade do menu e anima o ícone "sanduíche"
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    console.log('Menu clicado, classes alteradas'); // Verifica se o evento é disparado
});


// Seleciona o campo de input da pesquisa
const searchInput = document.getElementById('searchInput');

// Seleciona os containers e seus titulos h2

const containers = document.querySelectorAll('.container');

// Adiciona um ouvinte de evento para quando o usuário digitar na barra de pesquisa
// Adiciona um ouvinte de evento para a barra de pesquisa
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase(); // Obtém o texto digitado

    // Itera sobre os containers e verifica o texto do h2 dentro de cada um
    containers.forEach(container => {
        const title = container.querySelector('h2').textContent.toLowerCase(); // Obtém o texto do título
        if (title.includes(query)) {
            container.style.display = 'block'; // Exibe o container se o título corresponder
        } else {
            container.style.display = 'none'; // Oculta o container se não corresponder
        }
    });
});

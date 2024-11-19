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
});













const $startGameButton = document.querySelector(".start")
const $questionsContainer = document.querySelector(".questao-container")
const $anwersContainer = document.querySelector(".resposta-container")
const $questionText = document.querySelector(".questao")
const $nextQuestionButton = document.querySelector(".proxima-pergunta")



$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)


let currentQuestionIndex = 0
let totalCorrect = 0


function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions.length == currentQuestionIndex) {
        return finishGame()
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "resposta")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $anwersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    while($anwersContainer.firstChild) {
        $anwersContainer.removeChild($anwersContainer.firstChild)
    }

    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
    const answerClicked = event.target

    if(answerClicked.dataset.correct) {
        document.body.classList.add("correct")
        totalCorrect++
    } else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".resposta").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ""

    switch (true) {
        case (performance >= 90):
            message = "Excelente :)"
            break
        case (performance >= 70):
            message = "Muito Bom :)"
            break
        case (performance >= 50):
            message = "Bom"
            break
        default:
            message = "Pode Melhorar :("
    }

    $questionsContainer.innerHTML = 
    `
        <p class="final-message">
            Você acertou ${totalCorrect} de ${totalQuestion} questões!
            <span>Resultado: ${message}</span>
       </p>
       <button onclick=window.location.reload() class="button">
        Refazer Teste
       </button>
    `
}




const questions = [
    {
        question: "(ESAN - Escola Superior de Administração de Negócios de São Paulo) Das frases abaixo, apenas uma está correta, quanto à crase. Assinale-a:",
        answers: [
            { text: "Devemos aliar a teoria à prática", correct: false },
            { text: "Dia à dia, a empresa foi crescendo.", correct: false },
            { text: "Ele parecia entregue à tristes cogitações.", correct: true },
            { text: "Puseram-se à discutir em voz alta.", correct: false },
        ]
    },
    {
        question: "(Banco do Brasil) Opção que preenche corretamente as lacunas: O gerente dirigiu-se ___ sua sala e pôs-se ___ falar ___ todas as pessoas convocadas.",
        answers: [
            { text: "à - a - a", correct: true },
            { text: " a - à - à", correct: false },
            { text: "à - à - à", correct: false },
            { text: " à - a - à", correct: false },
        ]
    },
    {
        question: "(ESAF - Escola de Administração Fazendária) Assinale a frase em que o acento indicativo de crase foi empregado incorretamente:",
        answers: [
            { text: " Ao voltar das férias, devolverei tudo à Vossa Senhoria.", correct: true },
            { text: "Fiquei à espera de meus amigos.", correct: false },
            { text: "Você só poderá ser atendido às 9 horas.", correct: false },
            { text: "Sua maneira de falar é semelhante à de Paulo.", correct: false },
        ]
    },
]

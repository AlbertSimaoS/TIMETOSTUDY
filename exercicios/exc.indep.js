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
        question: "Um dos fatos que fizeram o processo de independência do Brasil ser diferente das demais nações da América hispânica foi:",
        answers: [
            { text: " As guerras napoleônicas na Europa.", correct: false },
            { text: "As ideias iluministas surgidas na França.", correct: false },
            { text: "A vinda Família Real portuguesa para o Brasil.", correct: true },
            { text: "A crise do sistema colonial", correct: false },
        ]
    },
    {
        question: "Um evento ocorrido em Portugal foi de suma importância para a deflagração da Independência do Brasil, já que obrigou D. João VI a cruzar novamente o Atlântico, em retorno a Portugal. Qual foi esse evento?",
        answers: [
            { text: "Revolta Liberal do Porto.", correct: true },
            { text: "Revolução dos Cravos.", correct: false },
            { text: "Revolta da Patuleia.", correct: false },
            { text: "Revolução da Maria da Fonte", correct: false },
        ]
    },
]

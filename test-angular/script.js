const questions = [
    {
        level: 'básico',
        question: '¿Cuál es el propósito principal de un Guard en Angular?',
        options: [
            'Optimizar el rendimiento de la aplicación',
            'Controlar el acceso a rutas específicas',
            'Manejar errores HTTP',
            'Gestionar el estado de la aplicación'
        ],
        correct: 1
    },
    {
        level: 'básico',
        question: 'En el contexto de Observables, ¿qué operador deberías usar para cancelar una suscripción automáticamente cuando el componente se destruye?',
        options: [
            'unsubscribe()',
            'takeUntil()',
            'pipe()',
            'subscribe()'
        ],
        correct: 1
    },
    {
        level: 'básico',
        question: '¿Cuál es la diferencia principal entre BehaviorSubject y Subject?',
        options: [
            'BehaviorSubject puede tener múltiples suscriptores, Subject no',
            'BehaviorSubject requiere un valor inicial y mantiene el último valor emitido',
            'BehaviorSubject es más rápido que Subject',
            'No hay diferencia significativa'
        ],
        correct: 1
    },
    {
        level: 'intermedio',
        question: 'Al implementar OnPush strategy, ¿cuándo se activará la detección de cambios?',
        options: [
            'Solo cuando cambie una referencia de Input',
            'En cada ciclo de detección de cambios',
            'Solo cuando se llame manualmente a detectChanges()',
            'a y c son correctas'
        ],
        correct: 3
    },
    {
        level: 'intermedio',
        question: 'En el contexto de Redux/NgRx, ¿qué afirmación es correcta?',
        options: [
            'Los effects pueden modificar directamente el estado',
            'Las acciones son objetos que describen qué sucedió',
            'Los reducers pueden ser asíncronos',
            'Los selectores modifican el estado'
        ],
        correct: 1
    },
    {
        level: 'intermedio',
        question: '¿Cuál es una práctica para optimizar un Observable que emite frecuentemente?',
        options: [
            'Usar async pipe en el template',
            'Implementar debounceTime o throttleTime',
            'Usar Subject en lugar de Observable',
            'Todas son correctas'
        ],
        correct: 1
    },
    {
        level: 'intermedio',
        question: 'En Angular Universal (SSR), ¿qué técnica se utiliza para evitar la hidratación innecesaria de componentes no visibles inicialmente?',
        options: [
            'Lazy Loading de módulos',
            'TransferState API',
            'NgOptimizedImage',
            'Deferrable Views'
        ],
        correct: 3
    },
    {
        level: 'avanzado',
        question: '¿Qué sucede si usas shareReplay(1) en un Observable?',
        options: [
            'Solo el primer valor será compartido entre suscriptores',
            'El último valor emitido será repetido para nuevos suscriptores',
            'El Observable se completará después de un valor',
            'Se creará un nuevo stream para cada suscriptor'
        ],
        correct: 1
    },
    {
        level: 'avanzado',
        question: 'En el contexto de Guards, ¿qué interfaz usarías para ejecutar código antes de que un componente sea destruido?',
        options: [
            'CanActivate',
            'CanDeactivate',
            'CanLoad',
            'CanMatch'
        ],
        correct: 1
    },
    {
        level: 'avanzado',
        question: 'Al usar OnPush strategy, ¿cuál de estas operaciones NO disparará la detección de cambios?',
        options: [
            'Evento del DOM',
            'Cambio de una propiedad interna del componente',
            'Emisión de un Observable con async pipe',
            'Cambio en un @Input()'
        ],
        correct: 1
    },
    {
        level: 'avanzado',
        question: 'En NgRx, ¿qué patrón deberías usar para manejar estados derivados que dependen de múltiples slices del store?',
        options: [
            'createFeatureSelector',
            'createSelector con múltiples selectores',
            'map operator en effects',
            'combineReducers'
        ],
        correct: 1
    },
    {
        level: 'avanzado',
        question: 'En una aplicación con SSR, ¿cuál es la manera correcta de manejar APIs que solo están disponibles en el navegador (como localStorage)?',
        options: [
            'Usar try/catch',
            'Verificar typeof window !== "undefined"',
            'Usar un servicio con inyección de PLATFORM_ID',
            'Todas son correctas'
        ],
        correct: 3
    }
];

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let timeLeft = 600; // 10 minutos en segundos
let timerInterval;

// Elementos DOM
const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const progressFill = document.getElementById('progressFill');
const timeDisplay = document.getElementById('time');
const resultsDiv = document.getElementById('results');
const restartBtn = document.getElementById('restart-btn');

// Inicializar temporizador
function startTimer() {
    updateTimer();
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
        updateTimer();
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Mostrar pregunta actual
function showQuestion() {
    const question = questions[currentQuestion];
    const answered = userAnswers[currentQuestion] !== null;

    questionContainer.innerHTML = `
    <div class="question">
      <h3>${currentQuestion + 1}. ${question.question}</h3>
      <div class="options">
        ${question.options.map((option, index) => `
          <div class="option ${answered && userAnswers[currentQuestion] === index ? 'selected' : ''}"
               onclick="selectOption(${index})">
            ${String.fromCharCode(97 + index)}) ${option}
          </div>
        `).join('')}
      </div>
    </div>
  `;

    // Actualizar navegación
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? 'Finalizar' : 'Siguiente';
    submitBtn.style.display = currentQuestion === questions.length - 1 ? 'block' : 'none';

    // Actualizar barra de progreso
    updateProgress();
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;
    showQuestion();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function calculateScore() {
    const results = {
        total: 0,
        basic: 0,
        intermediate: 0,
        advanced: 0
    };

    userAnswers.forEach((answer, index) => {
        const question = questions[index];
        if (answer === question.correct) {
            results.total++;
            if (question.level === 'básico') results.basic++;
            else if (question.level === 'intermedio') results.intermediate++;
            else if (question.level === 'avanzado') results.advanced++;
        }
    });

    return results;
}

function getFeedback(score) {
    if (score >= 10) return "¡Excelente! Tienes un dominio sólido de Angular.";
    if (score >= 7) return "¡Buen trabajo! Tienes un buen conocimiento de Angular, pero hay áreas para mejorar.";
    if (score >= 5) return "Has aprobado, pero necesitas reforzar algunos conceptos de Angular.";
    return "Necesitas estudiar más los conceptos fundamentales de Angular.";
}

function showResults() {
    clearInterval(timerInterval);
    const results = calculateScore();
    const questionContainer = document.getElementById('test-container');
    const controls = document.getElementById('controls');
    const resultsContainer = document.getElementById('results');

    // Limpiar contenido anterior
    const existingReview = resultsContainer.querySelector('.wrong-answers');
    if (existingReview) {
        existingReview.remove();
    }

    // Mostrar contenedor de resultados
    questionContainer.style.display = 'none';
    controls.style.display = 'none';
    resultsContainer.style.display = 'block';

    // Actualizar puntuaciones
    document.getElementById('score').textContent = results.total;
    document.getElementById('basic-score').textContent = results.basic;
    document.getElementById('intermediate-score').textContent = results.intermediate;
    document.getElementById('advanced-score').textContent = results.advanced;
    document.getElementById('feedback').textContent = getFeedback(results.total);

    // Crear contenedor de revisión
    const reviewContainer = document.createElement('div');
    reviewContainer.className = 'wrong-answers';
    reviewContainer.innerHTML = '<h3>Revisión de Preguntas</h3>';

    // Generar revisión de preguntas
    userAnswers.forEach((answer, index) => {
        const question = questions[index];
        const isCorrect = answer === question.correct;

        const questionElement = document.createElement('div');
        questionElement.className = `review-question ${isCorrect ? 'correct' : 'incorrect'}`;
        questionElement.innerHTML = `
            <p class="question-text">
                <span class="question-status">${isCorrect ? '✓' : '✗'}</span>
                ${index + 1}. ${question.question}
            </p>
            <div class="answers-review">
                <p class="selected-answer">Tu respuesta: ${answer !== null ? question.options[answer] : 'Sin responder'}</p>
                ${!isCorrect ? `<p class="correct-answer">Respuesta correcta: ${question.options[question.correct]}</p>` : ''}
            </div>
        `;

        reviewContainer.appendChild(questionElement);
    });

    // Insertar la revisión antes del botón de reiniciar
    const restartButton = document.getElementById('restart-btn');
    resultsContainer.insertBefore(reviewContainer, restartButton);
}

function restartTest() {
    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(null);
    timeLeft = 600;

    const questionContainer = document.getElementById('test-container');
    const controls = document.getElementById('controls');
    const resultsContainer = document.getElementById('results');

    // Limpiar revisión anterior
    const reviewSection = resultsContainer.querySelector('.wrong-answers');
    if (reviewSection) {
        reviewSection.remove();
    }

    questionContainer.style.display = 'block';
    controls.style.display = 'flex';
    resultsDiv.style.display = 'none';

    startTimer();
    showQuestion();
}

// Event Listeners
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('prev-btn').addEventListener('click', prevQuestion);
document.getElementById('submit-btn').addEventListener('click', showResults);
document.getElementById('restart-btn').addEventListener('click', restartTest);

// Iniciar el test
window.onload = () => {
    startTimer();
    showQuestion();
};

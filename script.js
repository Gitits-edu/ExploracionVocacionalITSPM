
// DATA_PREGUNTAS: Banco de 96 preguntas
const DATA_PREGUNTAS = [
    // P01: Informática (Mantenimiento)
    { id: 1, codigo: "P01", area: "Informática", programa: "Mantenimiento Electrónico y de PC's", pregunta: "¿Te genera curiosidad desarmar una computadora para conocer sus piezas internas?" },
    { id: 2, codigo: "P01", area: "Informática", programa: "Mantenimiento Electrónico y de PC's", pregunta: "¿Te gustaría aprender a configurar redes Wi-Fi y cableado de internet?" },
    { id: 3, codigo: "P01", area: "Informática", programa: "Mantenimiento Electrónico y de PC's", pregunta: "¿Te interesa el desarrollo de aplicaciones móviles funcionales?" }, // Note: Prompt puts this in P01, though it sounds like P02. Keeping as per prompt structure.
    { id: 4, codigo: "P01", area: "Informática", programa: "Mantenimiento Electrónico y de PC's", pregunta: "¿Disfrutas instalando y configurando sistemas operativos o programas?" },
    { id: 5, codigo: "P01", area: "Informática", programa: "Mantenimiento Electrónico y de PC's", pregunta: "¿Te gustaría diagnosticar por qué un equipo electrónico ha dejado de funcionar?" },
    { id: 6, codigo: "P01", area: "Informática", programa: "Mantenimiento Electrónico y de PC's", pregunta: "¿Te interesa aprender sobre la seguridad de los datos en redes de comunicación?" },
    { id: 7, codigo: "P01", area: "Informática", programa: "Mantenimiento Electrónico y de PC's", pregunta: "¿Te motiva realizar mantenimiento preventivo (limpieza y optimización) a dispositivos?" },
    { id: 8, codigo: "P01", area: "Informática", programa: "Mantenimiento Electrónico y de PC's", pregunta: "¿Te gustaría entender cómo se comunican los servidores de internet entre sí?" },

    // P02: Informática (Desarrollo Web / Apps)
    { id: 9, codigo: "P02", area: "Informática", programa: "Diseño y Desarrollo de Sitios Web", pregunta: "¿Te atrae la idea de crear tu propio sitio web profesional desde cero?" },
    { id: 10, codigo: "P02", area: "Informática", programa: "Diseño y Desarrollo de Sitios Web", pregunta: "¿Te gusta resolver acertijos lógicos o problemas de lógica matemática?" },
    { id: 11, codigo: "P02", area: "Informática", programa: "Diseño y Desarrollo de Sitios Web", pregunta: "¿Te gustaría aprender lenguajes de programación como HTML, CSS o JavaScript?" },
    { id: 12, codigo: "P02", area: "Informática", programa: "Diseño y Desarrollo de Sitios Web", pregunta: "¿Te interesa entender cómo funcionan las bases de datos de una red social?" },
    { id: 13, codigo: "P02", area: "Informática", programa: "Diseño y Desarrollo de Sitios Web", pregunta: "¿Te motiva diseñar la estructura y navegación de un portal de noticias?" },
    { id: 14, codigo: "P02", area: "Informática", programa: "Diseño y Desarrollo de Sitios Web", pregunta: "¿Te gustaría programar funciones interactivas (botones, formularios) en la web?" },
    { id: 15, codigo: "P02", area: "Informática", programa: "Diseño y Desarrollo de Sitios Web", pregunta: "¿Te interesa el mundo del comercio electrónico y las tiendas virtuales?" },
    { id: 16, codigo: "P02", area: "Informática", programa: "Diseño y Desarrollo de Sitios Web", pregunta: "¿Te ves trabajando en un editor de código creando software para empresas?" },

    // P03: Informática (Diseño Gráfico)
    { id: 17, codigo: "P03", area: "Informática", programa: "Diseño Gráfico Asistido por Computador", pregunta: "¿Te gusta dibujar, ilustrar o crear logotipos originales y marcas?" },
    { id: 18, codigo: "P03", area: "Informática", programa: "Diseño Gráfico Asistido por Computador", pregunta: "¿Te interesa aprender a editar fotografías de manera profesional?" },
    { id: 19, codigo: "P03", area: "Informática", programa: "Diseño Gráfico Asistido por Computador", pregunta: "¿Te gustaría crear animaciones digitales para redes sociales o cine?" },
    { id: 20, codigo: "P03", area: "Informática", programa: "Diseño Gráfico Asistido por Computador", pregunta: "¿Te atrae el mundo de la publicidad y la identidad visual de las empresas?" },
    { id: 21, codigo: "P03", area: "Informática", programa: "Diseño Gráfico Asistido por Computador", pregunta: "¿Disfrutas combinando colores y tipografías para transmitir mensajes?" },
    { id: 22, codigo: "P03", area: "Informática", programa: "Diseño Gráfico Asistido por Computador", pregunta: "¿Te gustaría diseñar afiches, banners o folletos publicitarios?" },
    { id: 23, codigo: "P03", area: "Informática", programa: "Diseño Gráfico Asistido por Computador", pregunta: "¿Te interesa aprender a usar herramientas como Photoshop, Illustrator o Canva?" },
    { id: 24, codigo: "P03", area: "Informática", programa: "Diseño Gráfico Asistido por Computador", pregunta: "¿Te motiva crear contenido visual que impacte a una audiencia específica?" },

    // P06: Dibujo (Arquitectónico)
    { id: 25, codigo: "P06", area: "Dibujo y Diseño Industrial", programa: "Diseño Arquitectónico y de Obras Civiles", pregunta: "¿Te gusta observar la arquitectura de los edificios y la distribución de espacios?" },
    { id: 26, codigo: "P06", area: "Dibujo y Diseño Industrial", programa: "Diseño Arquitectónico y de Obras Civiles", pregunta: "¿Te interesa aprender a dibujar planos detallados de casas y edificios?" },
    { id: 27, codigo: "P06", area: "Dibujo y Diseño Industrial", programa: "Diseño Arquitectónico y de Obras Civiles", pregunta: "¿Te motiva modelar estructuras en 3D utilizando herramientas digitales?" },
    { id: 28, codigo: "P06", area: "Dibujo y Diseño Industrial", programa: "Diseño Arquitectónico y de Obras Civiles", pregunta: "¿Te gustaría aprender sobre los materiales de construcción y su resistencia?" },
    { id: 29, codigo: "P06", area: "Dibujo y Diseño Industrial", programa: "Diseño Arquitectónico y de Obras Civiles", pregunta: "¿Te interesa diseñar la distribución interna de una oficina o vivienda?" },
    { id: 30, codigo: "P06", area: "Dibujo y Diseño Industrial", programa: "Diseño Arquitectónico y de Obras Civiles", pregunta: "¿Te atrae la idea de planificar redes de servicios públicos para una construcción?" },
    { id: 31, codigo: "P06", area: "Dibujo y Diseño Industrial", programa: "Diseño Arquitectónico y de Obras Civiles", pregunta: "¿Te gustaría supervisar técnicamente cómo se levanta una obra civil?" },
    { id: 32, codigo: "P06", area: "Dibujo y Diseño Industrial", programa: "Diseño Arquitectónico y de Obras Civiles", pregunta: "¿Disfrutas creando maquetas físicas o virtuales de proyectos urbanos?" },

    // P08: Dibujo (Topográfico)
    { id: 33, codigo: "P08", area: "Dibujo y Diseño Industrial", programa: "Diseño Topográfico", pregunta: "¿Te gusta realizar actividades de medición al aire libre y en campo?" },
    { id: 34, codigo: "P08", area: "Dibujo y Diseño Industrial", programa: "Diseño Topográfico", pregunta: "¿Te interesa aprender a medir terrenos usando equipos de alta precisión?" },
    { id: 35, codigo: "P08", area: "Dibujo y Diseño Industrial", programa: "Diseño Topográfico", pregunta: "¿Te gustaría crear mapas detallados de relieves, montañas o ciudades?" },
    { id: 36, codigo: "P08", area: "Dibujo y Diseño Industrial", programa: "Diseño Topográfico", pregunta: "¿Te motiva calcular las pendientes y desniveles de un terreno natural?" },
    { id: 37, codigo: "P08", area: "Dibujo y Diseño Industrial", programa: "Diseño Topográfico", pregunta: "¿Te interesa aprender a usar sistemas de posicionamiento satelital (GPS)?", },
    { id: 38, codigo: "P08", area: "Dibujo y Diseño Industrial", programa: "Diseño Topográfico", pregunta: "¿Te gustaría analizar cómo el suelo afecta la construcción de una vía?" },
    { id: 39, codigo: "P08", area: "Dibujo y Diseño Industrial", programa: "Diseño Topográfico", pregunta: "¿Te ves trabajando en la recolección de datos geográficos para planos?" },
    { id: 40, codigo: "P08", area: "Dibujo y Diseño Industrial", programa: "Diseño Topográfico", pregunta: "¿Te atrae el dibujo técnico aplicado a la representación fiel de la tierra?" },

    // P09: Dibujo (Mecánico Asistido)
    { id: 41, codigo: "P09", area: "Dibujo y Diseño Industrial", programa: "Diseño Mecánico Asistido por Computador", pregunta: "¿Te interesa entender cómo funcionan los engranajes de un motor o máquina?" },
    { id: 42, codigo: "P09", area: "Dibujo y Diseño Industrial", programa: "Diseño Mecánico Asistido por Computador", pregunta: "¿Te gustaría diseñar piezas industriales en 3D para ser fabricadas?" },
    { id: 43, codigo: "P09", area: "Dibujo y Diseño Industrial", programa: "Diseño Mecánico Asistido por Computador", pregunta: "¿Te atrae el dibujo de precisión de herramientas y componentes mecánicos?" },
    { id: 44, codigo: "P09", area: "Dibujo y Diseño Industrial", programa: "Diseño Mecánico Asistido por Computador", pregunta: "¿Te gustaría simular el movimiento de una máquina en un software especializado?" },
    { id: 45, codigo: "P09", area: "Dibujo y Diseño Industrial", programa: "Diseño Mecánico Asistido por Computador", pregunta: "¿Te interesa aprender sobre la composición y dureza de los metales?" },
    { id: 46, codigo: "P09", area: "Dibujo y Diseño Industrial", programa: "Diseño Mecánico Asistido por Computador", pregunta: "¿Te motiva inventar nuevos mecanismos para solucionar problemas técnicos?" },
    { id: 47, codigo: "P09", area: "Dibujo y Diseño Industrial", programa: "Diseño Mecánico Asistido por Computador", pregunta: "¿Te gustaría crear prototipos que luego puedan ser impresos en 3D?" },
    { id: 48, codigo: "P09", area: "Dibujo y Diseño Industrial", programa: "Diseño Mecánico Asistido por Computador", pregunta: "¿Te ves trabajando en el diseño técnico de piezas para la industria pesada?" },

    // P05: Metalmecánica (Mecánica)
    { id: 49, codigo: "P05", area: "Metalmecánica", programa: "Mecánica Industrial", pregunta: "¿Te gusta trabajar con herramientas manuales de taller (llaves, calibres)?" },
    { id: 50, codigo: "P05", area: "Metalmecánica", programa: "Mecánica Industrial", pregunta: "¿Te interesa operar máquinas industriales como tornos o fresadoras?" },
    { id: 51, codigo: "P05", area: "Metalmecánica", programa: "Mecánica Industrial", pregunta: "¿Te motiva transformar un bloque de acero en una pieza mecánica útil?" },
    { id: 52, codigo: "P05", area: "Metalmecánica", programa: "Mecánica Industrial", pregunta: "¿Te gustaría aprender sobre el mantenimiento de maquinaria de fábrica?" },
    { id: 53, codigo: "P05", area: "Metalmecánica", programa: "Mecánica Industrial", pregunta: "¿Te interesa el montaje y ajuste de sistemas mecánicos complejos?" },
    { id: 54, codigo: "P05", area: "Metalmecánica", programa: "Mecánica Industrial", pregunta: "¿Te gustaría interpretar planos técnicos para fabricar piezas reales?" },
    { id: 55, codigo: "P05", area: "Metalmecánica", programa: "Mecánica Industrial", pregunta: "¿Te sientes cómodo trabajando en un entorno de taller con máquinas grandes?" },
    { id: 56, codigo: "P05", area: "Metalmecánica", programa: "Mecánica Industrial", pregunta: "¿Te motiva entender las leyes físicas que permiten el movimiento mecánico?" },

    // P12: Metalmecánica (Soldadura)
    { id: 57, codigo: "P12", area: "Metalmecánica", programa: "Soldadura", pregunta: "¿Te atrae la idea de unir metales de forma permanente mediante calor?" },
    { id: 58, codigo: "P12", area: "Metalmecánica", programa: "Soldadura", pregunta: "¿Te interesa fabricar estructuras metálicas como puentes o techos?" },
    { id: 59, codigo: "P12", area: "Metalmecánica", programa: "Soldadura", pregunta: "¿Te gustaría aprender diferentes procesos como soldadura MIG, TIG o eléctrica?" },
    { id: 60, codigo: "P12", area: "Metalmecánica", programa: "Soldadura", pregunta: "¿Te motiva trabajar con equipos de alta protección (caretas, guantes térmicos)?" },
    { id: 61, codigo: "P12", area: "Metalmecánica", programa: "Soldadura", pregunta: "¿Te interesa la metalurgia y cómo reaccionan los metales a altas temperaturas?" },
    { id: 62, codigo: "P12", area: "Metalmecánica", programa: "Soldadura", pregunta: "¿Te gustaría participar en la construcción de grandes esqueletos de acero?" },
    { id: 63, codigo: "P12", area: "Metalmecánica", programa: "Soldadura", pregunta: "¿Te consideras una persona con pulso firme y atención al detalle manual?" },
    { id: 64, codigo: "P12", area: "Metalmecánica", programa: "Soldadura", pregunta: "¿Te interesa aprender sobre las normas de seguridad en procesos industriales?" },

    // P04: Electrónica (Mecatrónica)
    { id: 65, codigo: "P04", area: "Electricidad y Electrónica", programa: "Mecatrónica", pregunta: "¿Te apasiona la idea de construir y programar tus propios robots?" },
    { id: 66, codigo: "P04", area: "Electricidad y Electrónica", programa: "Mecatrónica", pregunta: "¿Te interesa combinar la mecánica, la electrónica y el código en un solo proyecto?" },
    { id: 67, codigo: "P04", area: "Electricidad y Electrónica", programa: "Mecatrónica", pregunta: "¿Te gustaría aprender a usar sensores para que una máquina detecte objetos?" },
    { id: 68, codigo: "P04", area: "Electricidad y Electrónica", programa: "Mecatrónica", pregunta: "¿Te motiva el diseño de sistemas automatizados que actúen por sí solos?" },
    { id: 69, codigo: "P04", area: "Electricidad y Electrónica", programa: "Mecatrónica", pregunta: "¿Te interesa el uso de microcontroladores para dar inteligencia a una máquina?" },
    { id: 70, codigo: "P04", area: "Electricidad y Electrónica", programa: "Mecatrónica", pregunta: "¿Te gustaría participar en retos de ingeniería y competencias de robótica?" },
    { id: 71, codigo: "P04", area: "Electricidad y Electrónica", programa: "Mecatrónica", pregunta: "¿Te atrae el uso de plataformas de hardware abierto como Arduino o ESP32?" },
    { id: 72, codigo: "P04", area: "Electricidad y Electrónica", programa: "Mecatrónica", pregunta: "¿Te ves creando las soluciones tecnológicas del futuro mediante la automatización?" },

    // P07: Electrónica (Autotrónica)
    { id: 73, codigo: "P07", area: "Electricidad y Electrónica", programa: "Autotrónica", pregunta: "¿Te generan curiosidad los motores y cómo transforman energía en movimiento?" },
    { id: 74, codigo: "P07", area: "Electricidad y Electrónica", programa: "Autotrónica", pregunta: "¿Te gustaría diagnosticar fallas vehiculares usando equipos computarizados?" },
    { id: 75, codigo: "P07", area: "Electricidad y Electrónica", programa: "Autotrónica", pregunta: "¿Te interesa aprender sobre los complejos sistemas eléctricos de un auto?" },
    { id: 76, codigo: "P07", area: "Electricidad y Electrónica", programa: "Autotrónica", pregunta: "¿Te motiva entender cómo funcionan los sensores de seguridad en un vehículo?" },
    { id: 77, codigo: "P07", area: "Electricidad y Electrónica", programa: "Autotrónica", pregunta: "¿Te atrae la mecánica automotriz apoyada por la tecnología digital?" },
    { id: 78, codigo: "P07", area: "Electricidad y Electrónica", programa: "Autotrónica", pregunta: "¿Te gustaría trabajar en el mantenimiento de sistemas de inyección electrónica?" },
    { id: 79, codigo: "P07", area: "Electricidad y Electrónica", programa: "Autotrónica", pregunta: "¿Te interesa el funcionamiento de los nuevos motores eléctricos e híbridos?" },
    { id: 80, codigo: "P07", area: "Electricidad y Electrónica", programa: "Autotrónica", pregunta: "¿Te ves trabajando en un taller de alta tecnología analizando autos modernos?" },

    // P10: Electrónica (Electrónica y Control)
    { id: 81, codigo: "P10", area: "Electricidad y Electrónica", programa: "Electrónica y Control", pregunta: "¿Te interesa aprender cómo las fábricas usan la tecnología para producir rápido?" },
    { id: 82, codigo: "P10", area: "Electricidad y Electrónica", programa: "Electrónica y Control", pregunta: "¿Te gustaría programar controladores (PLC) para mover brazos industriales?" },
    { id: 83, codigo: "P10", area: "Electricidad y Electrónica", programa: "Electrónica y Control", pregunta: "¿Te motiva diseñar circuitos electrónicos que controlen procesos de forma autónoma?" },
    { id: 84, codigo: "P10", area: "Electricidad y Electrónica", programa: "Electrónica y Control", pregunta: "¿Te interesa el funcionamiento de sensores de presión, nivel o temperatura?" },
    { id: 85, codigo: "P10", area: "Electricidad y Electrónica", programa: "Electrónica y Control", pregunta: "¿Te gustaría aprender a leer e interpretar diagramas eléctricos industriales?" },
    { id: 86, codigo: "P10", area: "Electricidad y Electrónica", programa: "Electrónica y Control", pregunta: "¿Te atrae la idea de optimizar procesos para que una fábrica sea más eficiente?" },
    { id: 87, codigo: "P10", area: "Electricidad y Electrónica", programa: "Electrónica y Control", pregunta: "¿Te interesa la medición de variables físicas mediante instrumentos electrónicos?" },
    { id: 88, codigo: "P10", area: "Electricidad y Electrónica", programa: "Electrónica y Control", pregunta: "¿Te ves trabajando en el área de control de procesos en una gran empresa?" },

    // P11: Electrónica (Redes Domótica) - Reemplaza "Redes Eléctricas y Comunicaciones" según mapping P11
    { id: 89, codigo: "P11", area: "Electricidad y Electrónica", programa: "Redes Eléctricas y Domótica", pregunta: "¿Te gustaría aprender a instalar sistemas de control para \"casas inteligentes\"?" },
    { id: 90, codigo: "P11", area: "Electricidad y Electrónica", programa: "Redes Eléctricas y Domótica", pregunta: "¿Te interesa configurar luces, cámaras y cerraduras desde un smartphone?" },
    { id: 91, codigo: "P11", area: "Electricidad y Electrónica", programa: "Redes Eléctricas y Domótica", pregunta: "¿Te motiva aprender sobre instalaciones eléctricas residenciales seguras?" },
    { id: 92, codigo: "P11", area: "Electricidad y Electrónica", programa: "Redes Eléctricas y Domótica", pregunta: "¿Te atrae el montaje de infraestructuras para redes de datos y telefonía?" },
    { id: 93, codigo: "P11", area: "Electricidad y Electrónica", programa: "Redes Eléctricas y Domótica", pregunta: "¿Te gustaría entender el concepto del \"Internet de las Cosas\" (IoT)?" },
    { id: 94, codigo: "P11", area: "Electricidad y Electrónica", programa: "Redes Eléctricas y Domótica", pregunta: "¿Te interesa el ahorro energético y el uso de energías limpias en el hogar?" },
    { id: 95, codigo: "P11", area: "Electricidad y Electrónica", programa: "Redes Eléctricas y Domótica", pregunta: "¿Te gustaría diseñar sistemas de seguridad y alarmas electrónicas?" },
    { id: 96, codigo: "P11", area: "Electricidad y Electrónica", programa: "Redes Eléctricas y Domótica", pregunta: "¿Te ves trabajando en la modernización tecnológica de edificios inteligentes?" },
];

/**
 * CONFIGURACIÓN
 */

//const GOOGLE_SCRIPT_URL = 'URL_DEL_SCRIPT_DE_GOOGLE_AQUI'; // El usuario deberá actualizar esto
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzs-71NnynEU1zSltUCWPmr6ZvDkdx4nOg-msBVfMNxCUz1_1_whivwfOtsxR2hWdK2Hw/exec'; // El usuario deberá actualizar esto
const SCORES = { 3: 3, 2: 2, 1: 1 };

/**
 * ESTADO DE LA APLICACIÓN
 */
const state = {
    student: {
        name: '',
        email: '',
        group: ''
    },
    questions: [],
    currentQuestionIndex: 0,
    answers: {}, // { questionId: score }
    results: []
};


/**
 * ELEMENTOS DEL DOM
 */
const views = {
    welcome: document.getElementById('view-welcome'),
    test: document.getElementById('view-test'),
    results: document.getElementById('view-results'),
    loading: document.getElementById('view-loading')
};

const loginForm = document.getElementById('login-form');
const inputName = document.getElementById('student-name');
const inputEmail = document.getElementById('student-email');
const inputGroup = document.getElementById('student-group');
const questionText = document.getElementById('question-text');
const questionCategory = document.getElementById('question-category');
const progressBar = document.getElementById('progress-bar');
const optionsContainer = document.querySelector('.options-container');
const resultsList = document.getElementById('results-list');
const restartBtn = document.getElementById('restart-btn');


/**
 * FUNCIONES UTILITARIAS
 */

// Fisher-Yates Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function switchView(viewName) {
    Object.values(views).forEach(view => view.classList.add('hidden'));
    views[viewName].classList.remove('hidden');
}


/**
 * LÓGICA DEL TEST
 */

function initExam() {
    state.questions = shuffleArray([...DATA_PREGUNTAS]);
    state.currentQuestionIndex = 0;
    state.answers = {};
    renderQuestion();
    switchView('test');
}

function renderQuestion() {
    const question = state.questions[state.currentQuestionIndex];
    if (!question) {
        finishExam();
        return;
    }

    // Actualizar UI
    // questionCategory.textContent = `${question.area} - ${question.programa}`; // Ocultado por solicitud
    questionCategory.textContent = ""; // Dejar vacío o eliminar del DOM
    questionText.textContent = question.pregunta;

    // Barra de progreso
    const progress = ((state.currentQuestionIndex) / state.questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function handleAnswer(value) {
    const question = state.questions[state.currentQuestionIndex];
    state.answers[question.id] = parseInt(value);

    state.currentQuestionIndex++;
    if (state.currentQuestionIndex < state.questions.length) {
        renderQuestion();
    } else {
        finishExam();
    }
}

function finishExam() {
    switchView('loading');
    calculateResults();
    renderResults();
    sendDataToBackend();
    setTimeout(() => {
        switchView('results');
    }, 1500); // Pequeña pausa para simular proceso y mejorar UX si es muy rápido
}

function calculateResults() {
    const scoresByCode = {};

    // Inicializar contadores
    DATA_PREGUNTAS.forEach(q => {
        if (!scoresByCode[q.codigo]) {
            scoresByCode[q.codigo] = {
                codigo: q.codigo,
                nombre: q.programa,
                area: q.area,
                puntaje: 0,
                maxPosible: 0
            };
        }
    });

    // Sumar puntajes
    state.questions.forEach(q => {
        const score = state.answers[q.id] || 0;
        if (scoresByCode[q.codigo]) {
            scoresByCode[q.codigo].puntaje += score;
            scoresByCode[q.codigo].maxPosible += 3; // Max puntaje por pregunta es 3
        }
    });

    // Convertir a array y ordenar
    state.results = Object.values(scoresByCode).sort((a, b) => b.puntaje - a.puntaje);
}

function renderResults() {
    resultsList.innerHTML = '';

    // Top 3
    const top3 = state.results.slice(0, 3);

    top3.forEach((result, index) => {
        const percentage = Math.round((result.puntaje / result.maxPosible) * 100);

        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `
            <div class="result-rank">#${index + 1}</div>
            <div class="result-name">
                <strong>${result.codigo} - ${result.nombre}</strong><br>
                <small>${result.area}</small>
            </div>
            <div class="result-score">${result.puntaje} pts (${percentage}%)</div>
        `;
        resultsList.appendChild(div);
    });
}

function sendDataToBackend() {
    const payload = {
        timestamp: new Date().toISOString(),
        alumno: state.student.name,
        email: state.student.email,
        grupo: state.student.group,
        resultados: state.results.map(r => ({
            codigo: r.codigo,
            nombre: r.nombre,
            puntaje: r.puntaje
        }))
    };

    console.log("Enviando datos al backend:", payload);

    // if (GOOGLE_SCRIPT_URL === 'URL_DEL_SCRIPT_DE_GOOGLE_AQUI') {
    // console.warn('URL del backend no configurada. Los datos no se enviarán realmente.');
    // return;
    // }

    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Importante para Google Apps Script
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(response => console.log('Datos enviados con éxito (no-cors implica respuesta opaca)'))
        .catch(error => console.error('Error al enviar datos:', error));
}


/**
 * EVENT LISTENERS
 */

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = inputName.value.trim();
    const email = inputEmail.value.trim();
    const group = inputGroup.value.trim();

    if (name && email && group) {
        state.student.name = name;
        state.student.email = email;
        state.student.group = group;
        initExam();
    }
});

optionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-option')) {
        const value = e.target.getAttribute('data-value');
        handleAnswer(value);
    }
});

restartBtn.addEventListener('click', () => {
    location.reload();
});

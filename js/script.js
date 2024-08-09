// Array de frases motivacionales
const frases = [
    "Eres más fuerte de lo que crees.",
    "Cada día es una nueva oportunidad.",
    "Tu actitud determina tu dirección.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "Cree en ti mismo y todo será posible."
];

// Función para cambiar la frase motivacional
function cambiarFrase() {
    const quote = document.querySelector('.quote p');
    const randomIndex = Math.floor(Math.random() * frases.length);
    quote.textContent = frases[randomIndex];
    quote.style.opacity = 0;
    setTimeout(() => {
        quote.style.opacity = 1;
    }, 50);
}

// Cambiar frase cada 10 segundos
setInterval(cambiarFrase, 5000);

// Efecto de confeti al hacer clic en el botón
function lanzarConfeti() {
    const confettiCount = 200;
    const colors = ['#ff6f61', '#fad0c4', '#ff9a9e', '#ffffff'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.opacity = Math.random();
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Agregamos el evento de clic al botón
document.querySelector('.animate-button').addEventListener('click', lanzarConfeti);

// Efecto de escritura para el título
function escribirTitulo() {
    const titulo = document.querySelector('h1');
    const textoOriginal = titulo.textContent;
    titulo.textContent = '';
    let index = 0;

    function escribirCaracter() {
        if (index < textoOriginal.length) {
            titulo.textContent += textoOriginal.charAt(index);
            index++;
            setTimeout(escribirCaracter, 100);
        }
    }

    escribirCaracter();
}

// Llamamos a la función de escritura cuando se carga la página
window.addEventListener('load', escribirTitulo);
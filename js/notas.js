document.addEventListener("DOMContentLoaded", function () {
    const generarNotasBtn = document.getElementById("generarNotasBtn");
    generarNotasBtn.addEventListener("click", generarNotasAleatorias)
});

function generarNotasAleatorias() {
    const maxDecimales = 1;

    for (let i = 1; i <= 12; i++) {
        const notasCell = document.getElementById(`notas${i}`);
        const observacionesCell = document.getElementById(`observaciones${i}`);
        const disciplinaCell = document.getElementById(`disciplina${i}`);

        const notaAleatoria = (Math.random() * 9 + 1).toFixed(maxDecimales);

        const observacionesAleatorias = ["Execelente", "Muy bien", "Buen trabajo", "Necesitas mejorar", "Tienes que estudiar mas", "Presta mas atencion"];
        const disciplinasAleatorias = ["Siempre muestra una actitud ejemplar en clase.", "A veces, podría mejorar un poco su comportamiento en el aula.", "De vez en cuando, puede distraerse un poco de sus tareas, ¡pero eso le pasa a cualquiera!", "A veces, su mente parece vagar, pero en general, tiene un buen comportamiento."];
        const observacionAleatoria = observacionesAleatorias[Math.floor(Math.random() * observacionesAleatorias.length)];
        const disciplinaAleatoria = disciplinasAleatorias[Math.floor(Math.random() * disciplinasAleatorias.length)];


        notasCell.textContent = notaAleatoria;
        observacionesCell.textContent = observacionAleatoria;
        disciplinaCell.textContent = disciplinaAleatoria;

    }
}
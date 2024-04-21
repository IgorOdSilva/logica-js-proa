import exerciciosFacat from "./faccatExercicios.js";
import exerciciosManzano from "./manzanoExercicios.js";



document.addEventListener("DOMContentLoaded", function () {
    const manzanoButton = document.querySelector(".manzano");
    const faccatButton = document.querySelector(".facat");
    const container = document.querySelector(".container");
    const containerExercice = document.createElement("div");
    containerExercice.classList.add("containerExercice");


    manzanoButton.addEventListener("click", () => {
        openExercice(exerciciosManzano); // Abre a lista da Manzanp
    });

    faccatButton.addEventListener("click", () => {
        openExercice(exerciciosFacat); // Abre a lista da FacCat
    });

    function openExercice(listaExercicios) {
        container.style.display = "none";
        containerExercice.innerHTML = ""; // Limpa os botões de exercício anteriores

        listaExercicios.forEach((exercicio, index) => {
            const buttonExercicio = document.createElement("button");
            buttonExercicio.textContent = `Exercício ${exercicio.nome}`;
            buttonExercicio.addEventListener("click", () => {
                exercicio.exercicio(); // Execute a função associada ao exercício
            });
            containerExercice.appendChild(buttonExercicio);
        });

        const backButton = document.createElement("button");
        backButton.textContent = "Voltar à tela inicial";
        backButton.addEventListener("click", () => {
            container.style.display = "block"; // Mostra o container inicial
            containerExercice.innerHTML = ""; // Limpa os botões de exercício
            containerExercice.remove(); // Remove o containerExercice do DOM
        });
        containerExercice.appendChild(backButton);

        container.parentNode.appendChild(containerExercice); // Adiciona o containerExercice como irmão de container
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const texto = "Compromisso com o povo e contra qualquer taxa ou aumento de impostos.";
    const elemento = document.getElementById("texto");
    let indice = 0;

    function maquinaEscrever() {
        if (indice < texto.length) {
            elemento.innerHTML += texto.charAt(indice);
            indice++;
            setTimeout(maquinaEscrever, 100); // Velocidade de digitação (em milissegundos)
        }
    }

    maquinaEscrever();
});

function OpenModal(){
    document.getElementById('modal').style.display = 'block'
}


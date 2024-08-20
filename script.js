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

document.getElementById('LerMais').addEventListener('click', function() {
    var button = this;
    var collapse = document.getElementById('collapseExample');
    
    // Usando setTimeout para garantir que o texto mude após a animação de colapso.
    setTimeout(function() {

      if (button.textContent === 'Ler menos'){
        button.textContent = 'Ler mais';
        return;
      }
      if (button.textContent === 'Ler mais') {
        button.textContent = 'Ler menos';
        return;
      } 
    }, 350); // Atraso em ms (igual ao tempo da animação do Bootstrap)
  });


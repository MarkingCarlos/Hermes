const videosMatrix = [
  [ // Página 1
    {
      src: "Imagens/videos/Taxas.mp4",
      poster: "Imagens/taxa coleta.webp",
      muted: true
    },
    {
      src: "Imagens/videos/FuncPublica.mp4",
      poster: "Imagens/Func.png",
      muted: false
    },
    {
      src: "Imagens/videos/Funcoes.mp4",
      poster: "Imagens/FuncaoVereador.png",
      muted: false
    }
  ],
  [ // Página 2
    {
      src: "Imagens/videos/Ministro.mp4",
      poster: "Imagens/Ministro.webp",
      muted: true
    },
    {
      src: "Imagens/videos/VideoSaude.mp4",
      poster: "Imagens/PosterSaude.webp",
      muted: false
    },
    {
      src: "Imagens/videos/VideoEdu.mp4",
      poster: "Imagens/PosterEdu.webp",
      muted: false
    }
  ]
];

const createVideoCard = (video) => {
  return `
    <div class="col centraliza">
      <div class="card" style="width: 18rem">
        <div class="card-body" style="height: 500px; display: flex; flex-direction: column">
          <video src="${video.src}" controls poster="${video.poster}" ${video.muted ? 'muted' : ''} 
                 style="height: 450px; width: auto; border-radius: 10px;"></video>
        </div>
      </div>
    </div>
  `;
};

const createVideoCardMobile = (video) => {
  return `
      <div class="carousel-item">
        <div class="container">
          <div class="row">
            <div class="col centraliza">
              <div class="card" style="width: 18rem">
                <div class="card-body" style="height: 500px; display: flex; flex-direction: column">
                  <video src="${video.src}" controls poster="${video.poster}" ${video.muted ? 'muted' : ''} 
                        style="height: 450px; width: auto; border-radius: 10px;"></video>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  `;
};

const itemCarrosel = document.getElementById('ItemCarrosel');
const itemCarroselPage2 = document.getElementById('ItemCarroselPage2');

const VideoMobile = document.getElementById('VideoMobile');

// Renderiza os vídeos da página 1
videosMatrix[0].forEach(video => {
  itemCarrosel.innerHTML += createVideoCard(video);
  if(videosMatrix[0][0].poster != video.poster){
    VideoMobile.innerHTML += createVideoCardMobile(video);
  }

});

// Renderiza os vídeos da página 2
videosMatrix[1].forEach(video => {
  itemCarroselPage2.innerHTML += createVideoCard(video);
  VideoMobile.innerHTML += createVideoCardMobile(video);

});






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


function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    if (elemento === null){
        console.log("Elemento não encontrado")
    } else {
        return elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];

    const idAudio = `#som_${tecla.classList[1]}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

function tocaSom(idElementoAudio){
    return document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for  (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];

    const idAudio = `#som_${tecla.classList[1]}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    };
}
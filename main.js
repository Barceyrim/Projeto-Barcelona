document.querySelector('.tecla_pom').onclick = tocaSomPom();

function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

 while (contador < 9){

    listaDeTeclas[0].onclick=tocaSomPom;
 }

 listaDeTeclas[1].onclick=tocaSomClip;
 listaDeTeclas[2].onclick=tocaSomTim;
 listaDeTeclas[3].onclick=tocaSomPuff;


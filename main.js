function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for(contador = 0; contador <listaDeTeclas.length; contador++){
 
    const instrumento = listaDeTeclas[contador];

    const tecla = listaDeTeclas[contador];

    const idAudio = `#som_${instrumento}`;
    listaDeTeclas[contador].classList[1];

    tecla.onclick= function(){
        tocaSom(idAudio);
    };
    tecla.onkeydown = function (){
        if(evento.code === 'Space'|| evento.code === 'Enter'){
        tecla.classList.add('ativa');
        }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
    
}







}

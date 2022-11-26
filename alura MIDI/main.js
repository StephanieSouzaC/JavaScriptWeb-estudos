//usando for (para)------------------------------------------------------------------------------------------------------

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio' ){
        elemento.play();
        }
    else{
        alert('Elemento não encontrado ou seletor inválido');
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador ++){

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick =  function(){
        tocaSom(idAudio);
    }
 
    tecla.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}


//usando while (enquanto) -------------------------------------------------------------------------------
/*
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0


while (contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    //tamplete string
    const idAudio = `#som_${instrumento}`;

    //console.log (idAudio);

    tecla.onclick =  function(){
        tocaSom(idAudio);
    }
    
    contador += 1

}
*/


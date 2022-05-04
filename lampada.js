const ligar = document.getElementById ( 'ligar' );
const desligar = document.getElementById ( 'desligar' );
const lamp = document.getElementById( 'lamp' );
const trocar = document.getElementById ( 'trocar' );

function lampadaQuebrada (){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if ( !lampadaQuebrada ()){
        lamp.src = './images/ligada.jpg';
    }
}
function lampOff () {
    if ( !lampadaQuebrada ()){
        lamp.src = './images/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './images/quebrada.jpg';
}

function trocado () {
    lamp.src = './images/desligada.jpg';
}


ligar.addEventListener ( 'click', lampOn );
desligar.addEventListener ( 'click', lampOff );
trocar.addEventListener ( 'click', trocado );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken ); 

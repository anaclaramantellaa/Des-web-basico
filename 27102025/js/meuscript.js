function exibir(){
    document.getElementById('texto').innerHTML = 'Seu mouse está sobre o texto';
}

function ocultar(){
    document.getElementById('texto').innerHTML = '';
}

// Crie uma nova seção no HTML
/*
Desenvolva um botão que ao receber um clique mude a cor de um ou mais elementos
*/

function mudacor(){
    let cor = document.getElementById('cor').style.color;
    if(cor == 'black'){   
    document.getElementById('cor').style.color = 'blue';
    }else{
        document.getElementById('cor').style.color = 'black';
    }
}

function ligar(){
    let estado = document.getElementById('lamp').src;
    if(estado.includes("pic_bulboff.gif")){
        document.getElementById('lamp').src = 'pic_bulbon.gif';
    }else{
        document.getElementById('lamp').src = 'pic_bulboff.gif';
    }
    
}
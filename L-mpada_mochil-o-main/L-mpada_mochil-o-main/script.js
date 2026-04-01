function on(){
    document.querySelector("#lampada").src = "img/ligada.png"
}
function off(){
    document.querySelector("#lampada").src = "img/desligada.png"
}
function quebrar(){
    document.querySelector("#lampada").src = "img/quebrada.png"
}
function piscar(){
    let intervalo = 0
    for(i=0;i<10;i++){
        intervalo += 300
    setTimeout("document.querySelector('#lampada').src = 'img/ligada.png'", intervalo)
        intervalo += 300
    setTimeout("document.querySelector('#lampada').src = 'img/desligada.png'", intervalo)
    }
}

 let lamp = document.querySelector("#lampada")
   
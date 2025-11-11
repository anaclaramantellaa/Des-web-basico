function getDados(){
    let dados = document.querySelector('#email');
    document.getElementById('mail').innerHTML = dados.value;
}
function getDados2(){
    let dados = document.querySelectorAll('input');
    document.getElementById('mail').innerHTML = dados[0].value;
    document.getElementById('nascim').innerHTML = dados[1].value;
}
function getDados3(){
    let dados = querySelectorAll('input');
    let divDados = document.getElementById('dados');
    for(let i=0; i<dados.length; i++){
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = dados[i]. value;
        divDados.appendChild(paragrafo);
    }
}
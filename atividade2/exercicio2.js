let contador = 0;
let intervalo = 0;

const cronometro = document.getElementById('cronometro');
const iniciar = document.getElementById('btn_iniciar');
const pausar = document.getElementById('btn_pausar');
const resetar = document.getElementById('btn_reset');

function incrementar(){
    contador++;
    cronometro.innerText = contador;
}

iniciar.addEventListener('click', () => {
    if(!intervalo){
        intervalo = setInterval(incrementar, 1000);
    }
});

pausar.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = 0;
});

resetar.addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = 0;
    contador = 0;
    cronometro.innerText = contador;
});
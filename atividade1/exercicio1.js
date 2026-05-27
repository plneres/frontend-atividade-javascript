const contadortela = document.querySelector('#contador');
const btnIncremento = document.querySelector('#btn_incremento');
const btnDecremento = document.querySelector('#btn_decremento');
const btnReset = document.querySelector('#btn_reset');
let contador = 0;
btnIncremento.addEventListener('click', () => {
    contador++;
    contadortela.textContent = contador;
});
btnDecremento.addEventListener('click', () => {
    contador--;
    contadortela.textContent = contador;
});
btnReset.addEventListener('click', () => {
    contador = 0;
    contadortela.textContent = contador;
});
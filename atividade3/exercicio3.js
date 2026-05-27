const formulario = document.querySelector('#questionario');
const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const dados = new FormData(formulario);
    const nome = dados.get('nome');
    const email = dados.get('email');
    const curso = dados.get('curso');
    resultado.innerHTML = `<h3>Dados do Formulário</h3>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Curso:</strong> ${curso}</p>`;
});
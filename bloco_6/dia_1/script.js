const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

const labelEstados = document.querySelector('#estados');

function criarCheckboxEstado() {
  for (let i = 0; i < estados.length; i += 1) {
    let option = document.createElement('option');
    option.name = 'cadastro';
    option.innerText = estados[i];
    labelEstados.appendChild(option);
  }
}

window.onload = criarCheckboxEstado;


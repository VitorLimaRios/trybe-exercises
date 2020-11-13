const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

const labelEstados = document.querySelector('#estados');

function criarCheckboxEstado() {
  for (let i = 0; i < estados.length; i += 1) {
    let option = document.createElement('option');
    option.name = 'cadastro';
    option.innerText = estados[i];
    option.value = estados[i];
    labelEstados.appendChild(option);
  }
}

window.onload = criarCheckboxEstado;

const enviar = document.querySelector('#enviar');

function dadosRecebidos() {
  const dados = [];
  
  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const cpf = document.querySelector('#cpf').value;
  const endereco = document.querySelector('#endereco').value;
  const cidade = document.querySelector('#cidade').value;
  const estado = document.querySelector('#estados').value;
  
  const casa = document.querySelector('#casa');
  let moradia;
  if (casa.checked) {
    moradia = 'casa';
  } else {
    moradia = 'apartamento';
  }

  const resumo = document.querySelector('#resumo').value;
  const cargo = document.querySelector('#cargo').value;
  const descricao = document.querySelector('#descricao').value;
  const data = document.querySelector('#data').value;

  dados.push(nome, email, cpf, endereco, cidade, estado, moradia, resumo, cargo, descricao, data);
  return dados;
}

const div = document.querySelector('#mostrarDados');

function mostrarDados() {
  const dados = dadosRecebidos();
  const campos = ['Nome:', 'Email:', 'Cpf:', 'Endereço:', 'Cidade:', 'Estado:', 'Moradia:', 'Resumo do currículo', 'Cargo:', 'Descrição do cargo:', 'Data de inicio:'];

  if (div.children.length > 0) {
    for (let i = campos.length; i >= 0; i -= 1) {
      div.removeChild(div.children[i - 1]);
    }
  }
  

  for (let i = 0; i < campos.length; i += 1) {
    let p = document.createElement('p');
    p.innerText = campos[i] + dados[i];
    div.appendChild(p);
  }
}

enviar.addEventListener('click', mostrarDados);
function abrirPopup() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('popup-overlay').style.display = 'block';
}

function fecharPopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('popup-overlay').style.display = 'none';
}

function enviarFormulario() {
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;

  if (nome && telefone && email) {
    alert(
      'Formulário enviado!\n' +
        'Nome: ' +
        nome +
        '\nTelefone: ' +
        telefone +
        '\nE-mail: ' +
        email,
    );
    fecharPopup();
  }
}
// botao informações
function mostrarMensagem() {
  const mensagem = document.createElement('div');
  mensagem.textContent =
    'Para este evento, solicitamos a entrega de 1kg de alimento não perecível ou um brinquedo em bom estado. Vamos juntos ajudar!';
  mensagem.style.position = 'fixed';
  mensagem.style.left = '50%';
  mensagem.style.top = '50%';
  mensagem.style.transform = 'translate(-50%, -50%)';
  mensagem.style.padding = '30px';
  mensagem.style.marginRight = '10px';
  mensagem.style.backgroundColor = '#d0d0d0de';
  mensagem.style.border = '3px solid #4eabf1';
  mensagem.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  mensagem.style.zIndex = '1000';
  mensagem.style.display = 'inline-block';

  const botaoFechar = document.createElement('button');
  botaoFechar.textContent = 'FECHAR';
  botaoFechar.style.marginTop = '10px';
  botaoFechar.onclick = () => document.body.removeChild(mensagem);

  mensagem.appendChild(botaoFechar);
  document.body.appendChild(mensagem);
}
// botao local
function mostrarlocal() {
  const mensagem = document.createElement('div');
  mensagem.textContent =
    'R. José Ferreira Magalhães, 341 - Floramar, Belo Horizonte - MG, 31742-093, Brasil';
  mensagem.style.position = 'fixed';
  mensagem.style.left = '50%';
  mensagem.style.top = '50%';
  mensagem.style.transform = 'translate(-50%, -50%)';
  mensagem.style.padding = '30px';
  mensagem.style.marginRight = '10px';
  mensagem.style.backgroundColor = '#d0d0d0de';
  mensagem.style.border = '3px solid #4eabf1';
  mensagem.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  mensagem.style.zIndex = '1000';
  mensagem.style.display = 'inline-block';

  const botaoFechar = document.createElement('button');
  botaoFechar.textContent = 'FECHAR';
  botaoFechar.style.marginTop = '10px';
  botaoFechar.onclick = () => document.body.removeChild(mensagem);

  mensagem.appendChild(botaoFechar);
  document.body.appendChild(mensagem);
}

// botao informações
function mostrarMensagem2() {
  const mensagem = document.createElement('div');
  mensagem.textContent =
    'Para este evento, solicitamos a entrega de um sache para cães ou gatos. Vamos juntos ajudar!';
  mensagem.style.position = 'fixed';
  mensagem.style.left = '50%';
  mensagem.style.top = '50%';
  mensagem.style.transform = 'translate(-50%, -50%)';
  mensagem.style.padding = '30px';
  mensagem.style.marginRight = '10px';
  mensagem.style.backgroundColor = '#d0d0d0de';
  mensagem.style.border = '3px solid #4eabf1';
  mensagem.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  mensagem.style.zIndex = '1000';
  mensagem.style.display = 'inline-block';

  const botaoFechar = document.createElement('button');
  botaoFechar.textContent = 'FECHAR';
  botaoFechar.style.marginTop = '10px';
  botaoFechar.onclick = () => document.body.removeChild(mensagem);

  mensagem.appendChild(botaoFechar);
  document.body.appendChild(mensagem);
}
// botao local
function mostrarlocal2() {
  const mensagem = document.createElement('div');
  mensagem.textContent =
    'Av. Amazonas nº 2218, bairro Santo Agostinho - Belo Horizonte/MG';
  mensagem.style.position = 'fixed';
  mensagem.style.left = '50%';
  mensagem.style.top = '50%';
  mensagem.style.transform = 'translate(-50%, -50%)';
  mensagem.style.padding = '30px';
  mensagem.style.marginRight = '10px';
  mensagem.style.backgroundColor = '#d0d0d0de';
  mensagem.style.border = '3px solid #4eabf1';
  mensagem.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  mensagem.style.zIndex = '1000';
  mensagem.style.display = 'inline-block';

  const botaoFechar = document.createElement('button');
  botaoFechar.textContent = 'FECHAR';
  botaoFechar.style.marginTop = '10px';
  botaoFechar.onclick = () => document.body.removeChild(mensagem);

  mensagem.appendChild(botaoFechar);
  document.body.appendChild(mensagem);
}
function exibirMensagem() {
  const mensagem = document.getElementById('mensagem');
  if (mensagem.style.display === 'none') {
    mensagem.style.display = 'block';
  } else {
    mensagem.style.display = 'none';
  }
}

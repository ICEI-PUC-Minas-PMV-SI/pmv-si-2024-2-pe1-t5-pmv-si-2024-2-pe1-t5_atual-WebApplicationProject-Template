// Seleção de elementos
const editButton = document.querySelector('.edit-btn');
const bioTextarea = document.querySelector('.profile-info textarea');
const userDetails = document.querySelectorAll('.profile-info li');

// Função para alternar modo de edição
editButton.addEventListener('click', () => {
    if (bioTextarea.disabled) {
        bioTextarea.disabled = false;
        bioTextarea.focus();
        editButton.textContent = 'Salvar';
    } else {
        bioTextarea.disabled = true;
        editButton.textContent = 'Editar';
        alert('Biografia atualizada: ' + bioTextarea.value);
    }
});

// Validação e envio do formulário de contato
const contactButton = document.querySelector('#footer-contato button');
const contactInputs = document.querySelectorAll('#footer-contato input, #footer-contato textarea');

contactButton.addEventListener('click', () => {
    const [name, lastName, email, message] = Array.from(contactInputs).map(input => input.value.trim());
    if (!name || !lastName || !email || !message) {
        alert('Por favor, preencha todos os campos do formulário.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Por favor, insira um e-mail válido.');
    } else {
        alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
        contactInputs.forEach(input => (input.value = '')); // Limpar campos
    }
});

// Destacar links do menu ao passar o mouse
const navLinks = document.querySelectorAll('.opcao-pagina');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => link.classList.add('hover'));
    link.addEventListener('mouseout', () => link.classList.remove('hover'));
});

// Estilo adicional ao passar o mouse (opcional)
const style = document.createElement('style');
style.textContent = `
    .opcao-pagina.hover {
        color: #fff;
        background-color: #004c8c;
        padding: 5px;
        border-radius: 5px;
    }
`;
document.head.appendChild(style);

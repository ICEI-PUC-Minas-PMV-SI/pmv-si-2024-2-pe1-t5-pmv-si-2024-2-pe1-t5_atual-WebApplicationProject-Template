const openLoginModalBtn = document.getElementById("openLoginModalBtn");
const openSignupModalBtn = document.getElementById("openSignupModalBtn");
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const closeButtons = document.querySelectorAll(".close");

// Abrir o modal de login
openLoginModalBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

// Abrir o modal de cadastro
openSignupModalBtn.addEventListener("click", () => {
  signupModal.style.display = "block";
});

// Fechar os modais ao clicar no "x"
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
  });
});

// Fechar os modais ao clicar fora deles
window.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target === signupModal) {
    signupModal.style.display = "none";
  }
});

// Salvar informações do cadastro no localStorage
signupModal.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const newPassword = document.getElementById("newPassword").value;
  const userType = document.getElementById("userType").value;

  if (username && email && newPassword && userType) {
    const userData = {
      username,
      email,
      newPassword,
      userType,
    };

    // Salvar no localStorage (email como chave única)
    localStorage.setItem(email, JSON.stringify(userData));

    alert("Cadastro realizado com sucesso!");
    signupModal.style.display = "none";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

// Validar login e exibir informações salvas
loginModal.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Verificar se os dados estão salvos no localStorage
  const storedUser = localStorage.getItem(email);
  if (storedUser) {
    const userData = JSON.parse(storedUser);
    if (userData.newPassword === password) {
      alert(`Bem-vindo, ${userData.username}!`);
      console.log("Dados do usuário:", userData);
      loginModal.style.display = "none";
    } else {
      alert("Senha incorreta.");
    }
  } else {
    alert("Usuário não encontrado.");
  }
});

function logout() {
  sessionStorage.clear();
  alert("Você saiu com sucesso!");
  location.reload();
}

function mostrarInformacoesUsuario(usuario) {
  const userInfo = document.createElement("div");
  userInfo.innerHTML = `<h3>Bem-vindo, ${usuario.username}!</h3>
                        <p>Tipo de usuário: ${usuario.userType}</p>`;
  document.body.prepend(userInfo);
}

function mostrarMensagem(mensagem, tipo = "erro") {
  const mensagemDiv = document.getElementById("mensagem");
  mensagemDiv.textContent = mensagem;
  mensagemDiv.style.color = tipo === "sucesso" ? "green" : "red";
}

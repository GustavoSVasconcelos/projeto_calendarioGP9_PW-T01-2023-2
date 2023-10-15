// Função para verificar o login e redirecionar
function logar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // Obter os dados de cadastro do localStorage
    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar se o email e a senha correspondem a um usuário
    var usuario = usuarios.find(function(usuario) {
        return usuario.email === email && usuario.senha === senha;
    });

    if (usuario) {
        // Login com sucesso, redirecione para teste.html
        alert("Sucesso!");
        window.location.href = "#";
    } else {
        alert("Login falhou. Verifique seu email e senha.");
    }
}

function redirecionarParaCadastro(){
    window.location.href = "cadastro.html";

}
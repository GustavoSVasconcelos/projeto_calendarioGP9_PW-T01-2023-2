//Código para mostrar/esconder senha no perfil 
document.getElementById('togglePasswordButton').addEventListener('click', function () {
    var passwordField = document.getElementById('password');
    var eyeIcon = document.getElementById('eye-icon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
});

function redefinirSenha() {
    var email = document.getElementById("email").value;
    var novaSenha = document.getElementById("nova-senha").value;
    var confirmaSenha = document.getElementById("confirma-senha").value;

    if (novaSenha === confirmaSenha) {
        var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        var usuario = usuarios.find(function (usuario) {
            return usuario.email === email;
        });

        if (usuario) {
            // Atualize a senha do usuário no localStorage
            usuario.senha = novaSenha;
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            alert("Senha redefinida com sucesso.");
            location.href = "index.html";
        } else {
            alert("Usuário não encontrado.");
        }
    } else {
        alert("As senhas não coincidem.");
    }
}

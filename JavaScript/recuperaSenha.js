function redefinirSenha() {
    var email = document.getElementById("email").value;
    var novaSenha = document.getElementById("nova-senha").value;
    var confirmaSenha = document.getElementById("confirma-senha").value;

    if (novaSenha === confirmaSenha) {
        var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        var usuario = usuarios.find(function(usuario) {
            return usuario.email === email;
        });

        if (usuario) {
            // Atualize a senha do usuário no localStorage
            usuario.senha = novaSenha;
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            alert("Senha redefinida com sucesso.");
            location.href = "login.html";
        } else {
            alert("Usuário não encontrado.");
        }
    } else {
        alert("As senhas não coincidem.");
    }
}

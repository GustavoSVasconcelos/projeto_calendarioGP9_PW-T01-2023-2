function criarUsuario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    var usuarioExistente = usuarios.find(function(usuario) {
        return usuario.email === email;
    });

    if (usuarioExistente) {
        alert("Usuário com este e-mail já cadastrado.");
    } else {
        var novoUsuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        usuarios.push(novoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso!");
    }
}

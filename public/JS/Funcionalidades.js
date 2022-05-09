/* Header inicial */
function go_cadastro() {
    div_cadastro.style.display = 'block';
}

function go_login() {
    div_login.style.display = 'block';
}

/* Header principal */

function go_index() {
    window.location.href = "Index.html";
}

/* Tela cadastro */
function go_indexByCadastro() {
    div_cadastro.style.display = 'none';
    limpar_cadastro();
}

function limpar_cadastro() {
    input_nome.value = "";
    input_apelido.value = "";
    input_data_nascimento.value = "";
    input_email.value = "";
    input_senha.value = "";
    input_confirmar_senha.value = "";
    input_nome.style.border = '2px solid gray';
    input_apelido.style.border = '2px solid gray';
    input_data_nascimento.style.border = '2px solid gray';
    input_email.style.border = '2px solid gray';
    input_senha.style.border = '2px solid gray'
    input_confirmar_senha.style.border = '2px solid gray'
}

function cadastrar() {
    var nome = input_nome.value;
    var apelido = input_apelido.value;
    var nascimento = input_data_nascimento.value;
    var email = input_email.value.toLowerCase();
    var senha = input_senha.value;
    var confirmarSenha = input_confirmar_senha.value;

    if (nome == "" || nome.length > 90) {
        input_nome.style.border = '2px solid red'
    } else {
        input_nome.style.border = '2px solid green'
    }

    if (apelido == "" || apelido.length > 45) {
        input_apelido.style.border = '2px solid red'
    } else {
        input_apelido.style.border = '2px solid green'
    }

    if (nascimento == "" || nascimento.length < 10) {
        input_data_nascimento.style.border = '2px solid red'
    } else {
        input_data_nascimento.style.border = '2px solid green'
    }

    if (email == "" || email.indexOf('@') <= 0 || email.indexOf('.com') == -1 || email.length > 90) {
        input_email.style.border = '2px solid red'
    } else {
        input_email.style.border = '2px solid green'
    }

    if (senha == confirmarSenha && senha.length > 0 && senha.length <= 45) {
        input_senha.style.border = '2px solid green'
        input_confirmar_senha.style.border = '2px solid green'
    } else {
        input_senha.style.border = '2px solid red'
        input_confirmar_senha.style.border = '2px solid red'
    }

    if (input_nome.style.border == 'red' || input_apelido.style.border == 'red' || input_data_nascimento.style.border == 'red' ||
        input_email.style.border == 'red' || input_senha.style.border == 'red' || input_confirmar_senha.style.border == 'red') {
        alert('Não foi possível realizar cadastro! Verifique os campos novamente.');
    }
    else {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nome,
                apelidoServer: apelido,
                nascimentoServer: nascimento,
                emailServer: email,
                senhaServer: senha
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                div_cadastro.style.display = 'none';
                div_login.style.display = 'block';
                limpar_cadastro();
            } else {
                input_email.style.border = '2px solid red';
                // input_email.placeholder = 'Email já existe!'
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }
}

/* Tela login */
function go_indexByLogin() {
    div_login.style.display = 'none';
    limpar_login();
}

function entrar() {
  
    var emailVar = input_email_login.value;
    var senhaVar = input_senha_login.value;

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (emailVar == "" || senhaVar == "") {
        input_email_login.style.border = '2px solid red';
        input_senha_login.style.border = '2px solid red';
        return false;
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.APELIDO_USUARIO = json.apelido;
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.ID_USUARIO = json.idUsuario;

                setTimeout(function () {
                    alert("Bem vindo");
                    window.location = "Principal.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {
            alert("Usuário ou senha incorretos");
            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function limpar_login() {
    input_email_login.value = "";
    input_senha_login.value = "";
    input_email_login.style.border = '2px solid gray';
    input_senha_login.style.border = '2px solid gray';
}

// sessão
function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email != null && nome != null) {
        window.alert(`Seja bem-vindo, ${nome}!`);
    } else {
        window.location = "Index.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "Index.html";
}
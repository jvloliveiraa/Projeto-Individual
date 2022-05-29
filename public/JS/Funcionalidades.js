/* Header inicial */
function go_cadastro() {
    div_cadastro.style.display = 'block';
}

function go_login() {
    div_login.style.display = 'block';
}

/* Header principal */
var contador_perfil = 0;

function open_perfil(){
    if(contador_perfil % 2 == 0){
        perfil_menu.style.display = 'flex';
        contador_perfil++;
    }
    else{
        perfil_menu.style.display = 'none';
        contador_perfil++;
    }
}

function open_alterar_senha(){
    div_alterar_senha.style.display = 'block';
}

function close_alterar_senha(){
    div_alterar_senha.style.display = 'none';
    input_senha_atual.value = '';
    input_nova_senha.value = '';
    input_confirmar_nova_senha.value = '';
    input_senha_atual.style.border = '2px solid gray';
    input_nova_senha.style.border = '2px solid gray';
    input_confirmar_nova_senha.style.border = '2px solid gray';
    erro_todos_alterar_senha.style.display = 'none';
    erro_confirmar_senha_atual.style.display = 'none';
    erro_nova_senha.style.display = 'none';
    erro_senha_atual.style.display = 'none';
}

function go_home(){
    window.location.href = "Principal.html"
}

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
    input_senha.style.border = '2px solid gray';
    input_confirmar_senha.style.border = '2px solid gray';
    erro_nome.innerHTML = "";
    erro_apelido.innerHTML = "";
    erro_nascimento.innerHTML = "";
    erro_email.innerHTML = "";
    erro_senha.innerHTML = "";
    erro_confirmar_senha.innerHTML = "";
    erro_todos.innerHTML = "";
}

function cadastrar() {
    var nome = input_nome.value;
    var apelido = input_apelido.value;
    var nascimento = input_data_nascimento.value;
    var email = input_email.value.toLowerCase();
    var senha = input_senha.value;
    var confirmarSenha = input_confirmar_senha.value;

    if (nome == "" || nome.length < 4 || nome.length > 90) {
        input_nome.style.border = '2px solid red'
        erro_nome.innerHTML = `Nome deve conter entre 4 e 90 caracteres`;
        erro_nome.style.display = 'block';
    } else {
        input_nome.style.border = '2px solid green'
        erro_nome.innerHTML = ``;
    }

    if (apelido == "" || apelido.length < 4 || apelido.length > 45) {
        input_apelido.style.border = '2px solid red'
        erro_apelido.innerHTML = `Apelido deve conter entre 4 e 90 caracteres`;
        erro_apelido.style.display = 'block';
    } else {
        input_apelido.style.border = '2px solid green'
        erro_apelido.innerHTML = ``;
    }

    if (nascimento == "" || nascimento.length < 10) {
        input_data_nascimento.style.border = '2px solid red'
        erro_nascimento.innerHTML = `Data de nascimento inválida`;
        erro_nascimento.style.display = 'block';
    } else {
        input_data_nascimento.style.border = '2px solid green'
        erro_nascimento.innerHTML = ``;
    }

    if (email == "" || email.indexOf('@') <= 0 || email.indexOf('.com') < email.indexOf('@') ||
        email.length > 90) {
        input_email.style.border = '2px solid red'
        erro_email.innerHTML = `Email inválido`;
        erro_email.style.display = 'block';
    } else {
        input_email.style.border = '2px solid green'
        erro_email.innerHTML = ``;
    }

    if (senha == confirmarSenha && senha.length >= 4 && senha.length <= 45) {
        input_senha.style.border = '2px solid green'
        input_confirmar_senha.style.border = '2px solid green'
        erro_senha.innerHTML = ``;
        erro_confirmar_senha.innerHTML = ``;
    } else {
        erro_senha.innerHTML = `As senhas devem conter no mínimo 4 caracteres e devem estar iguais`;
        erro_confirmar_senha.innerHTML = `As senhas devem conter no mínimo 4 caracteres e devem estar iguais`;
        erro_senha.style.display = 'block';
        erro_confirmar_senha.style.display = 'block';
        input_senha.style.border = '2px solid red';
        input_confirmar_senha.style.border = '2px solid red';
    }

    if (input_nome.style.border == '2px solid red' || input_apelido.style.border == '2px solid red' ||
        input_data_nascimento.style.border == '2px solid red' || input_email.style.border == '2px solid red' ||
        input_senha.style.border == '2px solid red' || input_confirmar_senha.style.border == '2px solid red') {
        erro_todos.innerHTML = 'Não foi possível realizar cadastro! Verifique os campos novamente.';
        erro_todos.style.display = 'block';
    }
    else {
        erro_todos.innerHTML = '';
        fetch("/usuarios/cadastrar",{
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
                senhaServer: senha,
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                div_cadastro.style.display = 'none';
                div_login.style.display = 'block';
                limpar_cadastro();
            } else {
                input_email.style.border = '2px solid red';
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

function alterar_senha(){
    
    var senha_atual = input_senha_atual.value;
    var nova_senha = input_nova_senha.value;
    var confirmar_senha = input_confirmar_nova_senha.value;

    if (senha_atual != sessionStorage.SENHA_USUARIO) {
        input_senha_atual.style.border = '2px solid red';
        erro_senha_atual.style.display = 'block'
    }
    else{
        input_senha_atual.style.border = '2px solid green';
        erro_senha_atual.style.display = 'none'
    }

    if(nova_senha == "" || nova_senha.length < 5){
        input_nova_senha.style.border = '2px solid red';
        erro_nova_senha.style.display = 'block';
        erro_todos_alterar_senha.style.display = 'block'
    }
    else{
        input_nova_senha.style.border = '2px solid green';
        erro_nova_senha.style.display = 'none';
    }

    if(confirmar_senha != nova_senha){
        input_confirmar_nova_senha.style.border = '2px solid red';
        erro_confirmar_senha_atual.style.display = 'block';
    }
    else{
        input_confirmar_nova_senha.style.border = '2px solid green';
        erro_confirmar_senha_atual.style.display = 'none';
    }

    if(input_senha_atual.style.border == '2px solid red' || input_nova_senha.style.border == '2px solid red'
        || input_confirmar_nova_senha.style.border == '2px solid red'){
            erro_todos_alterar_senha.style.display = 'block';
    }
     else {
        erro_todos_alterar_senha.style.display = 'none';

        fetch("/usuarios/alterar_senha", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                senha_atualServer: senha_atual,
                nova_senhaServer: nova_senha
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    setTimeout(function () {
                        alterar_load.style.display = 'block';
                    }, 1000); // apenas para exibir o loading

                });

            } else {
                erro_todos_alterar_senha.style.display = 'block';
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
}

function entrar() {

    var emailVar = input_email_login.value;
    var senhaVar = input_senha_login.value;

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (emailVar == "" || senhaVar == "") {
        input_email_login.style.border = '2px solid red';
        input_senha_login.style.border = '2px solid red';
        erro_todos_login.innerHTML = 'Preencha todos os campos';
        erro_todos_login.style.display = 'block';
        return false;
    }
    else {
        erro_todos_login.style.display = 'none';
        erro_todos_login.innerHTML = '';
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

                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.APELIDO_USUARIO = json.apelido;
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.PONTO_USUARIO = json.qtdPontos;
                    sessionStorage.SENHA_USUARIO = json.senha;

                    setTimeout(function () {
                        carregando.style.display = 'block';
                        window.location = "Principal.html";
                    }, 1000); // apenas para exibir o loading

                });

            } else {
                erro_todos_login.innerHTML = "Usuário ou senha incorretos";
                erro_todos_login.style.display = 'block';
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
}

function finalizarCarregando() {
    carregando.style.display = 'none';
}

function limpar_login() {
    input_email_login.value = "";
    input_senha_login.value = "";
    input_email_login.style.border = '2px solid gray';
    input_senha_login.style.border = '2px solid gray';
    erro_todos_login.style.display = 'none'
}

// sessão
function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var apelido = sessionStorage.APELIDO_USUARIO;

    if (email != null && nome != null && apelido != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        perfil_usuario.innerHTML = `Olá, ${apelido}`;
    } else {
        window.location = "Index.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "Index.html";
}
var contador = 0;
var pontos = 0;

function proxima_pergunta() {
    if (contador == 0) {
        barra_pergunta.innerHTML = `<h4> 1/10 </h4>`;
        intro.style.display = 'none';
        intro_button.style.display = 'none';
        pergunta1.style.display = 'flex';
        quiz_button.style.display = 'flex';
        contador++;
    }
    else if (contador == 1) {
        if (resposta1.checked) {      
            pontos++;
            mostrar_certo();
            setTimeout(fechar_certo, 600);
            setTimeout(function () {
                pergunta1.style.display = 'none';
                pergunta2.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 2/10 </h4>`;
                selecione.style.display = 'none'
                contador++;              
            }, 1000);
        }
        else if (resposta1W1.checked || resposta1W2.checked || resposta1W3.checked) {
            mostrar_errado();
            setTimeout(fechar_errado, 600);
            setTimeout(function () {
                pergunta1.style.display = 'none';
                pergunta2.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 2/10 </h4>`;
                selecione.style.display = 'none'
                contador++;             
            }, 1000);
        }
        else {
            selecione.style.display = 'block'
        }
    }
    else if (contador == 2) {
        if (resposta2.checked) {
            mostrar_certo();
            setTimeout(fechar_certo, 600);
            setTimeout(function () {       
                pontos++;
                pergunta2.style.display = 'none';
                pergunta3.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 3/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else if (resposta2W1.checked || resposta2W2.checked || resposta2W3.checked) {
            mostrar_errado();
            setTimeout(fechar_errado, 600);
            setTimeout(function () {       
                pergunta2.style.display = 'none';
                pergunta3.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 3/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else {
            selecione.style.display = 'block'
        }
    }
    else if (contador == 3) {
        if (resposta3.checked) {
            mostrar_certo();
            setTimeout(fechar_certo, 600);
            setTimeout(function () {       
                pontos++;
                pergunta3.style.display = 'none';
                pergunta4.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 4/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else if (resposta3W1.checked || resposta3W2.checked || resposta3W3.checked) {
            mostrar_errado();
            setTimeout(fechar_errado, 600);
            setTimeout(function () {       
                pergunta3.style.display = 'none';
                pergunta4.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 4/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else {
            selecione.style.display = 'block'
        }
    }
    else if (contador == 4) {
        if (resposta4.checked) {
            mostrar_certo();
            setTimeout(fechar_certo, 600);
            setTimeout(function () {       
                pontos++;
                pergunta4.style.display = 'none';
                pergunta5.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 5/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else if (resposta4W1.checked || resposta4W2.checked || resposta4W3.checked) {
            mostrar_errado();
            setTimeout(fechar_errado, 600);
            setTimeout(function () {       
                pergunta4.style.display = 'none';
                pergunta5.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 5/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else {
            selecione.style.display = 'block'
        }
    }
    else if (contador == 5) {
        if (resposta5.checked) {
            mostrar_certo();
            setTimeout(fechar_certo, 600);
            setTimeout(function () {       
                pontos++;
                pergunta5.style.display = 'none';
                pergunta6.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 6/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else if (resposta5W1.checked || resposta5W2.checked || resposta5W3.checked) {
            mostrar_errado();
            setTimeout(fechar_errado, 600);
            setTimeout(function () {       
                pergunta5.style.display = 'none';
                pergunta6.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 6/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else {
            selecione.style.display = 'block'
        }
    }
    else if (contador == 6) {
        if (resposta6.checked) {
            mostrar_certo();
            setTimeout(fechar_certo, 600);
            setTimeout(function () {       
                pontos++;
                pergunta6.style.display = 'none';
                pergunta7.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 7/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else if (resposta6W1.checked || resposta6W2.checked || resposta6W3.checked) {
            mostrar_errado();
            setTimeout(fechar_errado, 600);
            setTimeout(function () {       
                pergunta6.style.display = 'none';
                pergunta7.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 7/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else {
            selecione.style.display = 'block'
        }
    }
    else if (contador == 7) {
        if (resposta7.checked) {
            mostrar_certo();
            setTimeout(fechar_certo, 600);
            setTimeout(function () {       
                pontos++;
                pergunta7.style.display = 'none';
                pergunta8.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 8/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else if (resposta7W1.checked || resposta7W2.checked || resposta7W3.checked) {
            mostrar_errado();
            setTimeout(fechar_errado, 600);
            setTimeout(function () {       
                pergunta7.style.display = 'none';
                pergunta8.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 8/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else {
            selecione.style.display = 'block'
        }
    }
    else if (contador == 8) {
        if (resposta8.checked) {
            mostrar_certo();
            setTimeout(fechar_certo, 600);
            setTimeout(function () {       
                pontos++;
                pergunta8.style.display = 'none';
                pergunta9.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 9/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else if (resposta8W1.checked || resposta8W2.checked || resposta8W3.checked) {
            mostrar_errado();
            setTimeout(fechar_errado, 600);
            setTimeout(function () {       
                pergunta8.style.display = 'none';
                pergunta9.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 9/10 </h4>`;
                selecione.style.display = 'none'
                contador++;
            }, 1000);
        }
        else {
            selecione.style.display = 'block'
        }
    }
    else if (contador == 9) {
        if (resposta9.checked) {
            mostrar_certo();
            setTimeout(fechar_certo, 600);
            setTimeout(function () {       
                pontos++;
                pergunta9.style.display = 'none';
                pergunta10.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 10/10 </h4>`;
                selecione.style.display = 'none'
                button_proxima.innerHTML = 'Finalizar'
                contador++;
            }, 1000);
        }
        else if (resposta9W1.checked || resposta9W2.checked || resposta9W3.checked) {
            mostrar_errado();
            setTimeout(fechar_errado, 600);
            setTimeout(function () {       
                pergunta9.style.display = 'none';
                pergunta10.style.display = 'flex';
                barra_pergunta.innerHTML = `<h4> 10/10 </h4>`;
                selecione.style.display = 'none'
                button_proxima.innerHTML = 'Finalizar'
                contador++;
            }, 1000);
        }
        else {
            selecione.style.display = 'block'
        }
    }
    else if(contador == 10) {
        if (resposta10.checked) {
            mostrar_certo();
            setTimeout(fechar_certo, 600);
            setTimeout(function () {       
                pontos++;
                cadastrarPontos(()=>{
                    atualizarTudo(()=>{
                        mostrar_na_tela()
                    });
                })
            }, 1000);
        }
        else if (resposta10W1.checked || resposta10W2.checked || resposta10W3.checked) {
            mostrar_errado();
            setTimeout(fechar_errado, 600);
            setTimeout(function () {       
                cadastrarPontos(()=>{
                    atualizarTudo(()=>{
                        mostrar_na_tela()
                    });
                })
            }, 1000);
        }
        else {
            selecione.style.display = 'block'
        }
    }
}

function mostrar_certo(){
    certo_quiz.style.display = 'block'
}

function fechar_certo(){
    certo_quiz.style.display = 'none'
}

function mostrar_errado(){
    errado_quiz.style.display = 'block'
}

function fechar_errado(){
    errado_quiz.style.display = 'none'
}

function mostrar_na_tela(){           
    pergunta10.style.display = 'none';
    resultado_quiz.style.display = 'flex';
    barra_pergunta.innerHTML = `<h4> Resultados </h4>`;
    selecione.style.display = 'none'
    button_proxima.style.display = 'none'
    resultado_button.style.display = 'flex'
    resposta_correta.innerHTML = `${pontos}/10`;
    resposta_errada.innerHTML = `${10 - pontos}/10`;
    pontuacao_total.innerHTML = sessionStorage.PONTO_USUARIO;
    contador = 0;
    pontos = 0;
}

function go_ranking() {
    window.location.href = "Ranking.html";
}

function go_quiz_again(){
    window.location.href = "Quiz.html"
}

function cadastrarPontos(_callback) {
    var idUsuario = sessionStorage.ID_USUARIO;
    var pontuacao = pontos;
    var qtdPontos = sessionStorage.PONTO_USUARIO;

    fetch("/usuarios/cadastrarPontos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuario,
            pontuacaoServer: pontuacao,
            qtdPontosServer: qtdPontos
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            _callback();
        } else {
            throw ("Houve um erro ao tentar cadastrar os pontos");
        }
    }).catch(function (resposta) {
        console.log(`Erro do catch: ${resposta}`);
    });

    return false;
}

function atualizarTudo(_callback) {

    var idUsuario = sessionStorage.ID_USUARIO;

fetch(`/usuarios/atualizarTudo/${idUsuario}`)
    .then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.PONTO_USUARIO = json.qtdPontos;
                _callback();
            });

        } else {
            console.log("Erro ao atualizar tudo");
            resposta.text().then(texto => {
                _callback();
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

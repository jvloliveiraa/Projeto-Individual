var contador = 0;
var pontos = 0;

function proxima_pergunta(){
    if(contador == 0){
        barra_pergunta.innerHTML = `<h4> 1/10 </h4>`;
        intro.style.display = 'none';
        intro_button.style.display = 'none';
        pergunta1.style.display = 'flex';
        quiz_button.style.display = 'flex';


        contador++;
    }
    else if(contador == 1){
        if(resposta1.checked){
            alert('Está certo')
            pontos++;
            pergunta1.style.display = 'none';
            pergunta2.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 2/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else if(resposta1W1.checked || resposta1W2.checked || resposta1W3.checked){
            alert('Errado')
            pergunta1.style.display = 'none';
            pergunta2.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 2/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else{
            selecione.style.display = 'block'
        }
    }
    else if(contador == 2){
        if(resposta2.checked){
            alert('Está certo')
            pontos++;
            pergunta2.style.display = 'none';
            pergunta3.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 3/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else if(resposta2W1.checked || resposta2W2.checked || resposta2W3.checked){
            alert('Errado')
            pergunta2.style.display = 'none';
            pergunta3.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 3/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else{
            selecione.style.display = 'block'
        }
    }
    else if(contador == 3){
        if(resposta3.checked){
            alert('Está certo')
            pontos++;
            pergunta3.style.display = 'none';
            pergunta4.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 4/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else if(resposta3W1.checked || resposta3W2.checked || resposta3W3.checked){
            alert('Errado')
            pergunta3.style.display = 'none';
            pergunta4.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 4/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else{
            selecione.style.display = 'block'
        }
    }
    else if(contador == 4){
        if(resposta4.checked){
            alert('Está certo')
            pontos++;
            pergunta4.style.display = 'none';
            pergunta5.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 5/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else if(resposta4W1.checked || resposta4W2.checked || resposta4W3.checked){
            alert('Errado')
            pergunta4.style.display = 'none';
            pergunta5.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 5/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else{
            selecione.style.display = 'block'
        }
    }
    else if(contador == 5){
        if(resposta5.checked){
            alert('Está certo')
            pontos++;
            pergunta5.style.display = 'none';
            pergunta6.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 6/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else if(resposta5W1.checked || resposta5W2.checked || resposta5W3.checked){
            alert('Errado')
            pergunta5.style.display = 'none';
            pergunta6.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 6/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else{
            selecione.style.display = 'block'
        }
    }
    else if(contador == 6){
        if(resposta6.checked){
            alert('Está certo')
            pontos++;
            pergunta6.style.display = 'none';
            pergunta7.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 7/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else if(resposta6W1.checked || resposta6W2.checked || resposta6W3.checked){
            alert('Errado')
            pergunta6.style.display = 'none';
            pergunta7.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 7/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else{
            selecione.style.display = 'block'
        }
    }
    else if(contador == 7){
        if(resposta7.checked){
            alert('Está certo')
            pontos++;
            pergunta7.style.display = 'none';
            pergunta8.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 8/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else if(resposta7W1.checked || resposta7W2.checked || resposta7W3.checked){
            alert('Errado')
            pergunta7.style.display = 'none';
            pergunta8.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 8/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else{
            selecione.style.display = 'block'
        }
    }
    else if(contador == 8){
        if(resposta8.checked){
            alert('Está certo')
            pontos++;
            pergunta8.style.display = 'none';
            pergunta9.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 9/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else if(resposta8W1.checked || resposta8W2.checked || resposta8W3.checked){
            alert('Errado')
            pergunta8.style.display = 'none';
            pergunta9.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 9/10 </h4>`;
            selecione.style.display = 'none'
            contador++;
        }
        else{
            selecione.style.display = 'block'
        }
    }
    else if(contador == 9){
        if(resposta9.checked){
            alert('Está certo')
            pontos++;
            pergunta9.style.display = 'none';
            pergunta10.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 10/10 </h4>`;
            selecione.style.display = 'none'
            button_proxima.innerHTML = 'Finalizar'
            contador++;
        }
        else if(resposta9W1.checked || resposta9W2.checked || resposta9W3.checked){
            alert('Errado')
            pergunta9.style.display = 'none';
            pergunta10.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> 10/10 </h4>`;
            selecione.style.display = 'none'
            button_proxima.innerHTML = 'Finalizar'
            contador++;
        }
        else{
            selecione.style.display = 'block'
        }
    }
    else{
        if(resposta10.checked){
            alert('Está certo')
            pontos++;
            cadastrarPontos();
            pergunta10.style.display = 'none';
            resultado_quiz.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> Resultados </h4>`;
            selecione.style.display = 'none'
            button_proxima.style.display = 'none'
            resultado_button.style.display = 'flex'
            resposta_correta.innerHTML = `${pontos}/10`;
            resposta_errada.innerHTML = `${10 - pontos}`;
            // pontuacao_total.innerHTML = "";
            contador++;
        }
        else if(resposta10W1.checked || resposta10W2.checked || resposta10W3.checked){
            alert('Errado')
            cadastrarPontos();
            pergunta10.style.display = 'none';
            resultado_quiz.style.display = 'flex';
            barra_pergunta.innerHTML = `<h4> Resultados </h4>`;
            selecione.style.display = 'none'
            button_proxima.style.display = 'none'
            resultado_button.style.display = 'flex'
            resposta_correta.innerHTML = `${pontos}/10`;
            resposta_errada.innerHTML = `${10 - pontos}/10`;
            // pontuacao_total.innerHTML = "";
            contador++;
        }
        else{
            selecione.style.display = 'block'
        }
    }
}

function go_ranking(){
    window.location.href = "Ranking.html";
}

function cadastrarPontos() {
    var idUsuario = sessionStorage.ID_USUARIO;
    var pontuacao = pontos;

        fetch("/usuarios/cadastrarPontos",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                idUsuarioServer: idUsuario,
                pontuacaoServer: pontuacao
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                console.log('Deu bom');
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }
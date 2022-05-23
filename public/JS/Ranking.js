var armazenamentoUsuario = [];
var armazenamentoPontos = [];

function recuperarID(_callback) {

    fetch(`/usuarios/recuperarID/`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                /* FOR para o projeto individual */
                for(var contador = 0; contador < 10; contador++){
                    armazenamentoUsuario[contador] = resposta[contador].apelido;
                    armazenamentoPontos[contador] = resposta[contador].qtdPontos;
                }
                _callback();
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            _callback();
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}

function exibirRanking(){
    apelido1.innerHTML = armazenamentoUsuario[0];
    pontos1.innerHTML = armazenamentoPontos[0];

    apelido2.innerHTML = armazenamentoUsuario[1];
    pontos2.innerHTML = armazenamentoPontos[1];

    apelido3.innerHTML = armazenamentoUsuario[2];
    pontos3.innerHTML = armazenamentoPontos[2];

    apelido4.innerHTML = armazenamentoUsuario[3];
    pontos4.innerHTML = armazenamentoPontos[3];

    apelido5.innerHTML = armazenamentoUsuario[4];
    pontos5.innerHTML = armazenamentoPontos[4];

    apelido6.innerHTML = armazenamentoUsuario[5];
    pontos6.innerHTML = armazenamentoPontos[5];

    apelido7.innerHTML = armazenamentoUsuario[6];
    pontos7.innerHTML = armazenamentoPontos[6];

    apelido8.innerHTML = armazenamentoUsuario[7];
    pontos8.innerHTML = armazenamentoPontos[7];

    apelido9.innerHTML = armazenamentoUsuario[8];
    pontos9.innerHTML = armazenamentoPontos[8];

    apelido10.innerHTML = armazenamentoUsuario[9];
    pontos10.innerHTML = armazenamentoPontos[9];
}
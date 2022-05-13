const musicas = [
    'Sons/Som0-Saudade.mp3', //[0]
    'Sons/Som1-Collapse.mp3', //[1]
    'Sons/Som2-RPDHall.mp3', //[2]
    'Sons/Som3-BlackImpact.mp3', //[3]
    'Sons/Som4-Consequence.mp3', //[4]
    'Sons/Som5-Adventure.mp3', //[5]
    "Sons/Som6-Reliving.mp3", //[6]
    "Sons/Som7-Mournful.mp3", //[7]
];

function tocar0(){
    audio.src = `${musicas[0]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[0]}`;
    audio.play();
    limparMusica();
    musica0.style.color = 'red';
}

function tocar1(){
    audio.src = `${musicas[1]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[1]}`;
    audio.play();
    limparMusica();
    musica1.style.color = 'red';
}

function tocar2(){
    audio.src = `${musicas[2]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[2]}`;
    audio.play();
    limparMusica();
    musica2.style.color = 'red';
}
function tocar3(){
    audio.src = `${musicas[3]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[3]}`;
    audio.play();
    limparMusica();
    musica3.style.color = 'red';
}

function tocar4(){
    audio.src = `${musicas[4]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[4]}`;
    audio.play();
    limparMusica();
    musica4.style.color = 'red';
}

function tocar5(){
    audio.src = `${musicas[5]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[5]}`;
    audio.play();
    limparMusica();
    musica5.style.color = 'red';
}

function tocar6(){
    audio.src = `${musicas[6]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[6]}`;
    audio.play();
    limparMusica();
    musica6.style.color = 'red';
}

function tocar7(){
    audio.src = `${musicas[7]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[7]}`;
    audio.play();
    limparMusica();
    musica7.style.color = 'red';
}

function play(){
    if(audio.src == "file:///C:/Users/joao_/Documents/Projeto-Individual/public/Principal.html"){
        tocando_agora.innerHTML = `Selecione uma música acima`;
    }
    else{
        audio.play();
    }
}

function pausar(){
    audio.pause();
}

function parar(){
    audio.pause();
    audio.currentTime = 0;
    limparMusica();
    audio.src = ``;
    tocando_agora.innerHTML = `Tocando agora:`;
}

function aleatorio(){
    var trilhaSorteada = parseInt(Math.random() * 8)

    audio.src = `${musicas[trilhaSorteada]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[trilhaSorteada]}`;
    audio.play();
    limparMusica();

    if(musicas[trilhaSorteada] == musicas[0].value){
        musica0.style.color = 'red';
    }
    else if(musicas[trilhaSorteada] == musicas[1]){
        musica1.style.color = 'red';
    }
    else if(musicas[trilhaSorteada] == musicas[2]){
        musica2.style.color = 'red';
    }
    else if(musicas[trilhaSorteada] == musicas[3]){
        musica3.style.color = 'red';
    }
    else if(musicas[trilhaSorteada] == musicas[4]){
        musica4.style.color = 'red';
    }
    else if(musicas[trilhaSorteada] == musicas[5]){
        musica5.style.color = 'red';
    }
    else if(musicas[trilhaSorteada] == musicas[6]){
        musica6.style.color = 'red';
    }
    else {
        musica7.style.color = 'red';
    }
}

function limparMusica(){
    musica0.style.color = 'white';
    musica1.style.color = 'white';
    musica2.style.color = 'white';
    musica3.style.color = 'white';
    musica4.style.color = 'white';
    musica5.style.color = 'white';
    musica6.style.color = 'white';
    musica7.style.color = 'white';
}
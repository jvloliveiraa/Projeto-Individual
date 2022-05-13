const musicas = [
    'Sons/Som0-Saudade.mp3', //[0]
    'Sons/Som1-Collapse.mp3', //[1]
    'Sons/Som2-RPDHall.mp3', //[2]
    'Sons/Som3-BlackImpact.mp3', //[3]
    'Sons/Som4-Consequence.mp3', //[4]
    'Sons/Som5-Adventure.mp3', //[5]
    "Sons/Som6-Reliving.mp3", //[6]
    "Sons/Som7-Mournful.mp3", //[7]

    //autoplay = inicia sozinho; loop = faz repetir; played = indica que o audio foi todo reproduzido
];

function tocar0(){
    audio.src = `${musicas[0]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[0]}`;
    audio.play();
}

function tocar1(){
    audio.src = `${musicas[1]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[1]}`;
    audio.play();
}

function tocar2(){
    var contador = 0;
    while(contador <= 7){
        var verificar_id = 'musica' + contador;
        if(verificar_id == 'musica2'){
            tocando_agora.innerHTML = `Tocando agora: ${musicas[contador]}`;
            audio.src = `${musicas[contador]}`;
            audio.play();
        }
        contador++;
    }
}
function tocar3(){
    var contador = 0;
    for(contador; contador <= 7; contador++){
        var verificar_id = 'musica' + contador;
        if(verificar_id == 'musica3'){
            tocando_agora.innerHTML = `Tocando agora: ${musicas[contador]}`;
            audio.src = `${musicas[contador]}`;
            audio.play();
        }
    }
}

function tocar4(){
    audio.src = `${musicas[4]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[4]}`;
    audio.play();
}

function tocar5(){
    audio.src = `${musicas[5]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[5]}`;
    audio.play();
}

function tocar6(){
    audio.src = `${musicas[6]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[6]}`;
    audio.play();
}

function tocar7(){
    audio.src = `${musicas[7]}`;
    tocando_agora.innerHTML = `Tocando agora: ${musicas[7]}`;
    audio.play();
}

function play(){
    audio.play();
}

function pausar(){
    audio.pause();
}

function parar(){
    audio.pause();
    audio.currentTime = 0;
}

function aleatorio(){
    var trilhaSorteada = parseInt(Math.random() * 8)

    audio.src = `${musicas[trilhaSorteada]}`;
    audio.play();
}

var contadorClick = 0;
const musicas = [
    'audios/02 Beginning of the Journey.mp3', //[0]
    'audios/02 Overworld.mp3', //[1]
    'audios/08 Hyrule Field Main Theme.mp3', //[2]
    'audios/08 The Legend of Zelda.mp3', //[3]
    'audios/1-04-Ocarina Melodies Suite 2018.mp3', //s[4]
    'audios/25 The Goddess Appears.mp3', //[5]
    "audios/27 - Ocarina 'Epona's Song'.mp3", //[6]
    "audios/43 - Ocarina 'Song of Time'.mp3", //[7]
];

function playOuPause() {
    contadorClick++

    if (contadorClick % 2 == 0) {
        audioAleatorio.pause();

        msgPrimaria.style.display = `block`;
        msgDisplay.style.display = `none`;

    } else {
        let trilhaSorteada = parseInt(Math.random() * 9)

        audioAleatorio.src = `${musicas[trilhaSorteada]}`;
        audioAleatorio.play();
        audioAleatorio.volume = 0.15;
        audioAleatorio.loop = `true`;

        msgDisplay.style.display = `block`;
        msgPrimaria.style.display = `none`;
    }
}
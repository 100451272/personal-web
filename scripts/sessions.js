const audio = document.getElementsByClassName("audio");
const source = document.getElementById("source");

function play_session(title){
    console.log(source);
    let path = "./media/audio/sessions/" + title + ".wav";
    source.src = path;
    audio.load();
    audio.play;
}
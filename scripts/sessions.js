function play_session(title){
    let audio = document.getElementsByClassName("audio")[0];
    let path = "./media/audio/sessions/" + title + ".mp3";
    audio.src = path;
}

document.addEventListener('keyup', event => {
    let audio = document.getElementsByClassName("audio")[0];
    if (event.code === 'Space') {
      if (!audio.paused) {
        audio.pause();
    }
    else {
        audio.play();
    }
    }
})

function play_session(title){
    let audio = document.getElementsByClassName("audio")[0];
    let path = "./media/audio/sessions/" + title + ".mp3";
    audio.src = path;
}
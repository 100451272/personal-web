
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

function play_song(title){
    let audio = document.getElementsByClassName("audio")[0];
    let path = "https://raw.githubusercontent.com/100451272/personal-web/master/media/audio/Sessions/" + title + ".mp3";
    audio.src = path;
}
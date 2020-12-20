function playSound(e){
    const code = e.keyCode ? e.keyCode: this.getAttribute("data-key");
    const activeAudio = document.querySelector('audio[data-key="' + code + '"]');
    activeAudio.currentTime = 0;
    activeAudio.play();
}
document.addEventListener('keydown', playSound);
document.querySelectorAll(".sounds").forEach(function (sound) {
    sound.addEventListener('click', playSound);
});
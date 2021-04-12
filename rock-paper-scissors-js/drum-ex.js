


const btns = document.querySelectorAll('.key')
btns.forEach(button => {
    button.addEventListener('transitionend', () => {
        button.classList.remove('playing')
    });
});

window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const btn = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    btn.classList.add('playing');
})

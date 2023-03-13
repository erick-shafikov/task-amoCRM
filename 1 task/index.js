function format(seconds) {
    let s = (seconds % 60).toString();
    let m = Math.floor((seconds / 60) % 60).toString();
    let h = Math.floor((seconds / 60 / 60) % 60).toString();
    return `${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`;
}

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
    let id;
    return (seconds) => {
        timerEl.innerHTML = format(seconds);
        if (id) clearInterval(id);
        id = setInterval(() => (timerEl.innerHTML = format(seconds++)), 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
    e.target.value = e.target.value.match(/\d{1,}/);
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';
});

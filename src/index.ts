const buttons = [...document.querySelectorAll("button"), ...document.querySelectorAll("input")]
const overlay = document.getElementById('overlay')!;

buttons.forEach(it => {
        it.addEventListener('mouseenter', () => {
            it.classList.add('highlight');
            overlay.classList.add('gray');
        });
        it.addEventListener('mouseout', () => {
            it.classList.remove('highlight');
            overlay.classList.remove('gray');
        });
    }
)
// ...existing code...
document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });

    item.addEventListener('drag', event => {
        if (event.clientX !== 0 && event.clientY !== 0) {
            item.style.position = 'absolute';
            item.style.left = `${event.clientX - item.offsetWidth / 2}px`;
            item.style.top = `${event.clientY - item.offsetHeight / 2}px`;
        }
    });
});

const matchingGame = document.querySelector('.matching-game');

matchingGame.addEventListener('dragover', event => {
    event.preventDefault();
});

matchingGame.addEventListener('drop', event => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    const dropZone = event.target;

    if (dropZone.classList.contains('matching-game')) {
        dropZone.appendChild(draggableElement);
    }
});
// ...existing code...
document.querySelectorAll('.photo').forEach(item => {
    item.addEventListener('click', event => {
        const src = item.src;
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.innerHTML = `
            <img src="${src}" alt="Image preview">
            <button class="close">Close</button>
        `;
        document.body.appendChild(overlay);

        document.querySelector('.close').addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});


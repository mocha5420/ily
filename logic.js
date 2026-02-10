const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let fontSize = 36; // Your starting font size from CSS

noBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Stop the link from opening
    noBtn.style.position = 'absolute';

  
    // 2. Move the NO button to a random position
    // We subtract button size so it stays within screen bounds
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

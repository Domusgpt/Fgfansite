document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Track user progress
let currentLevel = localStorage.getItem('currentLevel') || 1;

function loadLevel(level) {
    if (level <= currentLevel) {
        document.getElementById(`level${level}`).style.display = 'block';
    }
}

function completeLevel(level) {
    currentLevel = Math.max(currentLevel, level + 1);
    localStorage.setItem('currentLevel', currentLevel);
    loadLevel(level + 1);
}

// Example usage
loadLevel(1);
document.getElementById('completeLevel1').addEventListener('click', () => completeLevel(1));
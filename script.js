// МУЗЫКА

const music = document.getElementById('bg-music');

function startMusic() {
  if (!music) return;

  music.volume = 0.6;

  music.play().catch(function(error) {
    console.log('Музыка не запустилась:', error);
  });

  document.removeEventListener('click', startMusic);
  document.removeEventListener('touchstart', startMusic);
}

document.addEventListener('click', startMusic);
document.addEventListener('touchstart', startMusic);
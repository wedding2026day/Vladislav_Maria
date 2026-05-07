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

// ОТПРАВКА ФОРМЫ

const form = document.getElementById('block6-form');

form.addEventListener('submit', async function(e) {

  e.preventDefault();

  const formData = new FormData(form);

  formData.append('access_key', '7359a091-40ce-40ff-b634-9316d4ca917f');
  formData.append('subject', 'Новая анкета со свадебного сайта');

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  });

  const result = await response.json();

  if (result.success) {

    alert('Анкета отправлена ❤️');

    form.reset();

  } else {

    alert('Ошибка отправки');

  }

});

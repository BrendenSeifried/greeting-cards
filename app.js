const nameInput = document.getElementById('name-input'); 

const animalName = document.getElementById('animal-display');
//console.log(animalName);

nameInput.addEventListener('input', () => {
  // console.log('input changed', nameInput.value); 
   animalName.textContent = nameInput.value;
});
/*----------------------------------------------------------- */

const sender = document.getElementById('sender'); 
const sent = document.getElementById('sent');

sender.addEventListener('input', () => { 
  sent.textContent = sender.value;
});
   
//------------------------------------------------------------------------------------

// Avatar
const avatarSelect = document.getElementById('avatar-select');
const avatarImage = document.getElementById('avatar-image');
avatarSelect.addEventListener('change', () => {
  avatarImage.src = avatarSelect.value;
});

const themeSelect = document.getElementById('theme-select');
const character = document.getElementById('character');
themeSelect.addEventListener('change', () => {
  character.classList.value = '';
  character.classList.add(themeSelect.value);
  console.log('check',themeSelect.value)
});

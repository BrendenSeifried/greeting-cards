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
//console.log(showName);

sender.addEventListener('input', () => {
  // console.log('input changed', nameInput.value); 
  sent.textContent = sender.value;
});
   
//------------------------------------------------------------------------------------


  const themeSelect = document.getElementById('theme-select');
themeSelect.addEventListener('change', () => {
  //character.classList.value = '';
  //character.classList.add(themeSelect.value);
});

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

 // Theme
const themeSelect = document.getElementById('theme-select');
const themeColor = document.getElementById('theme-color');
themeSelect.addEventListener('change', () => {
  //themeColor.classList.value = '';
  //themeColor.classList.add(themeSelect.value);
});

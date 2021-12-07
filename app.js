const nameInput = document.getElementById('name-input'); 

const animalName = document.getElementById('animal-display');
console.log(animalName);

nameInput.addEventListener('input', () => {
  // console.log('input changed', nameInput.value); 
   animalName.textContent = nameInput.value;
});
const buttonSubmit = document.querySelector('.submit-btn');
const buttonReturn = document.querySelector('.return-btn')
const form = document.querySelector('.input-field');
const input = document.querySelector('.text-input');
const answer = document.querySelector('.answer');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const inputStr = input.value;
  input.value = '';
  sort(inputStr);
});

function sort(string) {
  const numToStr = string
    .match(/\d+/g)
    .map((str) => +str)
    .sort((a, b) => a - b)
    .join(', ');
  localStorage.setItem('numToStr', JSON.stringify(numToStr));
  answer.textContent = JSON.parse(localStorage.getItem('numToStr'));
  return numToStr;
}

buttonReturn.addEventListener('click', () => {
  answer.textContent = JSON.parse(localStorage.getItem('numToStr'));
})

const btnReturn: HTMLInputElement = document.querySelector('.return-btn');
const form: HTMLInputElement = document.querySelector('.input-field');
const input: HTMLInputElement = document.querySelector('.text-input');
const answer: HTMLInputElement = document.querySelector('.answer');

function handleStrToNum(string: string): string | void {
  const strToArr: string[] | null = string.match(/\d+/g);
  if (strToArr) {
    const strToNum: number[] = strToArr.map((str) => +str);
    const numSort = strToNum.sort((a, b) => a - b);
    const valueForView: string = numSort.join(', ');
    addTextInStorageAndShow(valueForView);
    return valueForView;
  } else {
    addTextInStorageAndShow('Выводить нечего, в тексте нет цифр');
  }
}

function addTextInStorageAndShow(text: string): void {
  localStorage.setItem('strToNum', JSON.stringify(text));
  showPrevText();
}

function showPrevText(): void {
  answer.textContent = JSON.parse(localStorage.getItem('strToNum'));
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (input.value) {
    const inputStr = input.value;
    input.value = '';
    handleStrToNum(inputStr);
  } else {
    addTextInStorageAndShow('Выводить нечего, введите текст с цифрами');
  }
});

btnReturn.addEventListener('click', showPrevText);
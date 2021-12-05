const btnReturn = document.querySelector('.return-btn');
const form = document.querySelector('.input-field');
const input = document.querySelector('.text-input');
const answer = document.querySelector('.answer');
function handleStrToNum(string) {
    const strToArr = string.match(/\d+/g);
    if (strToArr) {
        const strToNum = strToArr.map((str) => +str);
        const numSort = strToNum.sort((a, b) => a - b);
        const valueForView = numSort.join(', ');
        addTextInStorageAndShow(valueForView);
        return valueForView;
    }
    else {
        addTextInStorageAndShow('Выводить нечего, в тексте нет цифр');
    }
}
function addTextInStorageAndShow(text) {
    localStorage.setItem('strToNum', JSON.stringify(text));
    showPrevText();
}
function showPrevText() {
    answer.textContent = JSON.parse(localStorage.getItem('strToNum'));
}
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (input.value) {
        const inputStr = input.value;
        input.value = '';
        handleStrToNum(inputStr);
    }
    else {
        addTextInStorageAndShow('Выводить нечего, введите текст с цифрами');
    }
});
btnReturn.addEventListener('click', showPrevText);
//# sourceMappingURL=index.js.map
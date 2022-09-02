const counterNode = document.querySelector('.js-counter');
const incBtnNode = document.querySelector('.js-inc-btn');
const clearBtnNode = document.querySelector('.js-clear-btn');

let counter = 0;

 function render() {
    counterNode.innerText = counter;
 }; //для вывода содержимого на страницу
 function increment() {
    counter++;
 };
function clear() {
    counter = 0;
};
incBtnNode.addEventListener('click', () => {
    increment();
    render();
}); //функция для увеличения подходов по клику
clearBtnNode.addEventListener('click', () => {
    clear();
    render();
}); //функция для очистки подходов по клику

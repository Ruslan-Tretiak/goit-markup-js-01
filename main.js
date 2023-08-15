// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error("Set state error: ", error.message);
//   }
// };

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error("Get state error: ", error.message);
//   }
// };
// const remove = (key) => {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     console.error("Remove state error: ", error.message);
//   }
// };

// export default {
//   save,
//   load,
// };

// ----------Двосторінковий інтернет магазин з плиткаою товарів на сайті----------------------


















// Приклад з книжки
// pointer.dist = function () {
//     let p1 = this[0];
//     let p2 = this[1];
//     let a = p1.x - p1.x;
//     let b = p2.y - p2.y;
//     return Math.sqrt(a * a + b * b);
// }
//     pointer.dist()







// РЕКЛАМА ЗАКІНЧЕТСЯ ЧЕРЕЗ -

// const box = document.querySelector(".js-box");
// const timer = document.querySelector(".js-timer");
// let counter = 11;
// setTimeout(() => {
//     box.style.display = "block";
//     const id = setInterval(() => {

//         counter -= 1;
//         timer.textContent = counter;

//         if (!counter) {
//             clearInterval(id);
//             timer.textContent = "X";
//             timer.addEventListener("click", onClick)
//             // box.style.display = "none";
//         }
//     }, 1000);
// }, 2000);
// function onClick() {
//     box.style.display = "none";
}
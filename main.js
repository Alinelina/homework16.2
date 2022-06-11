let carBrend = document.querySelector('#car-brend');

const carAudiSelect = document.getElementById('car-audi');
const carChevroletSelect = document.getElementById('car-chevrolet');
const carFiatSelect = document.getElementById('car-fiat');
const carMazdaSelect = document.getElementById('car-mazda');
let totalPriceResult = document.querySelector('#total-price');
const calcBtn = document.querySelector('#calc-btn');


const inputs = document.querySelectorAll('input');
const inputsFuelType = document.querySelectorAll('input[name="fuel-type"]');
const inputsDriveType = document.querySelectorAll('input[name="drive-type"]');
const inputsCarEquipment = document.querySelectorAll('input[name="car-equipment"]');  
let basicPrice;
let totalPriceArr = [];
let value;


//В зависимость от выбора марки машины появляется выбор марки машины
// Подскажите, пожалуйста, как сделать короче?
carBrend.addEventListener('change', function () {
    if (this.value === 'Audi') {
        carAudiSelect.style.display = 'block';
        carChevroletSelect.style.display = 'none';
        carFiatSelect.style.display = 'none';
        carMazdaSelect.style.display = 'none';
    } else if (this.value === 'Chevrolet') {
        carChevroletSelect.style.display = 'block';
        carAudiSelect.style.display = 'none';
        carFiatSelect.style.display = 'none';
        carMazdaSelect.style.display = 'none';
    } else if (this.value === 'Fiat') {
        carFiatSelect.style.display = 'block';
        carChevroletSelect.style.display = 'none';
        carAudiSelect.style.display = 'none';
        carMazdaSelect.style.display = 'none';
    } else if (this.value === 'Mazda') {
        carMazdaSelect.style.display = 'block';
        carChevroletSelect.style.display = 'none';
        carFiatSelect.style.display = 'none';
        carAudiSelect.style.display = 'none';
    } else {
        carFiatSelect.style.display = 'none';
        carChevroletSelect.style.display = 'none';
        carAudiSelect.style.display = 'none';
        carMazdaSelect.style.display = 'none';
    }
});

// В зависимости от выбора марки меняет базовую цену
carAudiSelect.addEventListener('change', function () {
    //basicPrice = +this.value;
    value = +this.value;
    console.log(value);
    array.push(value);
})

carChevroletSelect.addEventListener('change', function () {
    //basicPrice = +this.value;
    value = +this.value;
    console.log(value);
    array.push(value);
})

carFiatSelect.addEventListener('change', function () {
    //basicPrice = +this.value;
    value = +this.value;
    console.log(value);
    array.push(value);
})

carMazdaSelect.addEventListener('change', function () {
    //basicPrice = +this.value;
    value = +this.value;
    console.log(value);
    array.push(value);
})



// В зависимости от чекбокса или радиокнопки меняет цену
// for (const input of inputsCarEquipment) {
//     input.addEventListener('input', function () {
//         //totalPrice = basicPrice + +this.value;
//         value = +this.value;
//         console.log(value);
//         array.push(value);
//     })
// }
// inputsCarEquipment.addEventListener('input', function () {
//     totalPrice = basicPrice + +this.value;
//     value = +this.value;
//     console.log(value);
//     array.push(value);
// })

// for (const input of inputsFuelType) {
//     input.addEventListener('input', function () {
//         value = +this.value;
//         totalPrice = basicPrice + +this.value;
//         console.log(value);
//         array.push(value);
//     })
// }

// for (const input of inputsDriveType) {
//     input.addEventListener('input', function () {
//         totalPrice = basicPrice + +this.value;
//         value = +this.value;
//         console.log(value);
//         array.push(value);
//     })
// }

// calcBtn.addEventListener('click', function () {
//     console.log(array);
// });
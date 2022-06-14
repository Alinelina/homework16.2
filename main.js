let carBrend = document.querySelector('#car-brend');

const carAudiSelect = document.getElementById('car-audi');
const carChevroletSelect = document.getElementById('car-chevrolet');
const carFiatSelect = document.getElementById('car-fiat');
const carMazdaSelect = document.getElementById('car-mazda');

const inputsFuelType = document.querySelectorAll('input[name="fuel-type"]');
const inputsDriveType = document.querySelectorAll('input[name="drive-type"]');
const mileAge = document.querySelector('#mileage');
const inputsCarEquipment = document.querySelectorAll('input[name="car-equipment"]');


let totalPriceResult = document.querySelector('#total-price');
let resetBtn = document.querySelector('#calc-btn-reset');
let calcBtn = document.querySelector('#calc-btn');

let basicPrice;
let totalPriceArray = [];
let value;
let totalPrice;


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
    value = +this.value;
    console.log(value);
    totalPriceArray.push(value);
})

carChevroletSelect.addEventListener('change', function () {
    value = +this.value;
    console.log(value);
    totalPriceArray.push(value);
})

carFiatSelect.addEventListener('change', function () {
    value = +this.value;
    console.log(value);
    totalPriceArray.push(value);
})

carMazdaSelect.addEventListener('change', function () {
    value = +this.value;
    console.log(value);
    totalPriceArray.push(value);
})



// В зависимости от чекбокса или радиокнопки меняет цену
for (const input of inputsCarEquipment) {
    input.addEventListener('input', function () {
        value = +this.value;
        console.log(value);
        totalPriceArray.push(value);
    })
}

for (const input of inputsFuelType) {
    input.addEventListener('input', function () {
        value = +this.value;
        totalPrice = basicPrice + +this.value;
        console.log(value);
        totalPriceArray.push(value);
    })
}

for (const input of inputsDriveType) {
    input.addEventListener('input', function () {
        totalPrice = basicPrice + +this.value;
        value = +this.value;
        console.log(value);
        totalPriceArray.push(value);
    })
}

// Привязка к кнопке id="calc-btn"
calcBtn.addEventListener('click', function () {
    console.log(totalPriceArray);
    totalPrice = totalPriceArray.reduce((x, y) => x + y);

    // В зависимости от пробега меняется результирующая цена
    if (mileAge.value > 2500) {
        totalPrice *= 0;
        console.log(totalPrice);
    } else if (mileAge.value > 1000) {
        totalPrice *= 0.8;
    } else if (mileAge.value <= 1000) {
        totalPrice *= 1;
    }

    totalPriceResult.style.borderWidth = '1px';
    totalPriceResult.style.borderStyle = 'solid';
    totalPriceResult.innerHTML = `Стоимость автомобиля: ${totalPrice}`;
});

resetBtn.addEventListener('click', () => {
    totalPriceResult.style.borderWidth = '0';
    totalPriceResult.innerHTML = '';
})

// Подскажите, пожалуйста, как сделать, чтобы при изменении чекбоксов, прошлые удалялись из массива totalPriceArray и не влияли на totalPrice
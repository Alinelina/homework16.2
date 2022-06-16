const carBrend = document.querySelector('#car-brend');
const carAudiSelect = document.getElementById('Audi');
const carChevroletSelect = document.getElementById('Chevrolet');
const carFiatSelect = document.getElementById('Fiat');
const carMazdaSelect = document.getElementById('Mazda');
const modelSelects = [carAudiSelect, carChevroletSelect, carFiatSelect, carMazdaSelect];

const inputsFuelType = document.querySelectorAll('input[name="fuel-type"]');
const inputsDriveType = document.querySelectorAll('input[name="drive-type"]');
const mileAge = document.querySelector('#mileage');
const inputsCarEquipment = document.querySelectorAll('input[name="car-equipment"]');

let totalPriceResult = document.querySelector('#total-price');
let resetBtn = document.querySelector('#calc-btn-reset');
let calcBtn = document.querySelector('#calc-btn');

let basicPrice = 0;
let totalPrice;


//В зависимость от выбора бренда машины появляется выбор марки машины

function displayModelList(brand) {
    modelSelects.forEach((select) => {
        if (select.id === brand) {
            select.style.display = 'block';
        } else {
            select.style.display = 'none';
        }
    })
}

carBrend.addEventListener('change', function () {
    displayModelList(this.value)
})

//Расчет стоимости
function calculate() {

    //Переменные
    let fuelTypeValue = 0;
    let driveTypeValue = 0;
    let mileAgeValue = 0;
    let carEquipmentValue = 0;

//Определяет базовую цену в зависимости от марки машины
    for (const select of modelSelects) {

        if (select.value == '0') {
            continue;
        }

        basicPrice = select.value;
    }

//надбавка по типу топлива
    for (const input of inputsFuelType) {
        if (input.checked) {
            fuelTypeValue = input.value;
        }
    }

//надбавка по типу привода 
    for (const input of inputsDriveType) {
        if (input.checked) {
            driveTypeValue = input.value;
        }
    }

//надбавка по километражу    
    if (mileAge.value > 2500) {
        mileAgeValue = -300;
    } else if (mileAge.value > 1000) {
        mileAgeValue = -200;
    } else if (mileAge.value <= 1000) {
        mileAgeValue = 0;
    }

//надбавка по комплектации    
    for (const input of inputsCarEquipment) {
        if (input.checked == false) {
            continue;
        }

        carEquipmentValue += +input.value;
    }

//Расчет общей цены
    totalPrice = +basicPrice + +fuelTypeValue + +mileAgeValue + +driveTypeValue + +carEquipmentValue;
    
    return totalPrice;
}

//Вывод на экран
calcBtn.addEventListener('click', function () {
    let result = calculate();
    totalPriceResult.style.borderWidth = '1px';
    totalPriceResult.style.borderStyle = 'solid';
    totalPriceResult.innerHTML = `Стоимость автомобиля: ${result}`;
});

//Очистка поля вывода
resetBtn.addEventListener('click', () => {
    totalPriceResult.style.borderWidth = '0';
    totalPriceResult.innerHTML = '';
})
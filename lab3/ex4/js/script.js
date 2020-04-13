
let arr = [
    { value: 100, type: 'USD' },
    { value: 215, type: 'EUR' },
    { value: 7, type: 'EUR' },
    { value: 99, type: 'USD' },
    { value: 354, type: 'USD' },
    { value: 12, type: 'EUR' },
    { value: 77, type: 'USD' },
]


let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].value < 100 && arr[i].type == "USD") {
        sum += arr[i].value;
    }

}

alert("Все значения 'USD' - " + sum);


let arr1 = arr.filter(item => item.type == "EUR")
alert("Длинна массива со значение 'EUR' = " + arr1.length);

for (let i = 0; i < arr1.length; i++) {

    arr[i].value *= 2;
    alert(`${i + 1} елемент = ` + arr1 [i].value);

}

"use strict";

while (true) {


    let parthner = prompt('Имя?');
    if (parthner== null) {
        break;
    }else if(Number(parthner)){
		alert("Неверное к-во лет!");
		continue;
	}

    let kd = prompt('Желаемое к-во детей?');
    if (kd == null) {
        break;
    }else if(!Number(kd)){
		alert("Ошибка");
		continue;
	}

	let jb = prompt('Профессия?');
    if (jb == null) {
        break;
    }else if(Number(jb)){
		alert("Ошибка!");
		continue;
	}

	let country = prompt('Страна?');
    if (country == null) {
        break;
    }else if(Number(country)){
		alert("Ошибка!");
		continue;
	}

	while (true) {
        let choise = prompt('Вывести результат?', '1/2');
        if (choise == null) {
            break;
        }
        switch (choise) {
            case '1':
                if (kids == 1) {
                    alert(`Партнер -  ${parthner} К-во детей - ${kd} `);
                } else {
                    alert(`Партнер -  ${parthner}  К-во детей - ${kd}  `);
                }
                break;

            case '2':
                alert(`Город - ${country} Должность -  ${jb}`);
                break;

            default:
                alert('Только 1 вариант');

        }
    }
}

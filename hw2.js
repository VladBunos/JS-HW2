let flag = true;

function getUserFullNamePart(value){
    let userFullNamePart = prompt(`Введите ${value}`)
    while (isValid(userFullNamePart) === false){
        alert('Введите словом, не числом и не пустой строкой !')
        userFullNamePart = prompt(`Введите ${value}`)
    }
   
    return userFullNamePart
}

function getUserGender(){
    let userGender = confirm('Вы мужина ?')? 'мужчина' : 'женщина';
    return userGender
}

function getUserAge(){
    let userAge = +prompt('Укажите Ваш возраст в годах');
    while(isValid(userAge) === false){
    alert('Возвраст должен быть введен числом и быть более 0 !');
    userAge = +prompt('Укажите Ваш возраст в годах');
    }
    return userAge
}

function isValid(value){
    if (flag === true){
        if (value === NaN || value === false || value === '' || value == +(value) || value === null){
            return false;
        } else {
            return true;
        }
    } else {
        if (value != +(value) || value === false || value === '' || +(value) <= 0 ||value === null || value === NaN){
            return false;
        } else {
            return true;
        }
    }
}

function isPens(calluserAge, calluserGender){
    if (calluserAge >= 55 && calluserGender !== `мужчина`){
            return 'да';
        } else if (calluserAge >= 65 && calluserGender === `мужчина`){
            return 'да';
        } else {
            return 'нет';
        }
}

function app(){
    let callUserLastName = getUserFullNamePart('фамилию');
    let callUserName = getUserFullNamePart('имя');
    let callUserSurName = getUserFullNamePart('отчество');
    let callUserGender = getUserGender();
    flag = false;
    let callUserAge = getUserAge();
    let callPens = isPens(callUserAge, callUserGender);
    showInfo(callUserLastName, callUserName, callUserSurName, callUserGender, callUserAge, callPens);
}

function showInfo(callUserLastName, callUserName, callUserSurName,  callUserGender, callUserAge, callPens){
alert(`Ваше ФИО: ${callUserLastName} ${callUserName} ${callUserSurName} 
Ваш возраст в годах: ${callUserAge}
Ваш возраст в днях: ${callUserAge * 365}
Ваш возраст через 5 лет: ${callUserAge + 5}
Ваш пол: ${callUserGender}
Вы на пенсии: ${callPens}`);
}


app();


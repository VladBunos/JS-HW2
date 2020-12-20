function getuserFullName(){
    let userLastName = prompt('Введите фамилию')
    for (; isValid(userLastName) === false; ){
        alert('Введите словом, не числом и не пустой строкой !')
        userLastName = prompt('Введите фамилию')
    }
    let userName = prompt('Введите имя')
    for (; isValid(userName) === false; ){
        alert('Введите словом, не числом и не пустой строкой !')
        userName = prompt('Введите имя')
    }
    let userSurName = prompt('Введите отчество')
    for (; isValid(userSurName) === false; ){
        alert('Введите словом, не числом и не пустой строкой !')
        userSurName = prompt('Введите отчество')
    }
    return ([userLastName, userName, userSurName]);
}

function getuserGender(){
    let userGender = confirm('Вы мужина ?')? 'мужчина' : 'женщина';
    return userGender
}

function getuserAge(){
    let userAge = +prompt('Укажите Ваш возраст в годах');
    for(; isAgeValid(userAge) === false; ){
    alert('Возвраст должен быть введен числом и быть более 0 !');
    userAge = +prompt('Укажите Ваш возраст в годах');
    }
    return userAge
}

function isValid(namePart){
    if (namePart === NaN || namePart === false || namePart === '' || namePart == +(namePart) || namePart === null){
        return false;
    } else {
        return true;
    }
}

function isAgeValid(age){
    if (age != +(age) || age === false || age === '' || +(age) <= 0 ||age === null || age === NaN){
        return false;
    } else {
        return true;
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

function showInfo(calluserFullName, calluserGender, calluserAge, callPens){
alert(`Ваше ФИО: ${calluserFullName[0]} ${calluserFullName[1]} ${calluserFullName[2]}
Ваш возраст в годах: ${calluserAge}
Ваш возраст в днях: ${calluserAge * 365}
Ваш возраст через 5 лет: ${calluserAge + 5}
Ваш пол: ${calluserGender}
Вы на пенсии: ${callPens}`);
}

function app(){
let calluserFullName = getuserFullName();
let calluserGender = getuserGender();
let calluserAge = getuserAge();
let callPens = isPens(calluserAge, calluserGender);
showInfo(calluserFullName, calluserGender, calluserAge, callPens);
}



app();



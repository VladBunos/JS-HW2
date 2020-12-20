function getUserInfo(value, flag){
    if (flag === true){
        let userInfo = prompt(`Введите ${value}`)
        while (userInfo === NaN || userInfo === false || userInfo === '' || userInfo == +(userInfo) || userInfo === null){
            alert('Введите словом, не числом и не пустой строкой !')
            userInfo = prompt(`Введите ${value}`)
        }
        return userInfo
    } else {
        let userInfo = +prompt(`Введите ${value}`)
        while (userInfo != +(userInfo) || userInfo === false || userInfo === '' || +(userInfo) <= 0 ||userInfo === null || userInfo === NaN){
            alert('Возвраст должен быть введен числом и быть более 0 !');
            userInfo = prompt(`Введите ${value}`)
        }
        return userInfo
    }
}

function getUserGender(){
    let userGender = confirm('Вы мужина ?')? 'мужчина' : 'женщина';
    return userGender
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
    let callUserLastName = getUserInfo('фамилию', true);
    let callUserName = getUserInfo('имя', true);
    let callUserSurName = getUserInfo('отчество', true);  
    let callUserGender = getUserGender();
    let callUserAge = getUserInfo('возраст', false);
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


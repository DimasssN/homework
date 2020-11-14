function task1(){
    let num = document.getElementById("number1").value;
        num = parseInt(num);
    let res = '';
    if(num>0 && num<=2){
        res = 'Baby';
    }else if (num>2 && num<12){
        res = 'Child';
    }else if (num>=12 && num<=18){
        res = 'Teenager';
    }else if (num>18 && num<=60){
        res = 'Adult';
    }
    else if(num>60){
        res = 'Granny';
    }
    else {
        res = 'Invalid age';
    }
    document.getElementById("result_1").innerText = res;
}

function task2(){
    let num = document.getElementById("number2").value;
        num = parseInt(num);
    let res = '';
    switch(num){
        case 1:
            res = '!';
            break;
        case 2:
            res = '@';
            break;
        case 3:
            res = '#';
            break;
        case 4:
            res = '$';
            break;
        case 5:
            res = '^';
            break;
        case 7:
            res = '&';
            break;
        case 8:
            res = '*';
            break;
        case 9:
            res = '(';
            break;
        case 0:
            res = ')';
            break;
        default:
            res = 'Invalid character';
        }
        document.getElementById("result_2").innerText = res;
}

function task3(){
    let num = document.getElementById("number3").value;
        num = parseInt(num);
    let res = '';
    if (((num - num % 100) / 100 == num % 10) || ((num - num % 100) / 100 == (num%100 - num%10) / 10) || ((num%100 - num%10) / 10 == num % 10)){
        res = 'Number has the same digits';
    }
    else {
        res = 'Number has not the same digits';
    }
    
    document.getElementById("result_3").innerText = res;
}

function task4(){
    let num = document.getElementById("number4").value;
        num = parseInt(num);
    let res = '';
    if (((num%4 == 0) && (num%100 != 0)) || (num%400 == 0)){
        res = 'It is vysokosnyy year';
    }
    else {
        res = 'It is not vysokosnyy year';
    }
    document.getElementById("result_4").innerText = res;
}

function task5(){
    let num = document.getElementById("number5").value;
        num = parseInt(num);
    let res = '';
    if (((num - num % 1000) / 1000) == num % 100){
        res = 'It is palindrome';
    }
    else {
        res = 'It is not palindrome';
    }
    document.getElementById("result_5").innerText = res;
}

function task6(){
    let num = document.getElementById("number6").value,
        action = document.getElementById("action_6").value;
        num = parseInt(num);
    let res = 0;
    let eur = 0.84;
    let uan = 28.1;
    let azn = 1.69
    switch(action){
        case 'eur':
            res = num*eur;
            break;
        case 'uan':
            res = num*uan;
            break;
        case 'azn':
            res = num*azn;
            break;
        default:
            res = 'Invalid currency';
    }
    document.getElementById("result_6").innerText = res;
}

function task7(){
    let num = document.getElementById("number7").value;
        num = parseInt(num);
    let res = '';
    if(num>200 && num<300){
        res = num - (num*3/100);
    }
    else if(num>=300 && num<500){
        res = num - (num*5/100);
    }
    else if(num>=500){
        res = num - (num*7/100);
    }
    else {
        res = num;
    }
    document.getElementById("result_7").innerText = res;
}

function task8(){
    let num1 = document.getElementById("number8_1").value;
    let num2 = document.getElementById("number8_2").value;
        num1 = parseInt(num1);
        num2 = parseInt(num2);
    let r = num1 / 2 * Math.PI;
    let side = num2 / 4;
    let res = '';
    if(r <= side){
        res = 'Correct';
    }
    else {
        res = 'Incorrect';
    }
    document.getElementById("result_8").innerText = res;
}



function task9(){
    let q1 = prompt('Кем был крокодил Гена?\n a.Музыкант на корпоративах.\n b.Крокодил.\n c.Кожанный чемодан.'),
        q2 = prompt('Какого цвета небо?\n a.Голубое.\n b.Белое.\n c.Фиолетовое.'),
        q3 = prompt('С Какой сторону встает солнце?\n a.Запад.\n b.Восток.\n c.Юго-Север.');
    let answer1 = 0,
        answer2 = 0,
        answer3 = 0;
    if(q1=="b"){
        answer1 = 2;
    }
    if(q2=='a'){
        answer2 = 2;
    }
    if(q3=='b'){
        answer3 = 2;
    }
    let res = answer1 + answer2 + answer3;
    let score = ' баллов!';
    switch(res){
        case 2:
        case 4:
            score = ' балла!';
    }
    document.getElementById("result_9").innerText = 'Поздравляю, Вы набрали: ' + res + score;
}

function task10(){
    
    let day = document.getElementById('number_10_1').value,
        mounth = document.getElementById('number_10_2').value,
        year = document.getElementById('number_10_3').value;
        day = parseInt(day);
        mounth = parseInt(mounth);
        year = parseInt(year);
    let nextDate = ''; 
    if(day>31){
        alert('Invalid date!');
    }
    if(mounth>12){
        alert('Invalid date!');
    }
    if (((year%4 == 0) && (year%100 != 0)) || (year%400 == 0) || (mounth == 2) || day==29){
        day = 1;
        mounth = mounth + 1;
        nextDate = day + '-' + mounth + '-' + year;
    }
    if(day==30 && (mounth==4 || mounth==6 || mounth==9 || mounth==11)){
        day = 1;
        nextDate = day + '-' + mounth + '-' + year;
    }  
    else if(day==31 && (mounth==1 || mounth==3 || mounth==5 || mounth==7 || mounth==8 || mounth==10)){
        mounth = mounth + 1;
        day = 1;
        nextDate = day + '-' + mounth + '-' + year;
    }  
    if((day == 31) && (mounth == 12)){
        nextDate = day + '-' + mounth + '-' + year;
    }
    // if(mounth==2 && day==28){
    //     day = 1;
    //     mounth = mounth + 1;
    // }
    let res = nextDate;
    document.getElementById("result_10").innerText = res;
    prompt("Я запутался в этой функции, разберем на занятии.");
}

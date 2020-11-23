function task1(){
    let num1 = document.getElementById('num_1_1').value,
        num2 = document.getElementById('num_1_2').value,
        res = 0;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    while(num1<=num2){
        res+=num1;
        num1++;
    }
    document.getElementById('res_1').innerHTML = 'Summ: ' + res;
}

function task2(){
    debugger;
    let num1 = document.getElementById('num_2_1').value,
        num2 = document.getElementById('num_2_2').value,
        res = 0,
        i = 1;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let k=(num1>num2)?num2:num1;
    while(k>i){
        if((num1%i == 0) && (num2%i == 0)){
            res = i;
        }
            i++;       
    }
     document.getElementById('res_2').innerHTML = 'Result: ' + res;
}

function task3(){
    let num1 = document.getElementById('num_3').value,
        i = 1;
    num1 = parseInt(num1);
    while(i<=num1){
        if(num1%i==0){
            document.getElementById('res_3').innerHTML += i + ' ';
        }
        i++;
    }
}

function task4(){
    let num1 = document.getElementById('num_4').value,
        i = 0;
    num1 = parseInt(num1);
    while(num1!=0){
        num1 = Math.round(num1/10);       
        i++;
    }
    document.getElementById('res_4').innerHTML = 'Quantity: ' + i;
}

function task5(){
    let num=0, pos=0, neg=0, even=0, odd=0, zero=0, i=0;
    while(i<10){
        i++;
        num=prompt('Enter number:');
        num=parseInt(num);
        if(num%2==0) even++;
        else odd++;
        if(num==0) zero++;
        if(num>0) pos++;
        if(num<0) neg++;
    }
    document.getElementById('res_5').innerHTML = 'Positive: ' + pos+ '<br>Negative: ' + neg + '<br>Even: ' + even + '<br>Odd: ' + odd + '<br>Zero: ' + zero;
}


function task6(){
    let num1 = 0, num2 = 0, action = '', res = 0;
    let q = confirm('Решить пример?');
        while(q==true){
            num1=prompt('Number 1');
            num1=parseInt(num1);
            action=prompt('Action');
            num2=prompt('Number 2');
            num2=parseInt(num2);
            switch(action){
                case '/':
                    res = num1/num2;                
                case '*':
                    res = num1*num2;
                case '-':
                    res = num1-num2;                
                case '+':
                    res = num1+num2;
                default:
                    alert(res);
            }
            q = confirm('Еще один пример?');
        }
}

function task7(){
    let num = document.getElementById('num_7_1').value,
        k = document.getElementById('num_7_2').value,
        moveArr = num.split(''),
        i = k,
        res = '';
    while(num.length != res.length){
        if(i == num.length){
            i = 0;
        }
        res += moveArr[i];
        i++
    }
    document.getElementById('res_7').innerHTML = 'New number: ' + res;
}

function task8(){
   let date = new Date();
   let d = date.getDay();
   let w = '';
   let q = ''; 
   do{
        switch(d){
            case 0:
               w = 'Воскресенье';
               break;
            case 1:
               w = 'Понедельник';
               break;
            case 2:
               w = 'Вторник';
               break;
            case 3:
               w = 'Среда';
               break;
            case 4:
               w = 'Четверг';
               break;
            case 5:
               w = 'Пятница';
               break;
            case 6:
               w = 'Суббота';
               break;
        }
        q = confirm(w + ' Хотите увидеть следующий день?');
           d++;
        if(d==7){
            d=0;
        }
   }while(q==true)
}

function task9(){
    let num1 = 2,
        num2 = 1,
        html = '<div class="table_9">';
    for(num1=2; num1<10; num1++){
        html +=`<p><b>${num1}</b></p>`;
        for(num2=1; num2<=10; num2++){
           html+= `
            <p>${num1} x ${num2} = ${num1*num2}</p>
           `;
        }
    }
    html += '</div>';
    document.getElementById('res_9').innerHTML = html;
}

function task10(){
    let a = 0,
        b = 100,
        c = 50,
        answer = false;
    do{
        if(confirm('Your number = '+ c + '?')){
            answer = true;
            alert('Your number is: '+c);
        }
        else{
            if(confirm('Your number > '+ c + '?')){
            a = c;
        }else{
            b = c;
        }
    }
        c = a + Math.floor((b - c)/2);
    }while(!answer);
    //     answer = prompt('Это число: ' + N + '?\n Если Ваше число больше, введите ">"\n Если Ваше число меньше, введите "<"\n Если это Ваше число, введите "yes"');
    // while(step){
    //   //  answer = prompt('Это число: ' + a + '\n Если Ваше число больше, введите ">"\n Если Ваше число меньше, введите "<"\n Если это Ваше число, введите "yes"');
    //     if(answer === ">"){
    //         a = Math.floor((N + a)/2);
    //         b = a/2;
    //         answer = prompt('Это число: ' + a + '?\n Если Ваше число больше, введите ">"\n Если Ваше число меньше, введите "<"\n Если это Ваше число, введите "yes"');
    //       //  step = confirm('Еще попытку?');
    //     }
    //     if(answer === "<"){
    //         c = b;
    //         b = Math.floor(b/2);
    //         answer = prompt('Это число: ' + b + '?\n Если Ваше число больше, введите ">"\n Если Ваше число меньше, введите "<"\n Если это Ваше число, введите "yes"');
    //       //  step = confirm('Еще попытку?');
    //     }
    // }
    // if(answer === "yes"){
    //     step = confirm('Магия работает! Еще разок?');
    //     answer = prompt('Это число: ' + N + '?\n Если Ваше число больше, введите ">"\n Если Ваше число меньше, введите "<"\n Если это Ваше число, введите "yes"');
    // }
}
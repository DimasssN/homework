function userName(){
    let userName = prompt('Enter your name:');
    alert(`Hello, ${userName}!`);
}

function userAge(){
    let userAge = prompt('Enter your birthday year:');
    let a = new Date();
    const year = a.getFullYear();
    let res = parseInt(year) - parseInt(userAge);
    alert(`Your age: ${res}`);
}

function perimetr(){
    let a = prompt('Enter side of square:'),
    res = parseInt(a) * 4;
    alert('Perimetr is: ' + res);
}

function circle(){
    let a = prompt('Enter radius:'),
    res = Math.PI * Math.pow(parseInt(a), 2);
    alert('Square of circle: ' + res.toFixed(4));
}

function speed(){
    let s = prompt('Enter distance between the cities(km):'),
        t = prompt('Enter time(hour):'),
        res = parseInt(s) / parseInt(t);
        alert(`Your speed must be: ${res.toFixed(2)}.`)
}

function converter(){
    let d = prompt('Enter dollars value:');
    let koef = 1.3;
    let res = parseInt(d) / 1.3;
    alert(`Euro: ${res.toFixed(2)}`)
}

function flash(){
    let a = prompt('Enter flash-card capacity(Gb):');
    let res = parseInt(a) * 1024 / 820;
    alert(`Movies: ${Math.floor(res)}`);
}

function chocolate(){
    let s = prompt('Enter your cash:');
    let c = prompt('Enter chocolate price:');
    let n = Math.floor(parseInt(s) / parseInt(c));
    let change = parseInt(s) - parseInt(n) * parseInt(c);
    alert(`Chocolates:  ${n}. Change: ${change}`);
}

function rev(){
    let n = prompt('Enter number from 000 to 999:');
    let e = n%10;
    let d = n%100 - e;
    let s = (parseInt(n) - (parseInt(d) + parseInt(e))) / 100;
    let res = parseInt(e) * 100 + parseInt(d) + parseInt(s);
    alert(`Reverse number: ${res}`);
}

function deposite(){
    let s = prompt('Enter deposite value:');
    let p = parseInt(s) * ((5 / 12) / 100) * 2;
    alert(`Your profit: ${p.toFixed(2)}`);  
}
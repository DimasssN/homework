const car = {
    developer: 'Honda',
    model: 'Accord',
    year: '2009',
    speed: 140,
    condition: 'used'
}

function info(){
    for(let key in car){
        document.getElementById('res').innerHTML += `<p><span style="font-weight: bold; text-transform: capitalize;">${key}:</span> ${car[key]}</p>`;
    }
}

function time($obj){
    let t = 0,
    t2 = 0,
        s = prompt('Distance:');
    s = parseInt(s);
    t = s / $obj.speed;
    t2 = t + Math.floor(t/4);
    return (t2.toFixed(0) + ' hours ' + ((t2 - Math.floor(t2))*60).toFixed(0) + ' minutes.');
}

function calc(){
    document.getElementById('res_2').innerHTML = 'Time in trip: ' + time(car);
};  

 const fraction1 = {
    n: 0,
    d: 0    
};
const fraction2 = {
    n: 0,
    d: 0
};

function calcDen(){
    let num1 = document.getElementById('n1').value,
        den1 = document.getElementById('d1').value,
        num2 = document.getElementById('n2').value,
        den2 = document.getElementById('d2').value;
        fraction1.n = num1;
        fraction1.d = den1;
        fraction2.n = num2;
        fraction2.d = den2;
    let d1 = parseInt(fraction1.d),
        d2 = parseInt(fraction2.d),
        n1 = parseInt(fraction1.n),
        n2 = parseInt(fraction2.n),
        d = 0;
        if(d1>d2){
            d = d1%d2;
            if(d==0){
                d = d1/d2;
                return {
                    n1: n1,
                    d: d1,
                    n2: n2*d
                }
            }else{
                let res = d1;
                for(let i=2; (res%d2)!=0; i++){
                    res += d1;
                }
                return {
                    n1: n1*(res/d1),
                    d: res,
                    n2: n2*(res/d2)
                };
            }
        }
        if(d1<d2){
            d = d2%d1;
            if(d==0){
                d = d2/d1;
                return {
                    n1: n1*d,
                    d: d1*d,
                    n2: n2,
                }
            }else{
                let res = d2;
                for(let i=2; (res%d1)!=0; i++){
                    res += d2;
                }
                return {
                    n1: n1*(res/d1),
                    d: res,
                    n2: n2*(res/d2)
                };
            }
        }
}


function plusFract(){
    document.getElementById('res_n').innerHTML = calcDen().n1 + calcDen().n2;
    document.getElementById('res_d').innerHTML = calcDen().d;
}

function minusFract(){
    document.getElementById('res_n').innerHTML = calcDen().n1 - calcDen().n2;
    document.getElementById('res_d').innerHTML = calcDen().d;
}

function multFract(){
    let d1 = parseInt(fraction1.d),
        d2 = parseInt(fraction2.d),
        n1 = parseInt(fraction1.n),
        n2 = parseInt(fraction2.n);
    document.getElementById('res_n').innerHTML = n1 * n2;
    document.getElementById('res_d').innerHTML = d1 * d2;
}

function divFract(){
    let d1 = parseInt(fraction1.d),
        d2 = parseInt(fraction2.d),
        n1 = parseInt(fraction1.n),
        n2 = parseInt(fraction2.n);
    document.getElementById('res_n').innerHTML = n1 * d2;
    document.getElementById('res_d').innerHTML = d1 * n2;
};

function simpleFract(){
    calcDen()
    let d1 = parseInt(fraction1.d),
        n1 = parseInt(fraction1.n);
    for(let i = n1; i>1; i--){
        if(n1%i==0 && d1%i==0){
            document.getElementById('res_n').innerHTML = n1/i;
            document.getElementById('res_d').innerHTML = d1/i;
        };
    };
};

let addZero = (n)=>(n<10)?'0'+n:n+'';

const timeObj = {
    h: 0,
    m: 0,
    s: 0
}
function setValues(){
    timeObj.h = document.getElementById('hours').value;
    timeObj.m = document.getElementById('minutes').value;
    timeObj.s = document.getElementById('seconds').value;
    parseInt(timeObj.h);
    parseInt(timeObj.m);
    parseInt(timeObj.s);
}

function setTime(h,m,s){
    if(typeof(h)=='undefined'){
        h = '0';
    }
    if(typeof(m)=='undefined'){
        m = '0';
    }
    if(typeof(s)=='undefined'){
        s = '0';
    }
    return addZero(h) + ':'+addZero(m) + ':'+addZero(s) + '';
}

function getTime(){
    setValues()
    let res = 0;
    res = setTime(timeObj.h,timeObj.m,timeObj.s);
    document.getElementById('result').innerHTML = 'Time is: ' + res;
}

function addSec(){
    setValues()
    let change = document.getElementById('change').value,
        s = 0,
        m = 0,
        h = 0;
    if(change == 0){
        alert('Enter value in blue input!');
    }
    s = Number(timeObj.s) + Number(change);
    if(s>59){
        m = Number(timeObj.m) + Math.floor(s/60);
        timeObj.m = m;
        timeObj.s = s%60;
    }
    if(m>59){
        h = Number(timeObj.h) + Math.floor(m/60);
        timeObj.m = Math.floor(s/60) - 1;
        timeObj.h = h;
    }
    document.getElementById('result').innerHTML = timeObj.h + ':' + timeObj.m + ':' + timeObj.s;
}

function addMin(){
    setValues();
    let change = document.getElementById('change').value,
        m = 0,
        h = 0;
    if(change == 0){
        alert('Enter value in blue input!');
    }
    m = Number(timeObj.m) + Number(change);
    if(m>59){
        h = Number(timeObj.h) + Math.floor(m/60);
        timeObj.h = h;
    }
    document.getElementById('result').innerHTML = timeObj.h + ':' + timeObj.m + ':' + timeObj.s;
}

function addHour(){
    setValues();
    let change = document.getElementById('change').value,
        h = 0;
    if(change == 0){
        alert('Enter value in blue input!');
    }
    h = Number(timeObj.h) + Number(change);
    timeObj.h = h;
    document.getElementById('result').innerHTML = timeObj.h + ':' + timeObj.m + ':' + timeObj.s;
}
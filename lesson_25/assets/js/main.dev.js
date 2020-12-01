"use strict";

function smaller() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (a > b) {
    c = 1;
  }

  if (a < b) {
    c = -1;
  }

  if (a == b) {
    c = 0;
  }

  return c;
}

function task1() {
  var num_1 = parseInt(document.getElementById('num_1_1').value),
      num_2 = parseInt(document.getElementById('num_1_2').value);
  var res = smaller(num_1, num_2);
  document.getElementById('res_1').innerHTML = res;
}

function factorial(n) {
  var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  while (n > 1) {
    res = res * n;
    n--;
  }

  return res;
}

function task2() {
  var num_2 = parseInt(document.getElementById('num_2').value);
  var result = factorial(num_2);
  document.getElementById('res_2').innerHTML = 'Factorial is: ' + result;
}

function concat(a, b, c) {
  return a + b + c; // return (a + '') + (b + '') + (c + '');
}

function task3() {
  var num_3_1 = document.getElementById('num_3_1').value,
      num_3_2 = document.getElementById('num_3_2').value,
      num_3_3 = document.getElementById('num_3_3').value;
  var res = concat(num_3_1, num_3_2, num_3_3);
  document.getElementById('res_3').innerHTML = res;
}

function square(a, b) {
  if (typeof a == 'undefined') {
    a = b;
  }

  if (typeof b == 'undefined') {
    b = a;
  }

  return a * b;
}

function task4() {
  var num1 = document.getElementById('num_4_1').value,
      num2 = document.getElementById('num_4_2').value;
  var res;

  if (num1 == '') {
    res = square(num2);
  } else if (num2 == '') {
    res = square(num1);
  } else {
    res = square(num1, num2);
  }

  document.getElementById('res_4').innerHTML = 'Result: ' + res;
}

function perfectNumber(n) {
  var res = 0,
      answer = true;

  for (var i = 1; i < n; i++) {
    if (n % i == 0) {
      res += i;
    }
  }

  if (res != n) {
    answer = false;
  }

  return answer;
}

function task5() {
  var num = document.getElementById('num_5').value;
  var res = perfectNumber(num);

  if (res == false) {
    res = 'Number is not perfect';
  } else {
    res = 'It is perfect number';
  }

  document.getElementById('res_5').innerHTML = res;
}

function task6() {
  var min = document.getElementById('num_6_1').value,
      max = document.getElementById('num_6_2').value,
      res;

  for (var i = min; i <= max; i++) {
    res = perfectNumber(i);

    if (res == true) {
      document.getElementById('res_6').innerHTML += i + ' ';
    }
  }
}

function addZero(a) {
  return a < 10 ? '0' + a : a;
}

function setTime(h, m, s) {
  if (typeof m == 'undefined') {
    m = '0';
  }

  if (typeof s == 'undefined') {
    s = '0';
  }

  return addZero(h) + ':' + addZero(m) + ':' + addZero(s) + '';
}

function task7() {
  var hours = document.getElementById('num_7_1').value,
      minutes = document.getElementById('num_7_2').value,
      seconds = document.getElementById('num_7_3').value,
      time = 0;
  time = setTime(hours, minutes, seconds);
  document.getElementById('res_7').innerHTML = 'Time is: ' + time;
}

function setSeconds(h, m, s) {
  if (typeof h == 'undefined') {
    h = 0;
  }

  if (typeof m == 'undefined') {
    m = 0;
  }

  if (typeof s == 'undefined') {
    s = 0;
  }

  return (parseInt(h) * 60 + parseInt(m)) * 60 + parseInt(s);
}

function task8() {
  var hours = document.getElementById('num_8_1').value,
      minutes = document.getElementById('num_8_2').value,
      seconds = document.getElementById('num_8_3').value;
  document.getElementById('res_8').innerHTML = 'This is ' + setSeconds(hours, minutes, seconds) + ' seconds.';
}

function setSecondsReverse(sec) {
  var h = 0,
      m = 0,
      s = 0;

  if (sec / 3600 < 1) {
    h = '0';
  } else {
    h = Math.floor(sec / 3600);
  }

  m = Math.floor((sec - h * 3600) / 60);
  s = sec % 60;
  return addZero(h) + ':' + addZero(m) + ':' + addZero(s);
}

function task9() {
  var num = document.getElementById('num_9').value;
  document.getElementById('res_9').innerHTML = 'Time is: ' + setSecondsReverse(num);
}

function task10() {
  var h1 = document.getElementById('num_10_1').value,
      m1 = document.getElementById('num_10_2').value,
      s1 = document.getElementById('num_10_3').value,
      h2 = document.getElementById('num_10_4').value,
      m2 = document.getElementById('num_10_5').value,
      s2 = document.getElementById('num_10_6').value,
      dif = 0;

  if (setSeconds(h1, m1, s1) < setSeconds(h2, m2, s2)) {
    dif = setSeconds(h2, m2, s2) - setSeconds(h1, m1, s1);
  } else {
    dif = setSeconds(h1, m1, s1) - setSeconds(h2, m2, s2);
  }

  document.getElementById('res_10').innerHTML = setSecondsReverse(dif);
}
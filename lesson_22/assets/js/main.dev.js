"use strict";

function userName() {
  var userName = prompt('Enter your name:');
  alert("Hello, ".concat(userName, "!"));
}

function userAge() {
  var userAge = prompt('Enter your birthday year:');
  var a = new Date();
  var year = a.getFullYear();
  var res = parseInt(year) - parseInt(userAge);
  alert("Your age: ".concat(res));
}

function perimetr() {
  var a = prompt('Enter side of square:'),
      res = parseInt(a) * 4;
  alert('Perimetr is: ' + res);
}

function circle() {
  var a = prompt('Enter radius:'),
      res = Math.PI * Math.pow(parseInt(a), 2);
  alert('Square of circle: ' + res.toFixed(4));
}

function speed() {
  var s = prompt('Enter distance between the cities(km):'),
      t = prompt('Enter time(hour):'),
      res = parseInt(s) / parseInt(t);
  alert("Your speed must be: ".concat(res.toFixed(2), "."));
}

function converter() {
  var d = prompt('Enter dollars value:');
  var koef = 1.3;
  var res = parseInt(d) / koef;
  alert("Euro: ".concat(res.toFixed(2)));
}

function flash() {
  var a = prompt('Enter flash-card capacity(Gb):');
  var res = parseInt(a) * 1024 / 820;
  alert("Movies: ".concat(Math.floor(res)));
}

function chocolate() {
  var s = prompt('Enter your cash:');
  var c = prompt('Enter chocolate price:');
  var n = Math.floor(parseInt(s) / parseInt(c));
  var change = parseInt(s) - parseInt(n) * parseInt(c);
  alert("Chocolates:  ".concat(n, ". Change: ").concat(change));
}

function rev() {
  var n = prompt('Enter number from 000 to 999:');
  var e = n % 10;
  var d = n % 100 - e;
  var s = (parseInt(n) - (parseInt(d) + parseInt(e))) / 100;
  var res = parseInt(e) * 100 + parseInt(d) + parseInt(s);
  alert("Reverse number: ".concat(res));
}

function deposite() {
  var s = prompt('Enter deposite value:');
  var p = parseInt(s) * (5 / 12 / 100) * 2;
  alert("Your profit: ".concat(p.toFixed(2)));
}
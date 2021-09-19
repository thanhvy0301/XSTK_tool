//Hàm tính nhiệt độ
function cel(a) {
    return a - 32;
}
function sum() {   
     var x = 0;
      x = document.getElementById('txt').value; //Get value from id of text box
      x=parseFloat(x); //Convert string to number
     return x *= Math.PI;     //return result
 }         
 function maxMin() { //hàm tính Class Width
     var x = document.getElementById('max').value;
     var y = document.getElementById('min').value;
     x = parseFloat(x);
     y=parseFloat(y);
     var subs = 0
     return subs = x - y;    
}
function classWidth() {
    var round = document.getElementById('round').value;
    var numClass = document.getElementById('numClass').value;
    round = parseFloat(round);
    numClass = parseFloat(numClass);
    var dev = 0;   
    return dev = (round / numClass).toFixed(2);
     
}
function lowCli() {
    var lowCl = document.getElementById('lowCl').value;
    var clWidth = document.getElementById('clWidth').value;
    lowCl = parseFloat(lowCl);
    clWidth  = parseFloat(clWidth);
    var sumLow = 0;
    return sumLow = lowCl + clWidth;
}
function up() {
    var upCl = document.getElementById('upCl').value;
    var clWi = document.getElementById('clWi').value;
    upCl = parseFloat(upCl);
    clWi  = parseFloat(clWi);
    var sumCl = 0;
    return sumCl = upCl + clWi - 1;
}
function clear () {
    document.getElementsByClassName('input').reset();
}
  

    
 

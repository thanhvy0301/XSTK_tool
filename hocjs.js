//Hàm tính nhiệt độ
function cel(a) {
    return a - 32;
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
    return sumCl = upCl + clWi - 0.1;
}

/*function as() {
    var clW = document.getElementById('resLow').value;
    var numCl = document.getElementById('numCl').value;
    var numClass = document.getElementById('numClass').value;
   for(let i=0; i <=numCl;i++ ) 
   {
       var r = clW + numClass;
       [r,clW] = [clW,r];
       document.write("Kq = "+r);       
   }
}*/
function ast() {
    var r = 0;
    var lowCl = document.getElementById('lowCl').value;   //Class Limit
    var clWidth = document.getElementById('clWidth').value; //ClassWidth
    var numClass = document.getElementById('numClass').value; // Num Class
    lowCl = parseFloat(lowCl);
    clWidth = parseFloat(clWidth);
    numClass = parseFloat(numClass);        
    for(let i=0; i <= numClass ;i++ ) 
    {
        r = clWidth + lowCl;
        [r,lowCl] = [lowCl,r];                           
        console.log(r);             
    }     
}   
/*function st() {
    var kq = 0;
    var lowCl = document.getElementById('lowCl').value;   //Class Limit
    var clWidth = document.getElementById('clWidth').value; //ClassWidth
    var numClass = document.getElementById('numClass').value; // Num Class
    lowCl = parseFloat(lowCl);
    clWidth = parseFloat(clWidth);
    numClass = parseFloat(numClass);        
    for(let i=0; i <= numClass ;i++ ) 
    {
        r = clWidth + lowCl - 0.01;
        [r,lowCl] = [lowCl,r];                   
        //document.getElementById('kq').innerHTML = r;   
        console.log(document.getElementById("kq").innerHTML = r);             
    }     
}*/
function CB() {
    var cb = document.getElementById('cb').value;    
    cb = parseFloat(cb);    
   /* var CB = 0;
    return CB = lowCl - 0.05;*/
    var cbr ;
    return cbr = cb - (0.1/2);
}
function UCB() {
    var ucb = document.getElementById('ucb').value;    
    ucb = parseFloat(ucb);    
   /* var CB = 0;
    return CB = lowCl - 0.05;*/
    var cbr ;
    return cbr = ucb + (0.1 / 2);
}
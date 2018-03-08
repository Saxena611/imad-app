//working on counter

var button  = document.getElementById('counter');
var counter  = 0;
button.onclick = function(){
    //coonecting it to the end point
    
    //storing it in a variable and rendering it
    
    
    //printing it in our span tag on clicking
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = count.toString();
}
place.sort(function(a,b){
    if (a.name < b.name) //sort string ascending
       return -1;
   if (a.name > b.name)
       return 1;
   return 0;
})

var val = 0;
setInterval(function() {
    if (val === 1) {
        $('#' + player[chance%5].name).css('border-width', '0px');
        val = 0;
        console.log('1');
    }
    else {
        $('#' + player[chance%5].name).css('border-width', '2px');
        val = 1;
        console.log('0');
    }
}, 500);

function does (i) {
    if (player[chance%5].location_coord ==  "") return 0;
    else {
        if (g[player[chance%5].location_coord][i] != 0) return 0;
        else return 1;
    } 
}

function change(loc) {
    
    $('#' + player[chance%5].name).css('border-width', '2px');

    if (player[chance%5].location_coord) {
        var prevX = parseInt(place[player[chance%5].location_coord].x) - 30;
        var prevY = parseInt(place[player[chance%5].location_coord].y) - 50;
        var x1 = prevX, y1 = prevY;
    }    

    var playerName = player[chance%5].name;

    for (var i=0; i<71; i++) {
        if (place[i].name == loc) {
            var t = does(i);
            if (t == 0) {
                player[chance%5].location = place[i].name;
                player[chance%5].location_coord = i;
                
                $('.'+player[chance%5].name).text(place[i].name);

                // add animation
                var myVar, q = 0;

                if (prevX && prevY) {
                    var newY = (parseInt(place[i].y) - 50);
                    var newX = (parseInt(place[i].x) - 30);
                    
                    if (prevX < newX) q = 0;
                    else q = 1;

                    myVar = setInterval (function() {
                        if (newX == prevX && newY == prevY) {
                            clearInterval(myVar);
                        }
                        if (q == 0) {
                            if (prevX + 1 > newX) prevX = newX;
                            else prevX += 1;
                        }
                        else {
                            if (prevX - 1 < newX) prevX = newX;
                            else prevX -= 1;
                        }                        
                        prevY = (prevX - newX) * (newY-y1)/(newX-x1) + newY;
                        $('#'+playerName).css('top', prevY+"px").css('left', prevX+"px") ;
                    }, 20);  
                }
                else {
                    $('#'+playerName).css('top', (parseInt(place[i].y) - 50)+"px").css('left', (parseInt(place[i].x) - 30)+"px") ;
                }
                                
                //

                chance += 1;

                $('tr'+':nth-child('+(chance%5)+')').css('background-color','#fed594');
                $('tr'+':nth-child('+(chance%5)+')').css('color','black');
                $('tr'+':nth-child('+((chance+1)%5)+')').css('background-color','#aa866c');
                $('tr'+':nth-child('+((chance+1)%5)+')').css('color','white');

                if (chance%5 == 4) {
                    setTimeout(function(){ alert("Dracula's Turn !!!"); $('#dracula').css('display','block');}, 100);                    
                }
                else {
                     $('#dracula').css('display','none');
                }
            }
            else alert("invalid move!!!");
        }
    }
}

var stack = [];
stack.push(2);       
stack.push(5);       
var i = stack.pop(); 
// alert(i);

var queue = [];
queue.push(2);         
queue.push(5);
queue.push(7);         
var i = queue.shift(); 
console.log(queue); 
var i = queue.shift(); 
console.log(queue);
var i = queue.shift(); 
console.log((queue.length));
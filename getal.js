 // random value -> dit werkt
let y = Math.floor(Math.random() * 10 + 1);
      
 // number guessed by user haalt hij denk ik op via id invoer en de functie wordt dan uitgevoerd eens iem op de knop klikt   

 document.getElementById("submit").onclick = function(){
     
let x = document.getElementById("invoer").value;

if(x == y)
{    
    alert("Gefeliciflanstaart! This was correct! ");
}
else
{    
    alert("Nope!! Try again");
}

}
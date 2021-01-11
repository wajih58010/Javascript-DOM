//bouton plus
let plus = document.querySelectorAll(".plus");
let qte = document.getElementsByClassName("qte");
console.log(plus)
for (let i = 0; i< plus.length; i++){
    plus[i].addEventListener("click",function(){
    qte[i].innerHTML++;
    })
}

//bouton moins
let moins = document.querySelectorAll(".moins");
console.log(moins);
for (let i = 0; i< moins.length; i++){
    moins[i].addEventListener("click",function(){
    qte[i].innerHTML--;
    })
}
   
//bouton delete
let delt = document.querySelectorAll(".delete");
let card = document.querySelectorAll(".col");
for (let i = 0; i< delt.length; i++){
     delt[i].addEventListener("click",function(){
     card[i].remove();
    })
}

//count prix total
let total = document.getElementById("total").innerHTML;
let prix = document.querySelectorAll(".prix");
let somme=0;
 for (let i = 0; i<prix.length; i++){
   somme = somme+  parseInt(prix[i].innerHTML);
  
   
 }
document.getElementById("total").innerHTML=somme;

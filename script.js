var div = document.createElement("div")
div.style.textAlign="center" ;
div.style.padding="10px"
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button = document.createElement("button")
button.setAttribute("type","button")
button.classList.add("btn","btn-Secondary");
button.innerHTML="Search";
button.style.marginLeft="10px"
button.addEventListener("click",foo);

let active = document.createElement("div");
active.setAttribute("id","active");
active.style.padding="20px"

let death = document.createElement("div");
death.setAttribute("id","death");
// death.style.padding="20px";

let recovered = document.createElement("div");
recovered.setAttribute("id","recover");
recovered.style.padding="20px"

div.append(input,button,active,death,recovered)
document.body.append(div) 

async function foo(){
        let res= document.getElementById("country").value;
        // console.log(res);
        let url=`https://api.covid19api.com/total/dayone/country/${res}`

        let res1= await fetch(url);
        let res2= await res1.json();
        let index=res2.length-1;
        console.log(res2[index].Active)
        active.innerHTML=`Active Cases:  ${res2[index].Active}`

        let index2= res2.length-1;
        death.innerHTML=`Death Cases: ${res2[index2].Deaths}`

        let index3 = res2.length-1;
        recovered.innerHTML=`Recovered: ${res2[index].Recovered}`
}

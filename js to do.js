let input=document.querySelector("input");
let button=document.querySelector("button");
let ul=document.querySelector("ul");
let lis=document.querySelector("li");
let del =document.getElementsByClassName("del");

button.addEventListener("click",function(){
   let list=document.createElement("li");
   list.innerText=input.value;
   btn=document.createElement("button");
   btn.innerText="Delete";
   btn.classList.add("del");
   ul.appendChild(list);
   list.appendChild(btn);
   
   input.value="";

})

ul.addEventListener("click",function(event){
    if (event.target.nodeName=="BUTTON"){
        let parlist=event.target.parentElement;
        parlist.remove();

    }
})


// let delbtns=document.querySelectorAll(".del");
// for (dele of delbtns){
//     dele.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//         console.log(par);
//     })
// }
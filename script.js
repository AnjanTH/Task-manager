let todolist = []
let eventdate=[]
displayitems();
let btn = document.querySelector("#btn");


btn.onclick = function () {
    let input = document.querySelector("#input");
    let dates=document.querySelector("#date");
   let text = input.value;
    todolist.push(text);
    localStorage.setItem('todo',JSON.stringify(todolist))
    input.value='';
    
    let inputdate=dates.value;
    eventdate.push(inputdate);
    localStorage.setItem('datevent',JSON.stringify(eventdate))
    dates.value="";

    displayitems()
 
   

}
function displayitems() {
    let paracont = document.querySelector(".cont");
    let nhtml='';

    
    for (let i = 0; i <todolist.length; i++) {
        nhtml+=`
        
        <span class="spanned" id='do'>${todolist[i]}</span>
        <span class="spanned" id='doitem' >${eventdate[i]}</span>
        <button class="butt" onclick="todolist.splice(${i},1);
        eventdate.splice(${i},1);
       
        displayitems();
        
        ">Delete</button>
         `;
       
  

    }
    paracont.innerHTML=nhtml;

}

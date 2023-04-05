let listItem = document.getElementById('list-items');

let inputBox = document.getElementById('input-box');
let btn = document.getElementById('btn');


function addTask(){
   if(inputBox.value===''){
    alert('Add something');
   }else {

    //li add new
    let li= document.createElement('li');
    li.innerHTML= inputBox.value;
    listItem.append(li);

    //cross icon 
    let span = document.createElement('span');
    span.innerHTML='\u00d7';
    li.appendChild(span);
    

   }
   inputBox.value='';
   saveData();

}

//option for checked unchecked and remove added item 
listItem.addEventListener('click',function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle('checked');
        saveData();
    }else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
});


 let saveData= ()=>{
    localStorage.setItem("data",listItem.innerHTML);

}
let showData= ()=>{
    listItem.innerHTML=localStorage.getItem("data");
}

showData();

window.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        btn.click();
    }
});

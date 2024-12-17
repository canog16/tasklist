const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");



//add tasks and places span element
function AddTask(){
    if (inputBox.value === ""){
        alert("Missing input. ");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    inputBox.value = "";
    saveData();
}

//click on which ever side of the 
//listcontainer and you get that part of the function

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

    }
    else if (e.target.tagName === "SPAN") {
         e.target.parentElement.remove();
         saveData();
    }

}, false);

//funtion to save data using local storage

function saveData() {
     localStorage.setItem("data", listContainer.innerHTML);

}

function showTask() {
     listContainer.innerHTML = localStorage.getItem("data"); 

}

showTask();
let inputBox = document.getElementById("input_box");
let addButton = document.querySelector(".row button") ;
let listContainer = document.getElementById("list_container");
if(localStorage.getItem("data")){
    listContainer.innerHTML = localStorage.getItem("data")
}
function saveData() {
    localStorage.setItem("data",listContainer.innerHTML)
}
function addTask() {
    if (inputBox.value=== "") {
        alert('you must write something');
    }
    else{
        let li = document.createElement("li");
        let check_icon = document.createElement("i");
        let del_icon = document.createElement("i");
        let li_text =document.createTextNode(inputBox.value);
        check_icon.className = `fa-regular fa-square`;
        check_icon.classList.add("check_box");
        del_icon.className = `fa-solid fa-trash`;
        del_icon.classList.add("delete");
        li.appendChild(check_icon);
        li.appendChild(li_text);
        li.appendChild(del_icon);
        listContainer.appendChild(li);
        inputBox.value = null;
        saveData();
    }
}
addButton.addEventListener("click",addTask);

listContainer.addEventListener("click",function(e){
    if (e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        saveData();
    }
},false);

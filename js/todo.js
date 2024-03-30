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
        //TODO:make the alert more cooler
        alert('you must write something');
    }
    else{
        //FIXME: dont let the text go out of the border
        let li = document.createElement("li");
        let check_icon = document.createElement("i");
        let del_icon = document.createElement("i");
        let par = document.createElement("p")
        let p_text =document.createTextNode(inputBox.value);
        check_icon.className = `fa-regular fa-square`;
        check_icon.classList.add("check_box");
        del_icon.className = `fa-solid fa-trash`;
        del_icon.classList.add("delete");
        par.appendChild(p_text)
        li.appendChild(check_icon);
        li.appendChild(par);
        li.appendChild(del_icon);
        listContainer.appendChild(li);
        inputBox.value = null;
        saveData();
    }
}
addButton.addEventListener("click",addTask);

listContainer.addEventListener("click",function(e){
    //FIXME: make the check box working and no line inthe midel
    if (e.target.classList.contains("check_box")) {
        if (e.target.classList.contains("fa-square")) {
            e.target.classList.remove("fa-regular");
            e.target.classList.remove("fa-square");
            e.target.classList.add("fa-solid");
            e.target.classList.add("fa-square-check");
        }else{
            e.target.classList.remove("fa-solid");
            e.target.classList.remove("fa-square-check");
            e.target.classList.add("fa-regular");
            e.target.classList.add("fa-square");
        }
        e.target.nextElementSibling.classList.toggle("checked");
        saveData();
    }
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        saveData();
    }
},false);

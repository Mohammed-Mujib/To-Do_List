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
    if (inputBox.value === "") {
        let cover = document.createElement("div");
        cover.classList.add("del_cla");
        cover.className = "alert_cover";
        let note_Page = document.createElement("div");
        note_Page.className = "alert";
        note_Page.classList.add("del_cla");
        let alert_icon = document.createElement("i");
        cover.classList.add("del_cla");
        alert_icon.className = "fa-solid fa-circle-exclamation";
        let herder_text =  document.createElement("h2");
        herder_text.classList.add("del_cla");
        herder_text.textContent = "You have to write something to add a task.";
        let litel_note = document.createElement("amall");
        litel_note.classList.add("del_cla");
        litel_note.innerHTML = `Click at any plase to romove the alert <i class="fa-solid fa-face-smile-beam"></i>.`;
        note_Page.appendChild(alert_icon);
        note_Page.appendChild(herder_text);
        note_Page.appendChild(litel_note);
        cover.appendChild(note_Page);
        document.body.appendChild(cover);
    }
    else{
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
document.body.addEventListener("click",function(e){
    if(e.target.classList.contains("del_cla")){
        document.querySelector(".alert_cover").remove();
    }
},false)

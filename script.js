const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter a task");
    } else {
        
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let updateSpan = document.createElement("span");
        updateSpan.innerHTML = "&#9998;";  
        updateSpan.classList.add("update-btn");  
        li.appendChild(updateSpan);


        let deleteSpan = document.createElement("span");
        deleteSpan.innerHTML = "\u00d7";  
        deleteSpan.classList.add("delete-btn");  
        li.appendChild(deleteSpan);
    }
    inputBox.value = "";  
    saveData();  
}


listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");  
        saveData();
    } else if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();  
        saveData();
    } else if (e.target.classList.contains("update-btn")) {
        
        let li = e.target.parentElement;
        let currentText = li.innerText.replace('\u00d7', '').replace('✎', '');  
        let inputBox = document.createElement('input');
        inputBox.type = 'text';
        inputBox.value = currentText.trim();
        li.innerHTML = ''; 
        li.appendChild(inputBox);
        inputBox.focus();  

        inputBox.addEventListener('blur', function () {
            li.innerHTML = inputBox.value + ' <span class="update-btn">&#9998;</span> <span class="delete-btn">\u00d7</span>';
            saveData();  
        });

        inputBox.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                li.innerHTML = inputBox.value + ' <span class="update-btn">&#9998;</span> <span class="delete-btn">\u00d7</span>';
                saveData();  
            }
        });
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);  
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");  
}
showTask();  

(function(){
    var list = document.getElementsByClassName("list")[0]
    
    var delButns = document.getElementsByClassName("delButns")
    var addTask = document.getElementById("addTask")
    var inputTask = document.getElementById("inputTask")
    var completeBtns = document.getElementsByClassName("listItem")

    var editInput = document.getElementById("editInput")
    var editButtons = document.getElementsByClassName("editButtons")

    var searchInput = document.getElementById("searchInput")
    var searchButton = document.getElementById("searchButton")

    var reverse = document.getElementById("reverse")
    // var noReverse = document.getElementById("noReverse")

    var filterAllButton = document.getElementById("filterAllButton")
    var filterCompleteButton = document.getElementById("filterCompleteButton")
    
    var listItemsHtml = document.getElementsByClassName("listItem")

    var listItemsArray = []

    var editInputs = document.getElementsByClassName("editInputs")

    addTask.style.backgroundColor = "gray"
    addTask.innerText = "Выключено"



    reverse.addEventListener("click", function(){
        list.classList.remove("reverse")
        reverse.setAttribute("id", "noReverse")
        reverse.innerText = "▼"
        var noReverse = document.getElementById("noReverse")
        noReverse.addEventListener("click", function(){
            list.classList.add("reverse")
            noReverse.setAttribute("id", "reverse")
            noReverse.innerText = "▲"
            console.log("LOG")
        }, false)
    }, false)

    
    // noReverse.addEventListener("click", function(){
    //     list.classList.add("reverse")
    //     noReverse.setAttribute("id", "reverse")
    //     noReverse.innerText = "▲"
    //     console.log("LOG")
    // }, false)


    inputTask.addEventListener("input", function(){
        addTask.style.backgroundColor = "green"
        addTask.innerText = "Добавить задачу"
        
    }, false)

    inputTask.addEventListener("blur", function(){
        if(inputTask.value == 0){
            addTask.style.backgroundColor = "gray"
            addTask.innerText = "Выключено"
        }else{
            addTask.style.backgroundColor = "green"
            addTask.innerText = "Добавить задачу"
        }

        
    }, false)



    addTask.addEventListener("click", function(){
        var listItem = document.createElement("div")
        if(inputTask.value == ""){
            console.log("error")
            addTask.style.backgroundColor = "gray"
            addTask.innerText = "Выключено"
        }else{
            // addTask.style.backgroundColor = "green"
            listItem.className = "listItem"
            listItem.innerHTML = `<p>${inputTask.value}</p> <button class="completeBtns" title="Выполнено">✓</button> <button class="delButns" title="Удалить">✗</button> <button class="editButtons">Edit</button> <div class="editArea hide">
            <input type="text" class="editInputs" placeholder="Поменять текст">
            <button>✓</button>
            <button>✗</button>
        </div>`
            //list.appendChild(listItem)
            listItemsArray.push(listItem)
            console.log(listItemsArray)
            console.log(listItem.firstChild)
            inputTask.value = ""
            addTask.style.backgroundColor = "gray"
            addTask.innerText = "Выключено"
            for (var listItemA of listItemsArray){
                list.appendChild(listItemA)
            }
        }
        for (let delBut of delButns){
            delBut.addEventListener("click", function(e){

                // listItemA.classList.add("delListItem")
                listItemA.classList.add("delListItem");
                var delListItem = document.getElementsByClassName("delListItem")[0]
                listItemsArray.splice(listItemsArray.indexOf(this.listItemA), 1)
                console.log(listItemsArray)
                delBut.parentElement.remove()
                // list.removeChild(listItemA)
                for (let listItemA of listItemsArray){
                    list.appendChild(listItemA)
                }
            }, true)
        }

        // for (let completeButn of completeBtns){
        //     completeButn.addEventListener("click", function(){
        //         //e.target.className = "completed"
        //         // listItem.className = "completed"
        //         console.log(this)
        //         // completeButn.parentElement.classList.remove("listItem")
        //         // completeButn.parentElement.classList.add("completed")
        //         this.classList.remove("listItem")
        //         this.classList.add("completed")
                
        //     }, false)
        // }

        for(let editButton of editButtons){
        editButton.addEventListener("click", function(){
            var editArea = document.createElement("div")
            // editArea.className = "editArea"
            // editArea.innerHTML = `
            // <input type='text' id='editInput' placeholder='Поменять текст' value="${inputTask.value}">
            // <button>✓</button>
            // <button>✗</button>
            // `
            // editButton.setAttribute("disabled", "disabled")
            // editButton.parentElement.appendChild(editArea)
        }, false)
    }
        for(editInput of editInputs){
            editInput
        }

        for (let completeButn of completeBtns){
            completeButn.addEventListener("click", function(){
                //e.target.className = "completed"

                // listItem.className = "completed"
                // console.log(completeButn.parentElement)
                // completeButn.parentElement.classList.remove("listItem")
                // completeButn.parentElement.classList.add("completed")
                this.classList.remove("listItem")
                this.classList.add("completed")
                
            }, false)
        }

    }, false)

    filterCompleteButton.addEventListener("click", function(){
        for(let listItemHtml of listItemsHtml){
            listItemHtml.style.display = "none"
        }
    }, false)

    filterAllButton.addEventListener("click", function(){
        for(let listItemHtml of listItemsHtml){
            listItemHtml.style.display = "flex"
        }
    }, false)

    searchButton.addEventListener("click", function(){
        // listItemsArray.find(searchInput.value)
        console.log(searchInput.value)
        for(let listItem of listItemsArray){
            console.log(listItem.firstChild)
            console.log(find(listItem.firstChild.value, searchInput.value))
        }
        // console.log(find(listItemsArray, searchInput.value))
    }, false)

    // for(let editButton of editButtons){
    //     editButton.addEventListener("click", function(){
    //         var editArea = document.createElement("div")
    //         editArea.innerHTML = `<div class='editArea hide'>
    //         <input type='text' id='editInput' placeholder='Поменять текст'>
    //         <button>✓</button>
    //         <button>✗</button>
    //         </div>`
    //         editButton.parentElement.appendChild(editArea)
    //     }, false)
    // }

})();
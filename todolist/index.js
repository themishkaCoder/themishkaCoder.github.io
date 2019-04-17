(function(){
    var list = document.getElementsByClassName("list")[0]
    
    var delButns = document.getElementsByClassName("delButns")
    var addTask = document.getElementById("addTask")
    var inputTask = document.getElementById("inputTask")
    var completeBtns = document.getElementsByClassName("listItem")

    var listItemsArray = []

    addTask.style.backgroundColor = "gray"
    addTask.innerText = "Выключено"

    inputTask.addEventListener("input", function(){
        addTask.style.backgroundColor = "green"
        addTask.innerText = "Добавить задачу"
        
    }, false)

    inputTask.addEventListener("change", function(){
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
            listItem.innerHTML = `<p>${inputTask.value}</p> <button class="completeBtns" title="Выполнено">✓</button> <button class="delButns" title="Удалить">✗</button>`
            //list.appendChild(listItem)
            listItemsArray.push(listItem)
            console.log(listItemsArray)
            inputTask.value = ""
            addTask.style.backgroundColor = "gray"
            addTask.innerText = "Выключено"
            for (var listItemA of listItemsArray){
                list.appendChild(listItemA)
            }
        }
        for (let delBut of delButns){
            delBut.addEventListener("click", function(e){

                listItemA.className = "delListItem"
                var delListItem = document.getElementsByClassName("delListItem")[0]
                
                //list.removeChild(listItem)
                setTimeout(function(){
                    listItemA.className = "listItem"
                    list.removeChild(listItemA)
                    listItemsArray.slice(listItemsArray.indexOf(listItemA), 1)
                    console.log(listItemsArray)
                }, 480)
            }, false)
        }

        for (let completeButn of completeBtns){
            completeButn.addEventListener("click", function(){
                //e.target.className = "completed"
                // listItem.className = "completed"
                console.log(this)
                this.className = "completed"
                
            }, false)
        }

    }, false)

    // for (var delBut of delButns){
    //     delBut.addEventListener("click", function(){
    //         alert("Work!");
    //     }, false)
    // }
})();
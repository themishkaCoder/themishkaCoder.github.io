(function(){
    var list = document.getElementsByClassName("list")[0]
    
    var delButns = document.getElementsByClassName("delButns")
    var addTask = document.getElementById("addTask")
    var inputTask = document.getElementById("inputTask")
    var completeBtns = document.getElementsByClassName("completeBtns")

    addTask.addEventListener("click", function(){
        var listItem = document.createElement("div")
        listItem.className = "listItem"
        listItem.innerHTML = `<p>${inputTask.value}</p> <button class="completeBtns" title="Выполнено">✓</button> <button class="delButns" title="Удалить">✗</button>`
        list.appendChild(listItem)
        inputTask.value = ""
        for (let delBut of delButns){
            delBut.addEventListener("click", function(e){

                listItem.className = "delListItem"
                var delListItem = document.getElementsByClassName("delListItem")[0]
                
                //list.removeChild(listItem)
                setTimeout(()=>{
                    listItem.className = "listItem"
                    list.removeChild(delListItem)
                }, 480)
            }, false)
        }

        for (let completeButn of completeBtns){
            completeButn.addEventListener("click", function(){
                //e.target.className = "completed"
                listItem.className = "completed"
                
            }, false)
        }

    }, false)

    // for (var delBut of delButns){
    //     delBut.addEventListener("click", function(){
    //         alert("Work!");
    //     }, false)
    // }
})();
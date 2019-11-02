import {projectlist} from './factory.js';
import {formatTitle, renderTodoSelect} from './dom.js';
import {todoArray} from './factory.js';
import {removeElement} from './form.js';

const changeTodoPriority = (title, number, titleNoSpace) => {

    if(number !== "Priority") {

        for(var i=0; i<todoArray.length; i++) {
            if(todoArray[i].title == title) {

                todoArray[i].priority = number
                const title = formatTitle(todoArray[i].title)
                const prioritydom = document.getElementById("priority"+title)
                prioritydom.textContent = number




            }
        }

    }


    const removeid = "changePrioritySelect"+title
    removeElement(removeid)

    const id = "prioritybutton" + titleNoSpace
    const priorityButton = document.getElementById(id)
    priorityButton.style.display = "block"
    
}


const showSelect = (title, factorytitle) => {
    const id = "prioritybutton" + title
    const priorityButton = document.getElementById(id)
    priorityButton.style.display = "none"
    renderTodoSelect(title, factorytitle)
}
  

export {
    changeTodoPriority,
    showSelect
}
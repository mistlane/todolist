import {todoComplete} from './todocomplete.js';
import {changeTodoPriority} from './todopriority.js';
import {priorityTest} from '../src/index.js';

const todoDom = (factory) => {


    // Formatting title for id
    const titleSpace = String(factory.title)
    const HighCasetitleNoSpace = titleSpace.replace(/\s/g, "")
    const titleNoSpace = HighCasetitleNoSpace.toLowerCase();

    // Creating container
    const container = document.getElementById("container")
    const todoDiv = document.createElement("div")
    todoDiv.setAttribute("id", titleNoSpace)
    const title = document.createElement("h2")
    title.setAttribute("class", "name")
    title.setAttribute("id", "name"+titleNoSpace)
    title.textContent = factory.title

    // 'Done'-button:
    const completebutton = document.createElement("input")
    completebutton.setAttribute("type", "button")
    completebutton.setAttribute("id", "completebutton" + titleNoSpace)
    completebutton.value = "Finished"
    completebutton.onclick = function() {todoComplete(titleNoSpace)}
    todoDiv.appendChild(completebutton)

    // PRIORITY TEST: ALERT: TEST: CAN BE REMOVED

    const testbutton = document.createElement("input")
    testbutton.setAttribute("type", "button")
    testbutton.setAttribute("id", "testbutton")
    testbutton.value = "Test"
    testbutton.onclick = function() {priorityTest()}
    container.appendChild(testbutton)

    // Priority


    const form = document.createElement("form")
    const select = document.createElement("select")
    select.setAttribute("name", "priority")
    select.onchange = function() {changeTodoPriority(factory.title, this.value)}

    const option0 = document.createElement("option")
    option0.setAttribute("value", "Priority")
    option0.textContent = "Priority"
    select.appendChild(option0)

    
    for(var j=1; j<6; j++) {
        
        const option = document.createElement("option")
        option.setAttribute("value", j)
        option.textContent = j
        select.appendChild(option)
    
    }

 


    // Appending
    todoDiv.appendChild(title)
    container.appendChild(todoDiv)

    todoDiv.appendChild(form)
    form.appendChild(select)

}

const NiceJobAlert = () => {
    const container = document.getElementById("container")
    const alertdiv = document.createElement("div")
    alertdiv.setAttribute("id", "alertdiv")
    const alerttext  =document.createElement("p")
  

    alertdiv.appendChild(alerttext)
    container.appendChild(alertdiv)
}

const initialLayout = () => {
    NiceJobAlert()
}


export {
    todoDom,
    initialLayout
}


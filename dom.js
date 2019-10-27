import {todoComplete} from './todocomplete.js';
import {changeTodoPriority} from './todopriority.js';
import {formAppear, uploadform} from './form.js';
import {newProject} from './project.js';

const container = document.getElementById("container")

const formatTitle = (title) => {
    const titleSpace = String(title)
    const HighCasetitleNoSpace = titleSpace.replace(/\s/g, "")
    const titleNoSpace = HighCasetitleNoSpace.toLowerCase();
    return titleNoSpace
}

const todoDom = (factory) => {


    // Formatting title for id
    const titleNoSpace = formatTitle(factory.title)

    // Creating container
 
    const todoDiv = document.createElement("div")
    todoDiv.setAttribute("id", titleNoSpace)
    todoDiv.setAttribute("class", "todoDiv")

    // TITLE
    const title = document.createElement("h2")
    title.setAttribute("class", "name")
    title.setAttribute("id", "name"+titleNoSpace)
    title.textContent = factory.title

    // DESCRIPTION
    const description = document.createElement("p")
    description.setAttribute("class", "description")
    description.setAttribute("id", "description"+titleNoSpace)
    description.textContent = factory.description

    // DueDate
    const dueDate = document.createElement("h3")
    dueDate.setAttribute("class", "dueDate")
    dueDate.setAttribute("id", "dueDate"+titleNoSpace)
    dueDate.textContent = factory.dueDate

    //Priority-info
    const priorityDiv = document.createElement("div")


    const prioritytext = document.createElement("h3")
    prioritytext.setAttribute("class", "prioritytext")
    prioritytext.textContent= "Priority:"
    const priority = document.createElement("h3")
    priority.setAttribute("id", "priority" +titleNoSpace)
    priority.setAttribute("class", "dueDate")
    priority.textContent = factory.priority
    

    // 'Done'-button:
    const completebutton = document.createElement("input")
    completebutton.setAttribute("type", "button")
    completebutton.setAttribute("id", "completebutton" + titleNoSpace)
    completebutton.value = "Finished"
    completebutton.onclick = function() {todoComplete(titleNoSpace)}
    todoDiv.appendChild(completebutton)


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
    todoDiv.appendChild(description)

    priorityDiv.appendChild(prioritytext)
    priorityDiv.appendChild(priority)
    todoDiv.appendChild(priorityDiv)
    todoDiv.appendChild(dueDate)
    container.appendChild(todoDiv)

    todoDiv.appendChild(form)
    form.appendChild(select)

}

const NiceJobAlert = () => {

    const alertdiv = document.createElement("div")
    alertdiv.setAttribute("id", "alertdiv")
    const alerttext  =document.createElement("p")
  

    alertdiv.appendChild(alerttext)
    container.appendChild(alertdiv)
}

const projectDiv = () => {

    const projectDiv = document.createElement("div")
    const newProjectButton = document.createElement("input")
    newProjectButton.setAttribute("type", "button")
    newProjectButton.setAttribute("value", "New Project")
    newProjectButton.setAttribute("id", "newProjectBtn")

    projectDiv.appendChild(newProjectButton)
    container.appendChild(projectDiv)
}



const initialLayout = () => {
    NiceJobAlert()
    createNewTodo()
    projectDiv()
}



const form = () => {
    //FORM
    const form = document.createElement("form")
    form.setAttribute("id", "form")
    form.setAttribute("onsubmit", "return false")
   


    //TITLE FOR TEXT
    const texttitle = document.createElement("p")
    texttitle.textContent = "Add a task:"
    texttitle.setAttribute("id", "texttitle")

    //TITLEBOX
    const text = document.createElement("input")
    text.setAttribute("type", "text")
    text.setAttribute("id", "formtext")

    //DESCRIPTION BOX
    const description = document.createElement("textarea")
    description.setAttribute("id", "formdescription")
    description.setAttribute("rows", "5")
    description.setAttribute("cols", "50")


    //PRIORITY
    const select = document.createElement("select")
    select.setAttribute("name", "priority")
    select.setAttribute("id", "formselect")


    const option0 = document.createElement("option")
    option0.setAttribute("value", "Priority")
    option0.textContent = "Priority"
    select.appendChild(option0)

    // OPTION SELECT -MAKERGENERATOR
    for(var j=1; j<6; j++) {
        
        const option = document.createElement("option")
        option.setAttribute("value", j)
        option.textContent = j
        select.appendChild(option)
    
    }


    // DUEDATE

    const dueDate = document.createElement("input")
    dueDate.setAttribute("type", "date")
    dueDate.setAttribute("id", "formdate")
    
    

    //SUBMIT    

    const submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.setAttribute("id", "formsubmit")
    submit.onclick = function() {uploadform()}
  
    //APPENDING 

    form.appendChild(texttitle)
    form.appendChild(text)
    form.appendChild(description)
    form.appendChild(select)
    form.appendChild(dueDate)
    form.appendChild(submit)
    container.appendChild(form)
    document.getElementById('formdate').valueAsDate = new Date();

}

const createNewTodo = () => {
    const todoButton = document.createElement("input")
    todoButton.setAttribute("type", "button")
    todoButton.setAttribute("value", "New Todo")
    todoButton.setAttribute("id", "todoButton")
    todoButton.onclick = function() {formAppear()}

    container.appendChild(todoButton)

}




export {
    form,
    todoDom,
    initialLayout,
    formatTitle
}

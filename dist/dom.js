import {todoComplete} from './todocomplete.js';
import {changeTodoPriority} from './todopriority.js';
import {formAppear, uploadform, uploadProjectForm} from './form.js';
import {newProjectBtn, showAllTodosBtn, changeProject, currentProjectCache} from './project.js';
import {projectlist, newTodoBtn} from './factory.js'
import {clearTodosBtn} from './localstorage.js';









const formatTitle = (title) => {
    const titleSpace = String(title)
    const HighCasetitleNoSpace = titleSpace.replace(/\s/g, "")
    const titleNoSpace = HighCasetitleNoSpace.toLowerCase();
    return titleNoSpace
}

const todoContainer = document.getElementById("mainsection")
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
    completebutton.setAttribute("class", "completeButton")
    completebutton.value = "It's Finished!"
    completebutton.onclick = function() {todoComplete(titleNoSpace, factory.title)}
    todoDiv.appendChild(completebutton)


    // Priority


    const form = document.createElement("form")
    const select = document.createElement("select")
    select.setAttribute("name", "priority")
    select.setAttribute("class", "todoSelect")
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
    todoContainer.appendChild(todoDiv)


    todoDiv.appendChild(form)
    form.appendChild(select)

}

const NiceJobAlert = () => {


    const alertdiv = document.createElement("div")
    alertdiv.setAttribute("id", "alertdiv")
    const alerttext  =document.createElement("p")
  

    alertdiv.appendChild(alerttext)
    ///document.getElementById("main").appendChild(alertdiv)
}

const projectDiv = () => {

    /// PROJECTDIV
    const projectDiv = document.getElementById("projectDiv")
    

    /// NEW PROJECT BUTTON
    const newProjectButtonLi = document.getElementById("newProjectBtnLi")
    const newProjectButton = document.createElement("a")
  
    newProjectButton.textContent = "New Project"
    newProjectButton.setAttribute("id", "newProjectBtn")
    newProjectButton.href = "#"


    /// SHOW ALL TODOS BUTTON

    const showAllTodosButtonLi = document.getElementById("showAllTodosBtnLi")
    const  showAllTodosButton = document.createElement("a")
    showAllTodosButton.setAttribute("value", "Show All Todos")
    showAllTodosButton.textContent = "Show All Todos"
    showAllTodosButton.setAttribute("id", "showAllTodosBtn")
    showAllTodosButton.href = "#"


    /// CLEAR ALL TODOS 
    const clearTodosButtonLi = document.getElementById("clearTodosBtnLi")
    const clearTodosButton = document.createElement("a")
    clearTodosButton.textContent ="Clear All Todos"
    clearTodosButton.setAttribute("id", "clearTodosBtn")
    clearTodosButton.href = "#"


    /// NEW TODO BUTTON

    const todoButtonLi = document.getElementById("newTodoBtnLi")
    const todoButton = document.createElement("a")
   
    todoButton.textContent = "New Todo"
    todoButton.setAttribute("id", "newTodoBtn")
    todoButton.href =  "#"


    /// SHOWING THE CURRENT PROJECT
    const currentProject = document.createElement("h1")
    currentProject.setAttribute("id", "currentProject")
    currentProject.textContent = "First Project"
    currentProjectCache.name = "First Project"
   


    /// APPENDING
   
    projectDiv.appendChild(currentProject)
    showAllTodosButtonLi.appendChild(showAllTodosButton)
    newProjectButtonLi.appendChild(newProjectButton)
    clearTodosButtonLi.appendChild(clearTodosButton)
    todoButtonLi.appendChild(todoButton)
    


    newProjectBtn()
    showAllTodosBtn()
    clearTodosBtn()
    newTodoBtn()
}

const changeProjectDOM = () => {
    const projectDiv = document.getElementById("projectDiv")
    const form = document.createElement("form")
    form.setAttribute("id", "changeProjectForm")
   
    const select = document.createElement("select")
    select.setAttribute("name", "project")
    select.setAttribute("id", "projectChangeSelect")
    select.onchange = function() {changeProject(this.value)}

    const option0 = document.createElement("option")
    option0.setAttribute("value", "Project")
    option0.textContent = "Project"
    select.appendChild(option0)

    



    form.appendChild(select)
    projectDiv.appendChild(form)

    projectOptionGenerator(projectlist[0].title)


}

const projectOptionGenerator = (j) =>  {
    const select = document.getElementById("projectChangeSelect")
    const option = document.createElement("option")
    option.setAttribute("value", j)
    option.textContent = j
    select.appendChild(option)

}

const initialLayout = () => {
    NiceJobAlert()
    projectDiv()
   
    changeProjectDOM()
}



const form = () => {
    //FORM
    const form = document.createElement("form")
    form.setAttribute("id", "form")
    form.setAttribute("onsubmit", "return false")
   


    //TITLE FOR TEXT
    const texttitle = document.createElement("label")
    texttitle.textContent = "Add a task:"
    texttitle.setAttribute("id", "texttitle")

    //TITLEBOX
    const text = document.createElement("input")
    text.setAttribute("type", "text")
    text.setAttribute("id", "formtext")

    //DESCRIPTION BOX
    const descriptiontitle = document.createElement("label")
    descriptiontitle.textContent = "Description:"
    const description = document.createElement("textarea")
    description.setAttribute("id", "formdescription")
    description.setAttribute("rows", "5")
    description.setAttribute("cols", "50")


    //PRIORITY
    const selecttitle = document.createElement("label")
    selecttitle.textContent = "Priority:"
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
    
    const dueDatetitle = document.createElement("label")
    dueDatetitle.textContent = "Due Date:"
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
    form.appendChild(descriptiontitle)
    form.appendChild(description)
    form.appendChild(selecttitle)
    form.appendChild(select)
    form.appendChild(dueDatetitle)
    form.appendChild(dueDate)
    form.appendChild(submit)
    document.getElementById("asideform").appendChild(form)
    document.getElementById('formdate').valueAsDate = new Date();

}



const projectForm = () => {
    //FORM
    const form = document.createElement("form")
    form.setAttribute("id", "projectform")
    form.setAttribute("onsubmit", "return false")
   


    //TITLE FOR TEXT
    const texttitle = document.createElement("p")
    texttitle.textContent = "Add The New Project's Title:"
    texttitle.setAttribute("id", "projecttexttitle")

    //TITLEBOX
    const text = document.createElement("input")
    text.setAttribute("type", "text")
    text.setAttribute("id", "projectformtext")
    

    //SUBMIT    

    const submit = document.createElement("input")
    submit.setAttribute("type", "submit")
    submit.setAttribute("id", "fprojectormsubmit")
    submit.onclick = function() {uploadProjectForm()}
  
    //APPENDING 

    form.appendChild(texttitle)
    form.appendChild(text)
    form.appendChild(submit)
    document.getElementById("asideform").appendChild(form)




}






export {
    form,
    projectForm,
    todoDom,
    initialLayout,
    formatTitle,
    projectOptionGenerator
}

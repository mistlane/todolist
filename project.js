import {projectFormAppear} from './form.js';
import {projectlist, sortTodoByDate, todoArray} from './factory.js';
import {projectOptionGenerator, todoDom} from './dom.js';
import {removeClass} from './form.js';
import {localStorageProjects} from './localstorage.js';


const newProjectBtn = function() {
    const button = document.getElementById("newProjectBtn")
    button.addEventListener("click", function() {projectFormAppear()})

}

const showAllTodosBtn = function() {
    const button = document.getElementById("showAllTodosBtn")
    button.addEventListener("click", function() {showAllTodos()})

}



const configureProject = (titlevalue) => {

    const project = {
        title: titlevalue,
        array: [],
        id: "project"

    }

    

    projectlist.push(project)

    localStorage.setItem(titlevalue, JSON.stringify(project))

    const projectTitle = document.getElementById("currentProject")
    projectTitle.textContent = titlevalue

    projectOptionGenerator(titlevalue)
}

const changeProject = (title) => {
    if(title !== "Project") {
        currentProjectCache.name = title

        /// title = this.value from select
        removeClass("todoDiv")

        const projectTitle = document.getElementById("currentProject")
        

        
            projectTitle.textContent = title


            for(var u=0; u<todoArray.length; u++ ) {
            
                if(todoArray[u].projectName == title) {
                    sortTodoByDate(todoArray[u])
                }
            }


    }
    
}

const showAllTodos = () => {
    removeClass("todoDiv")
    for(var u=0; u<todoArray.length; u++ ) {
        sortTodoByDate(todoArray[u], "yes")

    }


}


const currentProjectCache = {
    
}








export {
    newProjectBtn,
    showAllTodosBtn,
    configureProject,
    changeProject,
    currentProjectCache
}



import {projectFormAppear} from './form.js';
import {projectlist, sortTodoByDate} from './factory.js';
import {projectOptionGenerator, todoDom} from './dom.js';
import {removeClass} from './form.js';
import {localStorageProjects} from './localstorage.js';

const newProjectBtn = function() {
    const button = document.getElementById("newProjectBtn")
    button.addEventListener("click", function() {projectFormAppear()})

}



const configureProject = (titlevalue) => {

    const project = {
        title: titlevalue,
        array: []

    }

    

    projectlist.push(project)
    console.log(projectlist)

    const projectTitle = document.getElementById("currentProject")
    projectTitle.textContent = titlevalue

    projectOptionGenerator(titlevalue)
}

const changeProject = (title) => {
    currentProjectCache.name = title

    /// title = this.value from select
    removeClass("todoDiv")

    const projectTitle = document.getElementById("currentProject")
    

    if(title !== "Project") {
        projectTitle.textContent = title


        for(var i=0; i<projectlist.length; i++) {
          
            if(projectlist[i].title === title) {

                const todoArray = projectlist[i].array
                console.table(todoArray)
                console.log("TÄSSÄ TÄÄ VITTUSAATANA")
            
                for(var k=0; k<todoArray.length; k++) {
                    console.log(todoArray[k])
                    sortTodoByDate(todoArray[k])

                }



            }
        }

    }
    
}


const currentProjectCache = {
    
}








export {
    newProjectBtn,
    configureProject,
    changeProject,
    currentProjectCache
}



import {projectFormAppear} from './form.js';
import {projectlist} from './factory.js';
import {projectOptionGenerator, todoDom} from './dom.js';
import {removeClass} from './form.js';


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
    projectTitle.textContent = title


    if(title !== "Project") {


        for(var i=0; i<projectlist.length; i++) {
          
            if(projectlist[i].title === title) {

                console.log("It gets here", projectlist[i].array)
                const todoArray = projectlist[i].array
            
                for(var k=0; k<todoArray.length; k++) {
                    console.log(todoArray[k])
                    todoDom(todoArray[k])

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



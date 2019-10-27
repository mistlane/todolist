import {todoDom} from '../dist/dom.js';

const createTodo = ({ title, description, dueDate, priority}) => ({
    title,
    description,
    dueDate,
    priority
});

// Esim. createTodo({title = lol, description = lol, dueDate = now, priority = 0});

const projectlist = []
const firstproject = {
    title: "First Project",
    array: []
}
projectlist.push(firstproject)

/// TÄMÄ MUUTETAAN NAPPIA PAINAMALLA RETURNAAMAAN PROJECTLISTISTÄ OIKEAN ARRAYN
const chooseProject = () => {
    const project = document.getElementById("currentProject")
    const title = project.textContent

    var m
    for(m=0; m<projectlist.length; m++) {
        console.log(projectlist[m].title, title)
        if(projectlist[m].title == title) {
            const projectArray = projectlist[m].array
            return projectArray
        }
    }
}
/////////////////////////////


const configureTodo = (title="", description="", dueDate="", priority="") =>  {
    const projectArray = chooseProject() 

    const newTodo = createTodo({title, description, dueDate, priority})

    projectArray.push(newTodo)

    console.table(projectlist)


    todoDom(newTodo) // Import from dom.js
}



export {
    configureTodo,
    projectlist
}
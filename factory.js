import {todoDom} from '../dist/dom.js';

const createTodo = ({ title, description, dueDate, priority, projectId}) => ({
    title,
    description,
    dueDate,
    priority,
    projectId
});

// Esim. createTodo({title = lol, description = lol, dueDate = now, priority = 0});

const projectlist = []

//Yksinkertaistettu läpiajo//
//projectlist.push("FirstTodo")

const chooseProject = () => {
    return projectlist.length + 1
}
/////////////////////////////


const configureTodo = (title="", description="", dueDate="", priority="") =>  {
    const projectId = chooseProject() 

    const newTodo = createTodo({title, description, dueDate, priority, projectId})
    projectlist.push(newTodo)

  

    todoDom(newTodo) // Import from dom.js
}



export {
    configureTodo,
    projectlist
}
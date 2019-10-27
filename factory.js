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
const firstproject = []
projectlist.push(firstproject)


const chooseProject = () => {
    return projectlist.length + 1
}
/////////////////////////////


const configureTodo = (title="", description="", dueDate="", priority="") =>  {
    const projectId = chooseProject() 

    const newTodo = createTodo({title, description, dueDate, priority, projectId})

    
    
  

    todoDom(newTodo) // Import from dom.js
}



export {
    configureTodo,
    projectlist
}
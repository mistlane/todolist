import {todoDom} from './dom.js';
import {createTodo, sortTodoByDate} from './factory.js';



const clearTodosBtn = function() {
    const button = document.getElementById("clearTodosBtn")
    button.addEventListener("click", function() {clearTodos()})

}


const clearTodos = () => {
    localStorage.clear();
}

const localStorageFunction = () => {
    if (localStorage.length !== 0) {
        setTodos()

    }
}


function setTodos() {

    var archive = {}, 
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        archive[ keys[i] ] = JSON.parse(localStorage.getItem( keys[i] ));

        const title = archive[keys[i]].title
        const description = archive[keys[i]].description
        const dueDate = archive[keys[i]].dueDate
        const priority = archive[keys[i]].priority
        const projectName = archive[keys[i]].projectName

        const localTodo = createTodo({title, description, dueDate, priority, projectName})
        console.table(localTodo)


        if(localTodo.projectName == "First Project") {
        sortTodoByDate(localTodo)
        }
    }

}


const localStorageProjects = []



export {
    clearTodosBtn,
    localStorageFunction,
    localStorageProjects
}


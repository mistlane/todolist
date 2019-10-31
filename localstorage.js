import {projectOptionGenerator} from './dom.js';
import {createTodo, sortTodoByDate} from './factory.js';
import {projectlist} from './factory.js';
import {removeClass} from './form.js';



const clearTodosBtn = function() {
    const button = document.getElementById("clearTodosBtn")
    button.addEventListener("click", function() {clearTodos()})

}


const clearTodos = () => {
    localStorage.clear();
    removeClass("todoDiv")
    
}

const localStorageFunction = () => {
    if (localStorage.length !== 0) {
        setTodos()
        setProjects()

    }
}



const setProjects = () => {
    var archive = {}, 
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
        archive[ keys[i] ] = JSON.parse(localStorage.getItem( keys[i] ));


        if(archive[keys[i]].id == "project") {
            alert("GOT HERE")

        

            const title = archive[keys[i]].title
            const array = archive[keys[i]].array
        
            
            const project = {
                title: title,
                array: array,
                id: "project"
        
            }

            projectlist.push(project)
          
        
            projectOptionGenerator(title)

        }
    }
}



function setTodos() {

    var archive = {}, 
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        archive[ keys[i] ] = JSON.parse(localStorage.getItem( keys[i] ));

        if(archive[keys[i]].id !== "project") {
            const title = archive[keys[i]].title
            const description = archive[keys[i]].description
            const dueDate = archive[keys[i]].dueDate
            const priority = archive[keys[i]].priority
            const projectName = archive[keys[i]].projectName

            const localTodo = createTodo({title, description, dueDate, priority, projectName})
            console.table(localTodo)



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


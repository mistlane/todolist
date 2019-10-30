import {todoDom} from '../dist/dom.js';
import {currentProjectCache} from './project.js';
import compareAsc from 'date-fns/compareAsc'
import {removeClass} from './form.js';
import parseISO from 'date-fns/parseISO'
import parse from 'date-fns/parse'

const createTodo = ({ title, description, dueDate, priority, projectName}) => ({
    title,
    description,
    dueDate,
    priority,
    projectName
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
    const title = currentProjectCache.name


    var m
    for(m=0; m<projectlist.length; m++) {
        if(projectlist[m].title == title) {
            const projectArray = projectlist[m].array
            return {array: projectArray, name: title}
        }
    }
}
/////////////////////////////


const configureTodo = (title="", description="", dueDate="", priority="", firstTodo = "") =>  {
    const projectArray = chooseProject().array
    const projectName = chooseProject().name


    const newTodo = createTodo({title, description, dueDate, priority, projectName})

    projectArray.push(newTodo)


    if(firstTodo !== "yes") {
        localStorage.setItem(newTodo.title, JSON.stringify(newTodo))
    }



    sortTodoByDate(newTodo)
}



const dateArray = []
const todoArray = []
const sortTodoByDate = (newTodo) => {
    


    var IsIncluded = false;
    for(var i=0; i< todoArray.length; i++) {
        if(todoArray[i].title == newTodo.title && todoArray[i].dueDate == newTodo.dueDate ) {
            IsIncluded = true;
            break;
        }
    }
    console.log(IsIncluded)
    if(!IsIncluded) {
        dateArray.push(newTodo.dueDate)
        todoArray.push(newTodo)
    }


    console.table(todoArray)
    console.log("YLHÄÄLLÄ TODOARRAY")



    const todoCache = [...todoArray]



    dateArray.sort((date1, date2) => {
        date1 = date1.split('/'), date2 = date2.split('/');
        let day1 = parseInt(date1[0]);
        let day2 = parseInt(date2[0]);
        let month1 = parseInt(date1[1]);
        let month2 = parseInt(date2[1]);
        let year1 = parseInt(date1[2]);
        let year2 = parseInt(date2[2]);
        if (year1 !== year2) {
            return year1 - year2;
        } else if (month1 !== month2) {
            return month1 - month2;
        } else {
            return day1 - day2;
        }
    });
    console.table(dateArray)

    removeClass("todoDiv")
    console.log("todoArray.length:", todoCache.length, "DateArray.length:", dateArray.length, "Tätä enempää ei pitäisi olla todoDivejä")
    for(var r=0; r<dateArray.length; r++) {
        /// OTTAA TOISELLAKIN DATEARRAYN INDEKSILLÄ SEN ENSIMMÄISEN TODON. SEN MAHDOLLISUUS PITÄISI POISTAA LUUPISTA KUN TODO ON "VIETY"
        for(var p=0; p<todoCache.length; p++) {
            if(dateArray[r] === todoCache[p].dueDate && todoCache[p].projectName === currentProjectCache.name) {
                todoDom(todoCache[p])
                todoCache.splice(p,1)
                
                break
            }

        }
    }



}
export {
    createTodo,
    configureTodo,
    projectlist,
    sortTodoByDate,
    todoArray
}
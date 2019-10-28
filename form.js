import {form, projectForm} from "./dom.js";
import {configureTodo} from '../dist/factory.js';
import {configureProject, changeProject} from './project.js';
import {format} from 'date-fns'
import parseISO from 'date-fns/parseISO'

import {itemsArray} from './localstorage.js';


/// MAKE THE FORM APPEAR
const formAppear = () => {



    elementCheck("form")

   form()
}

/// UPLOAD THE NEW TODO -FORM
const uploadform = () => {
   

    const title = document.getElementById("formtext")
    const description = document.getElementById("formdescription")
    const select = document.getElementById("formselect")
    const dueDate = document.getElementById("formdate")

    const titlevalue = title.value;
    const descriptionvalue = description.value;
    const selectvalue = select.value;
    const dueDatevalue = dueDate.value

    const parsedDate = parseISO(dueDatevalue,'dd-MM-yyyy')
    const formattedDate = format(parsedDate, 'dd/MM/yyyy')

    configureTodo(titlevalue, descriptionvalue, formattedDate, selectvalue)

    const form = document.getElementById("form")
    form.style.display = "none"

 

}

/// UNIVERSAL REMOVE ELEMENT- FUNCTION

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

/// UNIVERSAL REMOVE CLASS
const removeClass = (id) => {
    
    const rclass = document.getElementsByClassName(id);

    while(rclass[0]) {rclass[0].parentNode.removeChild(rclass[0]);}
}

/// CHECK FOR LIABILITY
const elementCheck = (id) => {
    const element = document.getElementById(id)
    if(typeof(element) != 'undefined' && element != null){ 
        removeElement(id)
    }
}

/// THE NEW PROJECT FORM
const uploadProjectForm = function() {

    const title = document.getElementById("projectformtext")
    const titlevalue = title.value;


    configureProject(titlevalue)

    const projectForm = document.getElementById("projectform")
    projectForm.style.display = "none"


    changeProject(titlevalue)
}

///MAKE THE PROJECT FORM APPEAR
const projectFormAppear = () => {
    elementCheck("projectform")
    projectForm()
}



export {
    formAppear,
    uploadform,
    projectFormAppear,
    uploadProjectForm,
    removeClass
}
import {form} from "./dom.js";
import {configureTodo} from '../dist/factory.js';
import {format} from 'date-fns'
import parseISO from 'date-fns/parseISO'



const formAppear = () => {



    const element = document.getElementById("form")
    if(typeof(element) != 'undefined' && element != null){ 
    removeElement("form")
    }

   form()
}

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



    return false

}

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

export {
    formAppear,
    uploadform
}
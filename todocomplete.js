import {currentProjectCache} from './project.js';
import {projectlist, todoArray} from './factory.js';
import {itemsArray} from './localstorage.js';
import {alertdiv} from './dom.js';


const todoComplete = (titleNoSpace, title) => {
    /// YKSITTÄISEN DIVIN ID ON MUOTOA titleNoSpace

    removeElement(titleNoSpace)
    showalertdiv()
    deleteFromArray(title)
    deleteFromLocalStorage(title)


}



const deleteFromLocalStorage = (title) => {
  localStorage.removeItem(title)
}

const deleteFromArray = (title) => {

  for(var t=0; t<todoArray.length; t++) {
    if(todoArray[t].title === title) {
      todoArray.splice(t,1)
    }
  }



}




function showalertdiv() {
  const alertdiv = document.getElementById("alertdiv")
  
  if(alertdiv.style.display == "block") {
      window.clearTimeout(timeoutID)
    }
  alertdiv.style.display = "block";

  const deleteAlert = () => {
    alertdiv.style.display = "none"
  }
  const timeoutID = window.setTimeout(deleteAlert, 4*1000);
}





function removeElement(id) {

    if(document.getElementById(id)) {
    const elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
    }
}

export {
    todoComplete
}
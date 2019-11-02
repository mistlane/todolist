import {currentProjectCache} from './project.js';
import {projectlist} from './factory.js';
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
  const deleteNumber = {}
 

  for(var o = 0; o<projectlist.length; o++) {
    if(projectlist[o].title == currentProjectCache.name) {
      const todoArray = projectlist[o].array

      for(var h=0; h<todoArray.length; h++) {
        if(todoArray[h].title == title) {
          deleteNumber.alphabet = h

        }
      }
    todoArray.splice(deleteNumber.alphabet, 1)


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
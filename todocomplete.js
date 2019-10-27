import {currentProjectCache} from './project.js';
import {projectlist} from './factory.js';


const todoComplete = (titleNoSpace, title) => {
  console.log(titleNoSpace, title)
    /// YKSITTÄISEN DIVIN ID ON MUOTOA titleNoSpace

    removeElement(titleNoSpace)
    showalertdiv()
    deleteFromArray(title)
  


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
    var form = document.getElementById("alertdiv")
    var originalContent = form.innerHTML
    form.innerHTML = "Nice Job!"
    setTimeout(function() {
      form.innerHTML = originalContent
    }, 2000)
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
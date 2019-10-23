const todoComplete = (divId) => {
    removeElement(divId)
    showalertdiv()


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
const button = document.getElementById("newProjectBtn")
if(typeof(button) != 'undefined' && button != null) {
    button.addEventListener("click", function() {newProject()})
}

const newProject = () => {
    alert("LOL")
}

export {
    newProject
}


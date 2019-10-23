import {projectlist} from './factory.js';

const changeTodoPriority = (title, number) => {

    if(number !== "Priority") {

        for(var i=0; i<projectlist.length; i++) {
            console.log(projectlist[i].title, title)
            if(projectlist[i].title == title) {
                projectlist[i].priority = number
            }
        }

    }
    
}




  

export {
    changeTodoPriority
}
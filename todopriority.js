import {projectlist} from './factory.js';
import {formatTitle} from './dom.js';

const changeTodoPriority = (title, number) => {

    if(number !== "Priority") {

        for(var i=0; i<projectlist.length; i++) {
            if(projectlist[i].title == title) {

                projectlist[i].priority = number
                const title = formatTitle(projectlist[i].title)
                const prioritydom = document.getElementById("priority"+title)
                prioritydom.textContent = number




            }
        }

    }
    
}



  

export {
    changeTodoPriority
}
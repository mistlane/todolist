import {configureTodo} from '../dist/factory.js';
import {initialLayout} from '../dist/dom.js';
import {localStorageFunction} from '../dist/localstorage.js';
import '../dist/styles/style.css';
import 'bootstrap';




initialLayout()
localStorageFunction()
// Esim. createTodo({title = lol, description = lol, dueDate = now, priority = 0});

const firstTodo = configureTodo("Create a greetings message for this website", "Make it professional and stuff", "24/12/2021", "5", "yes")
const secondTodo = configureTodo("Vielä pitää saada projektit toimimaan local storagella ja korjata lopullisesti sortByDate. Sort by datessa se appendaa jokaselle 'oikealle' päivämäärälle", "", "23/12/2021", "5", "yes")





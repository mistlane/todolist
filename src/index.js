import {configureTodo} from '../dist/factory.js';
import {initialLayout} from '../dist/dom.js';
import '../dist/styles/style.css';
import 'bootstrap';




initialLayout()

// Esim. createTodo({title = lol, description = lol, dueDate = now, priority = 0});

const firstTodo = configureTodo("Wash clothes", "Put 1 dl of deterregant", "Now", "5")





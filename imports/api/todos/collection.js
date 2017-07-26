import { Mongo } from 'meteor/mongo';
import todoSchema from './schema';

const Todos = new Mongo.Collection('todos');
export default Todos;

Todos.attachSchema(todoSchema);

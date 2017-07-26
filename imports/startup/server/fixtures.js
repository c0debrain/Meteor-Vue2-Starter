import Todos from '../../api/todos/collection';

if(Todos.find().count() === 0){
	for(let i = 0; i <= 10; i++){
		Todos.insert({name: `Todo : ${i}`});
	}
}
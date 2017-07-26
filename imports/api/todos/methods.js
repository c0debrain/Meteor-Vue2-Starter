import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Todos from './collection'

export const insert = new ValidatedMethod({
	name: 'todos.insert',
	validate(args){
		check(args, {
			name: String
		});
	},
	run({name}){
		Todos.insert({name: name});
	}
})

export const remove = new ValidatedMethod({
	name: 'todos.remove',
	validate(args){
		check(args, {
			_id: String
		})
	},
	run({_id}){
		Todos.remove({_id: _id});
	}
});

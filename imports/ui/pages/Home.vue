<template>
    <div class="container">
        <h1>Welcome Home</h1>
        <div class="row">
            <div class="col-md-4">
                <b-form-input v-model="form.todo" placeholder="Input todo"></b-form-input>
            </div>
            <div class="col-md-2">
                <b-button @click.native="onAddClick">Add</b-button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <b-table class="my-table" striped hover :busy="isBusy" :fields="fields" :items="items">
                    <template slot="createdAt" scope="item">
                        {{moment(item.item.createdAt).format('DD/MM/YYYY hh:mm:ss')}}
                    </template>
                    <template slot="actions" scope="item">
                        <b-button @click.native="onRemoveClick(item.item._id)">Remove</b-button>
                    </template>
                </b-table>
            </div>
        </div>
    </div>
</template>

<script>
import Todos from '../../api/todos/collection';
import {insert, remove } from '../../api/todos/methods'
export default {
    name: 'Home',
    data(){
    	return {
    		isBusy: true,
            form: {
    			todo: null
            },
		    fields: {
    			_id: {
    				label: 'Id'
                },
    			name: {
    				label: 'Todo list'
                },
                createdAt: {
    				label: 'Created At'
                },
                actions: {
    				label: 'Actions'
                }
            },
            items: []
        }
    },
    methods: {
    	onAddClick(){
    	    const self = this;
    		insert.call({name: this.form.todo}, function (err, rs) {
                if(err){
                    console.error(err)
                }
                self.form.todo = null
            })
        },
        onRemoveClick(_id){
//    	    console.log(_id)
    		remove.call({_id: _id})
        }
    },
    watch: {
    	todos: {
		    handler(todos){
		    	this.isBusy = !this.ready;
    			if(todos.ready){
    				this.items = todos.data
                }
            },
		    deep:true
        }
    },
	grapher: {
    	todos(){
    		return {
    			query: {
    				name: 1,
                    createdAt: 1,
                    $options: {
    				    sort: {createdAt: -1}
                    }
                },
                collection: Todos,
			    fullCount: true
            }
        }
    }
}
</script>

<style>
    table.my-table {
        margin-top: 15px;
    }
</style>
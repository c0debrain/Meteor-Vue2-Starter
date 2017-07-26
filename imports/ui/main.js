import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import routerFactory from './routes';
import moment from 'moment';
Vue.use(BootstrapVue);
import VueMeteorTracker from 'vue-meteor-tracker';
Vue.use(VueMeteorTracker);

import GrapherVue from 'meteor/herteby:grapher-vue';
Vue.use(GrapherVue);

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

get = function(obj, key) {
	if(arguments.length == 1){
		key = obj
		obj = this
	}
	return String(key).split(".").reduce(function(parent, child) {
		if(parent === undefined || parent === null){
			return ''
		} else if (typeof parent === "function"){
			return parent()[child]
		} else if (typeof parent[child] === "function"){
			return parent[child]()
		} else {
			return parent[child]
		}
	}, obj)
}

set = Vue.set

_.extend(Vue.prototype, {
	$global:global,
	$get:get,
	_,
	Meteor,
	moment
})

Meteor.startup(function () {
	const router = routerFactory.create();
	new Vue({
		router,
		render: h => h(App)
	}).$mount('#app');
});


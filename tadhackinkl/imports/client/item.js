import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';
import { Items } from '../shared/items.js';

import "./item.html";
import "./item.css";

Template.itemCard.onCreated(function itemCardOnCreated() {
	//console.log(this);
});


Template.itemCard.helpers({
	'title': function () {
		return this.title;
	},
	'price': function () {
		return this.price;
	},
	'merchant': function () {
		return this.merchant;
	},
	'lng': function () {
		return this.lng;
	},
	'lat': function () {
		return this.lat;	
	},
	'image': function () {
		return this.image;
	}
  
});
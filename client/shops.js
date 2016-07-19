// import { Mongo } from 'meteor/mongo';
// shops = new Mongo.Collection('shops');
//
// if (Meteor.isClient){
//   Template.shops.all_Shops = function(){
//     return shops.find();
//     console.log(shops);
//   };
// }


import { Template } from 'meteor/templating';
import { Shops } from '../imports/api/shops.js';





// Template.shops.helpers({
//   shops() {
//     return Shops.find({});
//   },
// });

Template.shops.helpers({
  shops() {
    return Shops.find({});
  },
});
if (Meteor.isClient){
  Template.shops.all_shops = function(){
    return shops.find().fetch();
  };
}

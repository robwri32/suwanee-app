import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Router.route('/', function () {
  this.layout('ApplicationLayout');
    this.render('Home');
    HTTP.call( 'GET', 'http://suwaneemagazine.com//wp-json/wp/v2/posts', {}, function( error, response ) {

   if (error) {
      console.log(error);
   } else {
      console.log(response);
   }
});
});

Router.route('/about/', function () {
  this.layout('ApplicationLayout');
    this.render('about');
  //  var autotrader = require('./pup.json'); //with path
  //  console.log (autotrader)

});

Router.route('/leaderboard/', function () {
  this.layout('ApplicationLayout');
    this.render('leaderboard');
});


Router.route('/addpup/', function () {
  this.layout('ApplicationLayout');
    this.render('addpup');
});

Router.route('/sponsor/', function () {
  this.layout('ApplicationLayout');
    this.render('sponsor');
});
Router.route('/profile/', function () {
  this.layout('ApplicationLayout');
    this.render('profile');
});

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// home
Router.route('/', function () {
  this.layout('ApplicationLayout');
    this.render('Home');
// api call out
    HTTP.call( 'GET', 'http://suwaneemagazine.com/wp-json/wp/v2/posts', {}, function( error, response ) {
   if (error) {
      console.log(error);
   } else {
      console.log(response);
    var SuwMagData = response;
    this.SuwMagData = new ReactiveVar();
     }
  });
  // close api callout
});
// end home

// working example

Router.route('/header/', function () {
  this.layout('ApplicationLayout');
    this.render('header');
    var Alphas = ['ALL',
              'A', 'B', 'C', 'D','E', 'F',
              'G', 'H', 'I', 'J','K', 'L',
              'M', 'N', 'O', 'P','Q', 'R',
              'S', 'T', 'U', 'V','W', 'X',
              'Y', 'Z'];

Template.header.alphabets = function() {
  return Alphas;
};
});
// close working example

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

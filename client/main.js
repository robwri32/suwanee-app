import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// home
Router.route('/', function () {
  this.layout('ApplicationLayout');
    this.render('Home');
});
// end home




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


Router.route('/backissue/', function () {
  this.layout('ApplicationLayout');
    this.render('backissue');
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


Router.route('/events/', function () {
  this.layout('ApplicationLayout');
    this.render('eventsList');
});

Router.route('/submit_article/', function () {
  this.layout('ApplicationLayout');
    this.render('submit_article');
});



if (Meteor.isClient) {
  Template.backissue.rendered = function() {
    $('#carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
  }
}

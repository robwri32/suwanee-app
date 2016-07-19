import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http';

Template.eventsList.onCreated(function() {
   // where you will perform some necessary, one-time startup stuff
   // 'this' will always refer to the Template.instance() for context
   // so you can do cool stuff on the Template.instance() itself that will only be available
   // to this localized template
   const instance = this;
   // set up the reactive var on the template instance & give it a default value

   // http://stackoverflow.com/questions/34684488/get-data-from-anonymous-http-call

   // event api end point http://suwaneemagazine.com/wp-json/wp/v2/ai1ec_event
   // posts api end point http://suwaneemagazine.com/wp-json/wp/v2/posts

   var posts = require('./posts.json'); //with path

   instance.eventsList = new ReactiveVar(posts);

});






Template.eventsList.onRendered(function() {
  // this is where you would initialize jquery widgets in your 'eventsList' template
  // so this fires EVERY time the template is rendered as opposed to once like the onCreated

  // I would say that if there is no user interaction to trigger it,
  // then this is probably where you want to call your ajax http request

  // so when it returns a value back you need to reference the template instance itself again (Template.instance() <- this is a meteor method)
  // something like this inside the response callback:
  // Template.instance().eventsList.set(resultsArray);

  // so you see I'm referring to the 'eventsList' property that I put on the template instance in onCreated
  // that property is just a container/store (ReactiveVar) for my array...
  // but because it's reactive it will notify any dependants when it changes
   console.log(Template.instance().eventsList.get())
});


  // onto the next part...


// this section is where your helpers live.
// you don't want to do too much heavy lifting here because they are directly tied to your UI and will prevent rendering
// use these to modify data or fetch data to shove into your UI
// the argument is an object of functions
// note the first one 'events' is what we have referred to in our html code's {{#each}} loop

// also an example of how you can just return some simple data from javascript with todaysDate
Template.eventsList.helpers({
  events() {
    // here we just want to reference the ReactiveVar
    return Template.instance().eventsList.get();
  },
  todaysDate() {
    return new Date();
  },
})

// the events logic

Template.eventsList.events({
  'click button'(event, template) {
    // event is an object of the dom event fired
    // so you can refer to event.target.value if relevant etc
    // template is the equivalent of Template.instance() so you can get/set your ReactiveVars or other things/methods
  }
})

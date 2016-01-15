Router.route('/', function () {
  this.render('HomeTemplate');
});

Router.route('/LandingPage', function () {
  this.render('LandingTemplate');
});


Router.route('/TreasureHunt', function () {
  this.render('TreasureHuntTemplate');
});

//To handle logged out scenario
//Router.onBeforeAction(function(pause) {
//  if (! Meteor.userId()) {
//    this.render('HomeTemplate');
//    pause();
//  }
//});
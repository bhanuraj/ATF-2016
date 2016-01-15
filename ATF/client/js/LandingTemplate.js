if (Meteor.isClient) {
  Template.LandingTemplate.events({
    'click .logoutUser': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
            else{
                document.location.href = document.location.origin + "/";
            }
        })
    }
});  
}
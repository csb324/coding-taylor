const her = {
  clothes: "Short skirts", // TODO: refactor unused properties.
  shoes: "High heels",     // belongWith() function works without them.
  activities: "Cheer captain",
  knowsYourStory: false,   
  getsYourHumor: false,
  bringsYouDown: true
}
const me = {
  clothes: "T Shirts",
  shoes: "Sneakers",
  activites: "On the bleachers",
  knowsYourStory: true,
  getsYourHumor: true
}
const you = {
  clothes: "Worn out jeans",
  smileBrightness: function(companion) {
    if (companion.bringsYouDown) {
      return 0;
    } else {
      return 1000000;
    }
  },
  belongWith: function(companion) {
    return (
      (companion.knowsYourStory) && 
      (companion.getsYourHumor) && 
      (this.smileBrightness(companion) > 100)
    );
  }
}

you.belongWith(me);
// => true


var controller = new ScrollMagic.Controller();

// build scene
for (let i = 1; i < 5; i++) {
  new ScrollMagic.Scene({
    triggerElement: "#trigger" + i.toString(),
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "0", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50, // move trigger to center of element
  })
    .setClassToggle("#reveal" + i.toString(), "visible") // add class to reveal
    .addTo(controller);
}

new ScrollMagic.Scene({
    triggerElement: "#trigger5",
    triggerHook: 0.7, // show, when scrolled 10% into view
    duration: "0", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50, // move trigger to center of element
  })
    .setClassToggle("#reveal5", "visible") // add class to reveal
    .addTo(controller);
// Create a timeline with default parameters
targets = document.querySelectorAll('.cast')
var tl = anime.timeline({
    targets: targets,
    delay: function(el, i) { return i * 200 },
    duration: 500, // Can be inherited
    easing: 'easeOutExpo', // Can be inherited
    direction: 'alternate', // Is not inherited
    loop: true // Is not inherited
  });
  
  tl
  .add({
    // override the targets parameter
    targets: '.time',
    keyframes: [
        {translateY: -40},
        {translateX: 250},
        {translateY: 40},
        {translateX: 0},
        {translateY: 0}
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: true
  })
  .add({
    // override the targets parameter
    targets: '.news',
    keyframes: [
        {translateY: -40},
        {translateX: 250},
        {translateY: 40},
        {translateX: 0},
        {translateY: 0}
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: true
  })
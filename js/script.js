$(document).ready(function() {

  // Progress bar
  let containerA = document.getElementById("circleA");

  let circleA = new ProgressBar.circleA(containerA, {

    color: '#64DAF9',
    strokewidth: 8,
    duration: 1400,
    from: { color: '#AAA' },

    step: function(state, circle) {

      circle.path.setAttribute('stroke', state.color);
     
      let value = Math.round(circle.value() * 60);

      circle.setText(value);

    }

  });
  

  circleA.animate(1.0);

}); 

let containerB = document.getElementById("circleB");

let circleB = new ProgressBar.circleA(containerA, {

  color: '#64DAF9',
  strokewidth: 8,
  duration: 1600,
  from: { color: '#AAA' },

  step: function(state, circle) {

    circle.path.setAttribute('stroke', state.color);
   
    let value = Math.round(circle.value() * 254);

    circle.setText(value);

  }

});



 
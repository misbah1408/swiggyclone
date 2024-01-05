// for foods
var button = document.querySelector( '#right' );

button.onclick = function () {
var container = document.querySelector('#box');
sideScroll(container, 'right',10,200,10);
};

var back = document.querySelector('#left');

back.onclick = function () {
var container = document.querySelector('#box'); 
sideScroll(container, 'left', 10,200,10);
};

function sideScroll(element, direction,speed, distance,step){
scrollAmount = 0;
var slideTimer = setInterval(() => {
    if (direction == 'left') {
        element.scrollLeft = element.scrollLeft-step;
    } else {
        element.scrollLeft = element.scrollLeft +step;
    }
    scrollAmount = scrollAmount +step;
    if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
    }
}, speed);
}
// for restuarent
var button = document.querySelector( '#right1' );

button.onclick = function () {
var container = document.querySelector('#box1');
sideScroll(container, 'right',10,300,10);
};

var back = document.querySelector('#left1');

back.onclick = function () {
var container = document.querySelector('#box1'); 
sideScroll(container, 'left', 10,300,10);
};

function sideScroll(element, direction,speed, distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(() => {
        if (direction == 'left') {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
    }

//Toggle Button
document.addEventListener('DOMContentLoaded', function () {
    // Get the button and the hidden div by their IDs
    var toggleButton = document.getElementById('btn-pry');
    var hiddenDiv = document.getElementById('hidden-div');
  
    // Add a click event listener to the button
    toggleButton.addEventListener('click', function () {
      // Toggle the display property of the hidden div
      if (hiddenDiv.style.display === 'none') {
        hiddenDiv.style.display = 'block';
      } else {
        hiddenDiv.style.display = 'none';
      }
    });
  });
      
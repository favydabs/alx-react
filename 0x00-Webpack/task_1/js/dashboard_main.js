import $ from "jquery";
import _ from 'lodash';


$(document).ready(function(){
  $('body').append('<p>Holberton Dashboard</p>');

  $('body').append('<p>Dashboard data for the students</p>');
  
function updateCounter() {
  let count = 0;
  const paragraph = $('#count');

  $('#clickButton').on('click', function() {
    count++;
    paragraph.text(`${count} clicks on the button`);
  });

  $('#clickLink').on('click', function(e) {
    e.preventDefault();
    updateCounter();
  });
}
  $('body').append('<button id="startButton" >Click here to get started</button>', '<p id="count"{count}></p>');

  $('body').append('<p>Copyright - Holberton School</p>');
});


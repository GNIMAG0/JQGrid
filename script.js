$(document).ready(function() {
    $('.box').click(function() {
      $(this).toggleClass('white');
    });
  });
  
  for (let i = 0; i < 16; i++) {
    let box = $('<div class="box"></div>');
    $('#container').append(box);
  }
  
  
  
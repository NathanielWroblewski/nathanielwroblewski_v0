$(document).ready(function() {
  $('#hello').fadeIn('fast').animate({
      top: '-=15px'
    }, 150).animate({
      top: '+=15px'
    }, 200, function(){
        $('#my').fadeIn(200, function(){
          $('#name').fadeIn(400, function(){
            $('#is').fadeIn(400, function(){
              $('#nathanielwroblewski').fadeIn(1000);
            });
          });
        });
      });
  setInterval(function(){
    $big = $('.big');
    $firstli = $('#list').find('li').first();
    $lastli = $('#list').find('li').last();
    $('#bigify').toggle(200, function(){
      $big.removeClass('big').prependTo($('#list'));
      $big.addClass('hidden');
      $firstli.removeClass('hidden');
      $lastli.appendTo($('#bigify').find('ul'));
      $lastli.addClass('big');
    });
    $('#bigify').toggle(200);
  }, 1600);
});

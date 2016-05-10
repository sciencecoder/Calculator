
var chars = [];

$(".btn").on('click', function(e) {
  chars.push($(this).val());
  $('.input').val(chars.join(''));
  
});

$('#AC').on('click', function(e) {
  $('.input').val('');
  chars.splice(0, chars.length);
});
$('#CE').on('click', function(e) {
  chars.pop();
   $('.input').val(chars.join(''));
});

$('#enter').on('click', function() {
  var str = chars.join('');
  var sum = math.eval(str);
 
    $('.input').val(sum);
  
   chars.splice(0, chars.length);
});


$(document).ready(function(){
  $('iframe').each(function(){
    $(this).parent().remove();
  });
});

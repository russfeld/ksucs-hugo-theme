//russfeld deal with themes
var updateThemeLink = function(){
  if($('body').hasClass('dark')){
    $('#themelink').html('<i class="fas fa-sun"></i><span id="top-github-link-text"></span>');
  }else{
    $('#themelink').html('<i class="fas fa-moon"></i><span id="top-github-link-text"></span>');
  }
}

$(document).ready(function(){
    var theme = localStorage.getItem('theme');
    if(theme !== ''){
        $('body').addClass(theme);
    }
    updateThemeLink();

    $('#themelink').click(function () {
      event.preventDefault();
      $('body').toggleClass('dark');
      if($('body').hasClass('dark')){
          localStorage.setItem('theme', 'dark');
      }else{
          localStorage.removeItem('theme');
      }
      updateThemeLink();
    });
});

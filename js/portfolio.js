
$(document).ready(function(){
  var $navlink = $(".nav-link");
  var $toggle = $(".navbar-default .navbar-toggle");
  var $iconBar = $(".navbar-default .navbar-toggle .icon-bar");
  
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
  
// Toggle button hover color effect
  $toggle.mouseover(function(){
                    $iconBar.css("background-color", "#333");
                    })
         .mouseout(function(){
                    $iconBar.css("background-color", "#888")
                    });
  
  // Navbar underlined selection effect
  
  function scrollToAnchor(page){
		var aTag = $("a[name='"+ page +"']");
    var $root = $('html, body');
    
		$root.animate({scrollTop: aTag.offset().top}, 'slow');
	}
	$("a").click(function(event) {
		var href = $(this).attr('href').replace('#', '')
    event.preventDefault();
		scrollToAnchor(href);
	});
  
// EMAIL Form drop down effect
  
  $('.email_form_ctrl').on('click', function(event) {
    event.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).removeClass('opened');
      $('#row1').animate({
        top: "+=20%"}, 500, function(){
          });
      $('.email_panel').stop()
          .slideUp(500);
    } else {
      $(this).addClass('active');
      $(this).addClass('opened');
      $('#row1').animate({
        top: "-=20%"}, 500, function(){
      });
      $('.email_panel').stop()
          .slideDown(500);
    }
  });
// END Email Form drop down effect
  
});

$(window).scroll(function(){
  var windowScrollTop = $(this).scrollTop();
  var $navLink = $(".nav-link");
  var $navDefault = $(".navbar-default");
  var removeUnderlined = function() {
    $navLink.removeClass("underlined");
  };
  var $titleOffset = $('#title').offset();
  var $page2 = $('#page2').offset();
  var $page3 = $('#page3').offset();
  var $page4 = $('#page4').offset();

  
  // Navbar minimize/transition effect
  if (windowScrollTop<100){
    $navDefault.css({
      "background-color" : "transparent",
    });
    $navLink.css({
      "font-size" : "1.5em",
      "font-weight" : "bold"
    });
  } else if (windowScrollTop>100){
    $navDefault.css({
      "background-color" : "black",
    });
    $navLink.css({
      "font-size" : "1em",
      "font-weight" : "normal"
    });
  };
  
  // Underlined links while scrolling through page
  if (windowScrollTop <= $titleOffset.top){
    removeUnderlined();
  } else if (windowScrollTop > $titleOffset.top && windowScrollTop <= $page2.top){
    removeUnderlined();
    $("#brand").addClass("underlined");
  } else if (windowScrollTop > $page2.top && windowScrollTop <= $page3.top){
    removeUnderlined();
    $("#link1").addClass("underlined");
  } else if (windowScrollTop > $page3.top && windowScrollTop < $page4.top){
    removeUnderlined();
    $("#link2").addClass("underlined");
  } else {
    removeUnderlined();
    $("#link3").addClass("underlined");
  };
})
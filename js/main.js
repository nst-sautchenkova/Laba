//load
$(window).on('load', function () {
	$preloader = $('#loader'),
	  $loader = $preloader.find('#cube-loader');
	$loader.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});


/*MENU*/
$(document).on("ready", function () {
    $("#menu .cd-nav-trigger").click(function () {
        $("#menu").toggleClass("menu-open");
		$(".nav-bar").toggleClass("open-menu");
		$('#menu .bar').toggleClass('animate');
		$("body").toggleClass("open-hidden");
    });
	
});


//SELECT
(function( $ ) {
  $.fn.selectbox = function() {
	var selHeight = $('#selectBox').height();
	var rotateDefault = "rotate(0deg)";
		$('.select-block .valueTag').click(function() {
		  $(this).parents('.select-block').addClass("open-select");
		  var currentHeight = $(".open-select #selectBox").height();
		  if (currentHeight < 100 || currentHeight == selHeight) {
			  $(".open-select #selectBox").height("150px");
			  $('.open-select img.arrow').css({borderRadius: "1000px", transition: ".2s", transform: "rotate(180deg)"});
		  }
		  if (currentHeight >= 150) {
			$('.open-select #selectBox').height(selHeight);
			$('.open-select img.arrow').css({transform: rotateDefault});
			$('.select-block').removeClass("open-select");
		  }
		  
		  
		  $('.open-select li.option').click(function() {
			$('.open-select #selectBox').height(selHeight);
			$('.open-select #selectBox').removeClass();
			$('.open-select img.arrow').css({transform: rotateDefault});
			$('.open-select p.valueTag span').text($(this).text());
			
			
			
			var cla=$(this).attr( 'id' );
			$('.open-select #selectBox').addClass(cla);
			$('.select-block').removeClass("open-select");
		  });
		  
		  
		  
	  });
	  
	  
  };
})( jQuery );
$('selector').selectbox();


//TAB
$('document').ready(function(){
   $('ul.tabs').delegate('li:not(.current)', 'click', function() {
	  $(this).addClass('current').siblings().removeClass('current').parents('div.tab-block').find('div.box').hide().eq($(this).index()).fadeIn(150);
	});
  $('ul.tabs li').click(function(e){
	 e.preventDefault();
  });
});

//item
$(document).ready(function() {
$('footer .form-block .input-form').blur(function() {
	$(this).parent().removeClass("focus");
  })
  $('footer .form-block .input-form').focus(function() {
	$('footer .form-block .input-form').removeClass("focus");
	$(this).parent().addClass("focus");
  });
});
  
  
  
//MODAl
$('.modal-block').on('click', function(){
	var	id =  this.id;
  $(".modal[data-id='#"+id+"']").toggleClass('open');
  $(".modal-ov").show("slow");
  $("body").addClass("open-hidden");
  $("#main").addClass("open-mod");
  
});

$(".close").click(function () {
	$(".modal-content").addClass('zoom');
	$(".modal-content.zoom").css({'transform':'scale(0)'});
	$(".modal-ov").hide("slow");
	function func() {
		$(".modal").removeClass("open");
		$("body").removeClass("open-hidden");
		$(".modal-content").removeClass('zoom');
		$("#main").removeClass("open-mod");
		$(".modal-content").css({'transform':'scale(1)'});
	}
	setTimeout(func, 300);
	
});



//filter-ps

$(document).on("ready", function () {
    $(".filter-ps .item").click(function () {
        $(".filter-ps .item").removeClass('active');
		$(this).addClass('active');
		var idps = $(this).attr('id');
		$("#filter-value").removeClass();
		$("#filter-value").addClass(idps);
    });
});


//animate
AOS.init({
	easing: 'ease-out-back',
	duration: 1200,
	disable: function () {
    var maxWidth = 1100;
    return window.innerWidth < maxWidth;
  }
	
});
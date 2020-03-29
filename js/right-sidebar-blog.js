$(document).ready(function() {
	$('#category_link1').click(function() {
		$('#category_link1').removeClass('active').addClass('active');
		$('#category_link2').toggleClass('active',false);
		$('#category_link3').toggleClass('active',false);
		$('#category_link4').toggleClass('active',false);
		$('#category_link5').toggleClass('active',false);
	})

	$('#category_link2').click(function() {
		$('#category_link2').removeClass('active').addClass('active');
		$('#category_link1').toggleClass('active',false);
		$('#category_link3').toggleClass('active',false);
		$('#category_link4').toggleClass('active',false);
		$('#category_link5').toggleClass('active',false);
	})

	$('#category_link3').click(function() {
		$('#category_link3').removeClass('active').addClass('active');
		$('#category_link2').toggleClass('active',false);
		$('#category_link1').toggleClass('active',false);
		$('#category_link4').toggleClass('active',false);
		$('#category_link5').toggleClass('active',false);
	})

	$('#category_link4').click(function() {
		$('#category_link4').removeClass('active').addClass('active');
		$('#category_link2').toggleClass('active',false);
		$('#category_link3').toggleClass('active',false);
		$('#category_link1').toggleClass('active',false);
		$('#category_link5').toggleClass('active',false);
	})

	$('#category_link5').click(function() {
		$('#category_link5').removeClass('active').addClass('active');
		$('#category_link2').toggleClass('active',false);
		$('#category_link3').toggleClass('active',false);
		$('#category_link4').toggleClass('active',false);
		$('#category_link1').toggleClass('active',false);
	})

	$('#tag1').click(function(){
		$('#tag1').toggleClass('choosen');
	})

	$('#tag2').click(function(){
		$('#tag2').toggleClass('choosen');
	})

	$('#tag3').click(function(){
		$('#tag3').toggleClass('choosen');
	})

	$('#tag4').click(function(){
		$('#tag4').toggleClass('choosen');
	})

	$('#tag5').click(function(){
		$('#tag5').toggleClass('choosen');
	})

	$('#tag6').click(function(){
		$('#tag6').toggleClass('choosen');
	})

	$('#tag7').click(function(){
		$('#tag7').toggleClass('choosen');
	})

	$('#tag8').click(function(){
		$('#tag8').toggleClass('choosen');
	})
	

	$(function(){
  $('.column2__category a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    
    $('html, body').animate({scrollTop: dn}, 500);
  });
});
})
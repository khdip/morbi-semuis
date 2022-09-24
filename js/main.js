function main() {
	$('body').hide();
  	$('body').fadeIn(400);

	$('.minus1').hide();
 	$('.para12').hide();
  	$('.para11').on('click', function() {
    	$(this).next().slideToggle(400);
		$('.minus1').toggle(400);
		$(this).toggleClass('active');
		
  });
  
	$('.minus2').hide();
 	$('.para22').hide();
  	$('.para21').on('click', function() {
    	$(this).next().slideToggle(400);
		$('.minus2').toggle(400);
		$(this).toggleClass('active');
		
  });
  
	$('.minus3').hide();
 	$('.para32').hide();
  	$('.para31').on('click', function() {
    	$(this).next().slideToggle(400);
		$('.minus3').toggle(400);
		$(this).toggleClass('active');
		
  });
	
	$('.minus4').hide();
 	$('.para42').hide();
  	$('.para41').on('click', function() {
    	$(this).next().slideToggle(400);
		$('.minus4').toggle(400);
		$(this).toggleClass('active');
		
  });
}
$(document).ready(main);
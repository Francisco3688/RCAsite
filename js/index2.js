var i = 0;

var images = $('#carousel img');

setInterval(function(){

	images.eq(i).fadeOut();

	i++;

	if(i >= images.length){
		i = 0;
	}

	images.eq(i).fadeIn();
}, 5000);

$('.menu').click(function(){
	$('.menu2').fadeIn();
});

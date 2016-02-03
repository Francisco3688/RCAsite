setInterval(function(){
	$('#fade1').fadeOut(2000);
	$('#fade1').fadeIn(2000);
});

$('#click1').on('click', function(){
    $('#top40').fadeIn(700);
    $('#rhythm').hide();
    $('#adult').hide();
    $('#alt').hide();
    $('#rock').hide();
    $('#fade1').hide();
});

$('#click2').on('click', function(){
	$('#rhythm').fadeIn(700);
	$('#top40').hide();
	$('#adult').hide();
	$('#alt').hide();
	$('#rock').hide();
	$('#fade1').hide();
});

$('#click3').on('click', function(){
	$('#adult').fadeIn(700);
	$('#rhythm').hide();
	$('#top40').hide();
	$('#alt').hide();
	$('#rock').hide();
	$('#fade1').hide();
});

$('#click4').on('click', function(){
	$('#alt').fadeIn(700);
	$('#adult').hide();
	$('#rhythm').hide();
	$('#top40').hide();
	$('#rock').hide();
	$('#fade1').hide();
});

$('#click5').on('click', function(){
	$('#rock').fadeIn(700);
	$('#alt').hide();
	$('#adult').hide();
	$('#rhythm').hide();
	$('#top40').hide();
	$('#fade1').hide();
});
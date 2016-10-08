var i = 0;

var images = $('.carousel img');

setInterval(function(){

	images.eq(i).fadeOut();

	i++;

	if(i >= images.length){
		i = 0;
	}

	images.eq(i).fadeIn();
}, 3000);

var a = 0;

var pic = $('.carousel2 img');

setInterval(function(){


	pic.eq(a).fadeOut();

	a++;

	if(a >= pic.length){
		a = 0;
	}

	pic.eq(a).fadeIn();
}, 3000);

$('.menu').click(function(){
	$('.menu2').fadeIn();
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

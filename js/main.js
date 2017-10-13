 window.addEventListener('DOMContentLoaded', function(e){
 	e.preventDefault();
 	// attachEvents();

	// var navOffset = $('nav').offset().top;

		// console.log(navOffset);

	//window.addEventListener("scroll",function(){
		// var scrollPos = (window.pageYOffset!=undefined)?window.pageYOffset:
		// (document.documentElement || document.body.parentNode||document.body).scrollPos;
		//});


		// $(window).scroll(function(){
		// 	var scrollPos = $(window).scrollTop();

		// 	console.log(scrollPos);




 // });
});


  	// function attachEvents(){

  	// 	$('.sideNav a').click(function(e) {
			// e.preventDefault();

	  //    	var myTarget = $(this.hash);
	  //    	myTarget = myTarget.length && myTarget
	      			
	  //       var targetOffset = myTarget.offset().top;
	  //      	$('html,body').animate({scrollTop: targetOffset}, 1000);
	
	  //    });

  	// }




	var mySideNav = document.getElementById("mySideNav");


function openNav(){
	mySideNav.style.width="100vw";
	
	

}

function closeNav(){
	mySideNav.style.width="0";
	

}

document.addEventListener('DOMContentLoaded', function(){ 
function addLinks(parent){ 

	parent.innerHTML += "<a href = '#about'>About</a>"; 
	parent.innerHTML += "<a href = '#favorites'>Favorites</a>";
	parent.innerHTML += "<a href = '#faq'>FAQ</a>";
	parent.innerHTML += "<a href = '#contact'>Contact</a>";
}

	

	var sideNav = document.getElementById("mySideNav");
	addLinks(sideNav);  

	var topNav = document.getElementById("myTopNav");
	addLinks(topNav);

});










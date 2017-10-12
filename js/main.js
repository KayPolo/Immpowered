 window.addEventListener('DOMContentLoaded', function(e){
 	e.preventDefault();
 	attachEvents();

	// var navOffset = $('nav').offset().top;

		// console.log(navOffset);

	//window.addEventListener("scroll",function(){
		// var scrollPos = (window.pageYOffset!=undefined)?window.pageYOffset:
		// (document.documentElement || document.body.parentNode||document.body).scrollPos;
		//});


		$(window).scroll(function(){
			var scrollPos = $(window).scrollTop();

			console.log(scrollPos);




 });
});


  	function attachEvents(){

  		$('.sideNav a').click(function(e) {
			e.preventDefault();

	     	var myTarget = $(this.hash);
	     	myTarget = myTarget.length && myTarget
	      			
	        var targetOffset = myTarget.offset().top;
	       	$('html,body').animate({scrollTop: targetOffset}, 1000);
	
	     });

  	}




	var mySideNav = document.getElementById("mySideNav");


function openNav(){
	mySideNav.style.width="30vw";
	
	

}

function closeNav(){
	mySideNav.style.width="0";
	

}

document.addEventListener('DOMContentLoaded', function(){ //since we don't have anything to triger the action of pushing all the links
														  //inside the HTML, we need to use this statement
														  //the meaning of this statement is when the you load the DOM, load as well the 
														  //function that contains all the information inside...

//There are two ways to do this. This is the longer, but easier to understand

// 	var topNav = document.getElementById("myTopNav"); 
// 	topNav.innerHTML += "<a href = 'index.html'>HOME</a>"; 
// 	topNav.innerHTML += "<a href = 'about.html'>ABOUT</a>";
// 	topNav.innerHTML += "<a href = 'work.html'>WORK</a>";
// 	topNav.innerHTML += "<a href = 'more.html'>MORE</a>"; 
// 	topNav.innerHTML += "<a href = 'contact.html'>CONTACT</a>";

// 	var sideNav = document.getElementById("mySideNav");
// 	sideNav.innerHTML += "<a href = 'index.html'>HOME</a>"; 
// 	sideNav.innerHTML += "<a href = 'about.html'>ABOUT</a>";
// 	sideNav.innerHTML += "<a href = 'work.html'>WORK</a>";
// 	sideNav.innerHTML += "<a href = 'more.html'>MORE</a>"; 
// 	sideNav.innerHTML += "<a href = 'contact.html'>CONTACT</a>";   

// });


//This is and optimized version 
function addLinks(parent){ //here I'm using an argument for my function
							// so I can astore all the information without repeating it
	parent.innerHTML += "<a href = '#home'>HOME</a>"; 
	parent.innerHTML += "<a href = '#grid-one'>GRID OF 9</a>";
	parent.innerHTML += "<a href = '#rq'>RESEARCH QUESTIONS</a>";
	parent.innerHTML += "<a href = '#inspiration'>INSPIRATION GRID</a>";
	parent.innerHTML += "<a href = '#aesthetic'>AESTHETIC GRID</a>";
	parent.innerHTML += "<a href = '#refined'>REFINED R.Q.</a>";
}

	

	var sideNav = document.getElementById("mySideNav");
	addLinks(sideNav);  // here I'm saying, take all the information inside the
						// function addLink and substitute the argument (in this case the 
						//argument name is parent) with the variable sideNav 
});










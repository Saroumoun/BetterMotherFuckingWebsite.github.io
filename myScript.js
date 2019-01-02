let monAlerte = 'Hey le site xxxvidsxxx est trop bien. Viens dessus stp please';

function rediriger(){
	if(confirm(monAlerte)){
		window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
	}
}

setTimeout(function(){rediriger()}, 10000);

function psychoBackground(){
	document.querySelector('body').setAttribute("style", "background-color: magenta;");
}
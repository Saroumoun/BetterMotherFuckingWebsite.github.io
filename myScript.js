let monAlerte = 'Hey le site xxxvidsxxx est trop bien. Viens dessus stp please';

// setTimeout(function(){confirm(monAlerte)}, 10000);

function rediriger (){
	if(confirm(monAlerte)){
		window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
	}
}

setTimeout(function(){rediriger()}, 10000);

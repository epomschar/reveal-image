function reveal(event) {
    event.target.previousElementSibling.style.clip = "rect(0px, " + (event.clientX - event.target.offsetLeft) + "px, 400px, 0px)";
}

$(document).ready(function(){
	$('.activator').mousemove(reveal);    
});

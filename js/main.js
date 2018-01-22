	
window.onload = function randomImage(){
		var images = [
				'./img/downtown_1.jpg',
				'./img/downtown_7.jpg',
				'./img/downtown_8.jpg',
				'./img/downtown_10.jpg',
				'./img/downtown_9.jpg'
					];
					
		document.body.style.backgroundImage = 'url(' + images[Math.floor(Math.random() * images.length)] +')';		
 		document.body.style.backgroundRepeat = "no-repeat";
 		document.body.style.backgroundSize = "cover"
						}
					
						

document.addEventListener("DOMContentLoaded", randomImage()); 		

				
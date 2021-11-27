console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted successfully!')
}

function hoverPicture(evt) {
	evt.preventDefault();
	
	alert('You are super the bees knees bro! keep doing cool my fellow!')
}

let form = document.querySelector('form#contact');
let pic = document.querySelector('img')

form.addEventListener('submit', handleSubmit);
pic.addEventListener('mouseover', hoverPicture);


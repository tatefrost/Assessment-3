let favColor = document.querySelector('#color');
let favPlace = document.querySelector('#place');
let favRitual = document.querySelector('#ritual');

let displayColor = evt => {
    evt.preventDefault();
    alert('my favorite color is yellow')
}

let displayPlace = evt => {
    evt.preventDefault();
    alert('my favorite place is Germany')
}

let displayRitual = evt => {
    evt.preventDefault();
    alert('my favorite ritual is magic')
}

favColor.addEventListener('click', displayColor)
favPlace.addEventListener('click', displayPlace)
favRitual.addEventListener('click', displayRitual)
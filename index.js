console.log('Script started')

let count = 0

function increase() {
	count++
	document.getElementById('counter').innerText = count
}

function decrease() {
	count--
	document.getElementById('counter').innerText = count
}

function reset() {
	count = 0
	document.getElementById('counter').innerText = count
}

function selectTheme(theme) {
	document.getElementsByTagName('body')[0].className = theme
	document.getElementsByTagName('main')[0].className = theme
	const buttons = document.getElementsByTagName('button')

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].className = theme
	}
}

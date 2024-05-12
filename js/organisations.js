function add_click() {
	document.getElementById('keks').append(addition())
}

function addition() {
	let i = document.createElement('div')
	i.className += ' card-body'
	i.innerHTML = document.getElementById('test').innerHTML
	return i
}

function save(button) {
	var test = button.closest('.card-body')
	console.log(test)
	let d = test.querySelectorAll('input')
	d.forEach(element => {
		element.classList.remove('bordered')
		element.setAttribute('readonly', 'true')
	})
}

function alter(button) {
	var test = button.closest('.card-body')
	console.log(test)
	let d = test.querySelectorAll('input')
	console.log('alter')
	d.forEach(element => {
		element.classList.add('bordered')
		element.removeAttribute('readonly')
	})
}

function del(button) {
	var test = button.closest('.card-body')
	test.style.cssText = 'display: none'
}

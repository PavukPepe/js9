function add_click() {
	document.getElementById('keks').append(addition())
}

function addition(
	phone = '',
	email = '',
	metro = '',
	address = '',
	org_name = ''
) {
	let i = document.createElement('div')
	i.className += ' card-body'
	i.innerHTML = document.getElementById('test').innerHTML
	console.log(i.querySelector('#phone'))
	i.querySelector('#phone').value = email
	i.querySelector('#metro').value = metro
	i.querySelector('#address').value = address
	i.querySelector('#org_name').value = org_name
	return i
}
;-function addition_done(phone, email, metro, address, org_name) {
	let i = document.createElement('div')
	i.className += ' card-body'
	i.innerHTML = document.getElementById('templ').innerHTML
	i.querySelector('#phone').innerHTML = phone
	i.querySelector('#email').innerHTML = email
	i.querySelector('#metro').innerHTML = metro
	i.querySelector('#address').innerHTML = address
	i.querySelector('#org_name').innerHTML = org_name
	return i
}

function save(button) {
	var test = button.closest('.card-body')
	console.log(test)
	phone = test.querySelector('#phone').value
	email = test.querySelector('#email').value
	metro = test.querySelector('#metro').value
	address = test.querySelector('#address').value
	org_name = test.querySelector('#org_name').value
	test.innerHTML = addition_done(
		phone,
		email,
		metro,
		address,
		org_name
	).innerHTML
	console.log(phone, email, metro, address)
	console.log('Save button clicked')
}

function alter(button) {
	var test = button.closest('.card-body')
	console.log(test)
	phone = test.querySelector('#phone').innerHTML
	email = test.querySelector('#email').innerHTML
	metro = test.querySelector('#metro').innerHTML
	address = test.querySelector('#address').innerHTML
	org_name = test.querySelector('#org_name').innerHTML
	test.innerHTML = addition(phone, email, metro, address, org_name).innerHTML
	console.log(phone, email, metro, address, org_name)
	console.log('Change button clicked')
}

function del(button) {
	var test = button.closest('.card-body')
	test.style.cssText = 'display: none'
}

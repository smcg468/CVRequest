const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener ('mouseenter', () => {
	container.classList.add('hover-left');
});

left.addEventListener ('mouseleave', () => {
	container.classList.remove('hover-left');
});

right.addEventListener ('mouseenter', () => {
	container.classList.add('hover-right');
});

right.addEventListener ('mouseleave', () => {
	container.classList.remove('hover-right');
});

function validateForm() {
  var Firstname = document.getElementsByTagName('Fname')
  var Surname = document.getElementsByTagName('Surname')
  var emailaddress = document.getElementsByTagName('email')
  var Businessname = document.getElementsByTagName('Business')
  var addressline = document.getElementsByTagName('Address')
  var addressline2 = document.getElementsByTagName('Address2')
  var addressline3 = document.getElementsByTagName('Address3')
  var BusinessPostcode = document.getElementsByTagName('Postcode')

if (Firstname.value == "" || Surname.value == "") {

alert ("No Blank Values Allowed")
}
else 
{
	
}

}
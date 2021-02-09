function editNav() {
	var x = document.getElementById("myTopnav")
	if (x.className === "topnav") {
		x.className += " responsive"
	} else {
		x.className = "topnav"
	}
}

var formularIsValid = true

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const closeBtn = document.querySelectorAll(".close-modal")
const submitBtn = document.querySelector(".btn-submit")

const requiredInputs = document.querySelectorAll("input[required]")
const errorMessage = document.querySelector(".error-message")
const modalBodyFirst = document.querySelector(".modal-body__first")
const modalBodySecond = document.querySelector(".modal-body__second")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// CLose modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal))

// Submit event
submitBtn.addEventListener("click", validate)

// launch modal form
function launchModal() {
	modalbg.style.display = "block"
	document.body.classList.add("disable-scroll")
}

// Close modal form
function closeModal() {
	modalbg.style.display = "none"
	document.body.classList.remove("disable-scroll")
}

// Submit formular
function validate(e) {
	e.preventDefault()
	formularIsValid = true
	requiredInputs.forEach((element) => {
		if (element.matches(":invalid")) {
			errorMessage.classList.add("visible")
			formularIsValid = false
		}
	})
	if (formularIsValid) {
		modalBodyFirst.style.display = "none"
		modalBodySecond.style.display = "block"
	}
}

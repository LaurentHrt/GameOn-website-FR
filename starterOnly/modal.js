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
const closeBtn = document.querySelector(".close")
const submitBtn = document.querySelector(".btn-submit")

const requiredInputs = document.querySelectorAll("input[required]")
const errorMessage = document.querySelector(".error-message")
const modalBody = document.querySelector(".modal-body")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// CLose modal event
closeBtn.addEventListener("click", closeModal)

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
		errorMessage.classList.remove("visible")
		modalBody.innerHTML = "Merci de votre inscription"
	}
}

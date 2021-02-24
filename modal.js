// ************* Variables ************* //
let formularIsValid = false
let date = new Date()

// ************* DOM Elements ************* //
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const closeBtn = document.querySelectorAll(".close-modal")
const submitBtn = document.querySelector(".btn-submit")
const modalBodyConfirmation = document.querySelector(".modal-body__confirmation")
const inputDate = document.querySelector(".formData input[type=date]")
const modalContent = document.querySelector(".content")

// ************* Events listeners ************* //
// open modal
modalBtn.forEach((btn) => btn.addEventListener("click", openModal))

// ************* DOM Modifications ************* //
inputDate.setAttribute("max", date.getFullYear() - 18 + "-" + String(date.getMonth()).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0"))

// ************* Functions ************* //
function editNav() {
	let x = document.getElementById("myTopnav")
	if (x.className === "topnav") {
		x.className += " responsive"
	} else {
		x.className = "topnav"
	}
}

// open modal
function openModal() {
	// add event listeners
	closeBtn.forEach((btn) => btn.addEventListener("click", closeModal))
	submitBtn.addEventListener("click", validate)
	modalbg.addEventListener("click", closeModal)
	modalContent.addEventListener("click", (e) => e.stopPropagation())

	// Disable scroll and show modal
	document.body.classList.add("disable-scroll")
	modalbg.style.display = "flex"
}

// Close modal
function closeModal() {
	// Remove event listeners
	closeBtn.forEach((btn) => btn.removeEventListener("click", closeModal))
	submitBtn.removeEventListener("click", validate)
	modalbg.removeEventListener("click", closeModal)
	modalContent.removeEventListener("click", (e) => e.stopPropagation())

	// Enable scroll, hide and reset modal
	document.body.classList.remove("disable-scroll")
	modalbg.style.display = "none"
	modalBodyConfirmation.style.display = "none"
}

// validate and submit formular
function validate(e) {
	e.preventDefault()
	formularIsValid = true

	formData.forEach((element) => {
		element.querySelectorAll("input[required]").forEach((input) => {
			if (input.matches(":invalid")) {
				element.setAttribute("data-error-visible", "true")
				formularIsValid = false
			} else {
				element.setAttribute("data-error-visible", "false")
			}
		})
	})

	if (formularIsValid) {
		// Show confirmation
		modalBodyConfirmation.style.display = "flex"
	}
}

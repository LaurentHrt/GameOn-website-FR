// ************* Variables ************* //
var formularIsValid = false
var [month, day, year] = new Date().toLocaleDateString("en-US").split("/")

// ************* DOM Elements ************* //
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const closeBtn = document.querySelectorAll(".close-modal")
const submitBtn = document.querySelector(".btn-submit")
const modalBodyFirst = document.querySelector(".modal-body__first")
const modalBodySecond = document.querySelector(".modal-body__second")
const inputDate = document.querySelector(".formData input[type=date]")

// ************* Events listeners ************* //
// launch modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
// CLose modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal))
// Submit button
submitBtn.addEventListener("click", validate)

// ************* DOM Modifications ************* //
inputDate.setAttribute("max", year - 18 + "-" + month.padStart(2, "0") + "-" + day.padStart(2, "0"))

// ************* Functions ************* //
function editNav() {
	var x = document.getElementById("myTopnav")
	if (x.className === "topnav") {
		x.className += " responsive"
	} else {
		x.className = "topnav"
	}
}

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
		modalBodyFirst.style.display = "none"
		modalBodySecond.style.display = "block"
	}
}

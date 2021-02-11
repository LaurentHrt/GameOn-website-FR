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
const content = document.querySelector(".content")

// ************* Events listeners ************* //
// open modal
modalBtn.forEach((btn) => btn.addEventListener("click", openModal))

// ************* DOM Modifications ************* //
inputDate.setAttribute("max", year - 18 + "-" + month.padStart(2, "0") + "-" + day.padStart(2, "0"))

// ************* Functions ************* //

// open modal form
function openModal() {
	closeBtn.forEach((btn) => btn.addEventListener("click", closeModal))
	submitBtn.addEventListener("click", validate)
	modalbg.addEventListener("click", closeModal)
	content.addEventListener("click", (e) => e.stopPropagation())
	document.body.classList.add("disable-scroll")
	modalbg.style.display = "block"
}

// Close modal form
function closeModal() {
	closeBtn.forEach((btn) => btn.removeEventListener("click", closeModal))
	submitBtn.removeEventListener("click", validate)
	modalbg.removeEventListener("click", closeModal)
	content.removeEventListener("click", (e) => e.stopPropagation())
	document.body.classList.remove("disable-scroll")
	modalbg.style.display = "none"
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
		// modalBodyFirst.style.display = "none"
		modalBodySecond.style.display = "block"
	}
}

function editNav() {
	var x = document.getElementById("myTopnav")
	if (x.className === "topnav") {
		x.className += " responsive"
	} else {
		x.className = "topnav"
	}
}

var formularIsValid = false

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")

const formData = document.querySelectorAll(".formData")

const closeBtn = document.querySelectorAll(".close-modal")
const submitBtn = document.querySelector(".btn-submit")

const modalBodyFirst = document.querySelector(".modal-body__first")
const modalBodySecond = document.querySelector(".modal-body__second")

const inputDate = document.querySelector(".formData input[type=date]")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))

// CLose modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal))

// Submit event
submitBtn.addEventListener("click", validate)

let [month, day, year] = new Date().toLocaleDateString("en-US").split("/")
year -= 18
inputDate.setAttribute("max", year + "-" + month.padStart(2, "0") + "-" + day.padStart(2, "0"))

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

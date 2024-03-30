let emailValidationFlag = false
let passwordValidationFlag = false

let inputs = document.querySelectorAll("input")
let errorMsg = document.querySelectorAll(".error-msg")
let validMsg = document.querySelector(".valid-msg")

///email
function emailValidation() {
    let emailFlag = false
    let emailInput = document.querySelector("#email")
    let emailValue = emailInput.value.trim()
    if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
        emailFlag = true
    }
    emailValidationFlag = emailFlag
    displayMsg()
}

//password
function passwordValidation() {
    let passwordFlag = false
    let passwordInput = document.querySelector("#password")
    let passwordValue = passwordInput.value.trim()
    if (passwordValue.length > 8) {
        passwordFlag = true
    }
    passwordValidationFlag = passwordFlag
    displayMsg()

}

//error msg & valid msg
function displayMsg() {
    if (emailValidationFlag && passwordValidationFlag) {
        validMsg.classList.remove("hide")
        for (let e of errorMsg) {
            e.classList.add("hide")
        }
        for (let i of inputs) {
            i.style.cssText = `margin:5px 0px 15px;`
        }
    }
    else {
        validMsg.classList.add("hide")
        for (let e of errorMsg) {
            e.classList.remove("hide")
        }
    }
}

//confirmation window & alert
function confirmation() {
    let enterFlag = false
    for (let e of errorMsg) {
        if (e.classList.contains("hide")) {
            enterFlag = true
        }
    }
    if (enterFlag) {
        if (confirm("Are you sure you want to submit?")) {
            alert("Successful Signup!")
        }
        else{
            location.reload()
        }
    }
}
const form = document.getElementById("form");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const messageText = document.getElementById("message");
const textError = document.querySelectorAll("small");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const inputNameValue = inputName.value
    const inputEmailValue = inputEmail.value
    const inputPhoneValue = inputPhone.value
    const messageTextValue = messageText.value

    if (inputNameValue === "") {
        inputValidationError(inputName)
        textError[3].classList.add("text-error")
    } else {
        inputValidationSuccess(inputName)
        textError[3].classList.remove("text-error")
    }
    if (inputEmailValue === "") {
        inputValidationError(inputEmail)
        textError[0].classList.add("text-error")
    } else {
        inputValidationSuccess(inputEmail)
        textError[0].classList.remove("text-error")
    }
    if (inputPhoneValue === "") {
        inputValidationError(inputPhone)
        textError[1].classList.add("text-error")
    } else {
        inputValidationSuccess(inputPhone)
        textError[1].classList.remove("text-error")
    }
    if (messageTextValue === "") {
        inputValidationError(messageText)
        textError[2].classList.add("text-error")
    } else {
        inputValidationSuccess(messageText)
        textError[2].classList.remove("text-error")
    }

}

function inputValidationSuccess(div) {
    const formFilled = div.parentElement;
    formFilled.classList.add("success")
}
function inputValidationError(div) {
    const formFilled = div.parentElement;
    formFilled.classList.add("error");
    formFilled.classList.remove("success")
}


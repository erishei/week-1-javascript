const firstNameInput = document.querySelector("#fName");
const submitButton = document.querySelector("#submitButton")
const span = document.querySelector("#inputValid")

// function enableBTN () {
//     submitButton.disabled = firstNameInput.value.length >= 5;
// }
//
// firstNameInput.addEventListener("keyup", enableBTN)
//
// firstNameInput.onkeyup = function () {
//     if (firstNameInput.value.length >= 5){
//         submitButton.disabled = false;
//         span.innerHTML = `<span>Your name is of suitable length</span>`;
//         span.style.color = "#00FF00"
//     }else{
//         submitButton.disabled = true;
//         span.innerHTML = `<span>Your name is too short</span>`;
//         span.style.color = "#FF0000"
//     }
// }

firstNameInput.onkeyup = function () {
    if (firstNameInput.value.length >= 5){
        submitButton.disabled = false;
        span.innerHTML = "Your name is of suitable length";
        span.classList = "success";
    }else{
        submitButton.disabled = true;
        span.innerHTML = "Your name is too short";
        span.classList = "error";

    }
}
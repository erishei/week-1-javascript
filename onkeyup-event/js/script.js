const firstNameInput = document.querySelector("#first-name");
const formSignUpBtn = document.querySelector("#signup-BTN");
const firstNameErrorMessage = document.querySelector("#first-name-error-message");
const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");
// I want to trigger an onkeyup event when I write something in the
// first name input

firstNameInput.onkeyup = function (event) {
    let firstNameInputValue = event.target.value;
    // condition - if the totalNumberOfCharsFirstName > 5
    // formSignUpBTN disabled will be false
    if (firstNameInputValue.length >= 5) {}
}

passwordInput.onkeyup = function (event){
    let passwordValue = event.target.value;
    console.log("passwordValue: ", passwordValue);
    // switch case:
    // check the total number of chars(characters)
    let totalNumberOfCharactersInPassword = passwordValue.length;
    console.log(totalNumberOfCharactersInPassword);

    switch (totalNumberOfCharactersInPassword) {
        case totalNumberOfCharactersInPassword == "123456":
            passwordErrorMessage.innerHTML = "This is a lame password, do better";
            break;
        case (totalNumberOfCharactersInPassword > 3):
            passwordErrorMessage.innerHTML = "Still not quite there, try again";
            break;
        case (totalNumberOfCharactersInPassword > 5):
            passwordErrorMessage.innerHTML = "Still not quite there, try again";
            break;
        case (totalNumberOfCharactersInPassword > 8):
            passwordErrorMessage.innerHTML = "Purrfect";
            break;
        default:
            passwordErrorMessage.innerHTML = "Write your password here!";
            break;
    }
}
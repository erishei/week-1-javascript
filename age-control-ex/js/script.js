const ageInput = document.querySelector("#age");
const enterBtn = document.querySelector(".enter-btn");

enterBtn.addEventListener("click", function () {
    // console.log("Button is clicked.");
    const age = ageInput.value;
    // console.log("Age: ", age);
    const isAgeOkay = isOldEnough(age);
    // console.log(isAgeOkay);
    if(isAgeOkay) {
        document.location.href = "welcome-page.html";
    }else {
// TODO handle error: please show an error message
        // alert("You can't enter here!") -- can be used
    }
})

function isOldEnough(ageToCheck){
    if (ageToCheck >= 13) {
        return true;
    }
    return false;
}
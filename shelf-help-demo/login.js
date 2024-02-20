


const registerBtn = document.getElementById("#btnRegister");
const userName = document.getElementById("#user");
registerBtn.addEventListener('click',()=> {
    let newUser = {
        username: registerUserName.value,
        collection: []
    }

    fetch('http://localhost:3000/users'),{
        method : 'POST',
        body : JSON.stringify(newUser),
        headers : {
            "Content-type": "application/json; charset=UTF-8",
        },
    }
})


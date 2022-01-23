const password = document.querySelector("#field2");
password.addEventListener('keyup', ()=>{
    password.value = password.value.trim();

    const regex = /^(?=.*[^\w])(?=.*\d).{8,}$/g;
    if(password.value){
        if(password.value.match(regex)){
            password.classList.remove("password-invalid");
            password.classList.add("password-valid");

        } else{
            password.classList.remove("password-valid");
            password.classList.add("password-invalid");
        }
    } else{
        password.classList.remove("password-valid", "password-invalid");
    }
})
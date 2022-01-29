const password = document.querySelector("#field2");
const form = document.querySelector('#form1');

const regex = /^(?=.*[\W])(?=.*\d).{8,}$/;

password.addEventListener('keyup', event => {

    password.value = password.value.trim();

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


form.addEventListener('submit', event => {

    event.preventDefault();
    password.value = password.value.trim();

    if(!password.value.match(regex)){
        alert('Za słabe hasło! Hasło musi składać się z co najmniej 8 znaków i zawierać co najmniej jedną cyfrę i jeden znak specjalny.')
    }
})
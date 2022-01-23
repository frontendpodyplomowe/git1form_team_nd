
# Formularz:
- [x] imię
- [x] hasło
- [x] mail
- [x] doświadczenie
- [x] wybór miasta
- [x] opis sprawy
- [x] radio z wyborem sportu
- [ ] wybór preferowanego sposobu pracy /zdalny/hubryda/stacjonarny/
- [ ] kod sprawdzający hasło

# Kody spradzające
## hasło

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

# Wykorzystane technologie
## js
## html
## css

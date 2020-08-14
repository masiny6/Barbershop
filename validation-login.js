let showPassword = document.querySelector(".show-password");
let loginInput = document.querySelector(".login-input");
let passwordInput = document.querySelector(".password-input");
let comeIn = document.querySelector(".come-in");
let error = document.querySelector(".error-js");
let contentModal = document.querySelector(".content-modal");
let form = document.querySelector(".content-modal form");
let openModal = document.querySelector(".header-login-item a");
let modalDialog = document.querySelector(".modalDialog");
let closeLogin = document.querySelector(".close");

//Открываем модальное окно с логином и паролем
openModal.onclick = function() {
    modalDialog.style.display = "block";
    loginInput.value = localStorage.getItem("login");
};
closeLogin.onclick = function() {
    modalDialog.style.display = "none";
};
//Показываем пароль
showPassword.onclick = function() {
    if (showPassword.checked) {
        passwordInput.type = "text";
    }
    else {
        passwordInput.type = "password"
    }
};
//Проверяем форму на валидность
comeIn.onclick = function(evt) {
    if (!loginInput.value) {
        evt.preventDefault();
        loginInput.style.border = "2px solid red";
    }
    if (!passwordInput.value) {
        evt.preventDefault();
        error.textContent = "Ваш пароль меньше 8 символов";
    } else if (passwordInput.value.length < 8) {
        evt.preventDefault();
        error.textContent = "Ваш пароль меньше 8 символов";
    } else {
        localStorage.setItem("login", loginInput.value);
    }
};
loginInput.oninput = function() {
    loginInput.style.border = "2px solid black";
};
passwordInput.oninput = function() {
    error.textContent = "";
    if (5 > passwordInput.value.length > 0) {
    passwordInput.style.borderBottom = "2px solid red";
    } else if (passwordInput.value.length < 8) {
        passwordInput.style.borderBottom = "2px solid orange";
    } else {
        passwordInput.style.borderBottom = "2px solid green";
    }
};
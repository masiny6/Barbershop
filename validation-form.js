let formRecordButton = document.querySelector(".form-record button");
let formRecord = document.querySelector(".form-record");
let reservationInfo = document.querySelector(".reservation-info");
let formNameInput = document.querySelector(".form-name-input");
let formTimeInput = document.querySelector(".form-time-input");
let formDataInput = document.querySelector(".form-data-input");
let formPhoneInput = document.querySelector(".form-phone-input");

//Проверка формы на валидность
formRecordButton.onclick = function(evt) {
        if (!formNameInput.value) {
            evt.preventDefault();
            formNameInput.style.border = "2px solid red";
        }
        if (!formDataInput.value) {
            evt.preventDefault();
            formDataInput.style.border = "2px solid red";
        } 
        if (!formPhoneInput.value) {
            evt.preventDefault();
            formPhoneInput.style.border = "2px solid red";
        }
        if (!formTimeInput.value) {
            evt.preventDefault();
            formTimeInput.style.border = "2px solid red";
        } 
        if (formTimeInput.value && formPhoneInput.value && formDataInput.value && formNameInput.value) {
            evt.preventDefault();
            formRecord.style.display = "none";
            reservationInfo.textContent = "Спасибо за обращение! Наш менеджер свяжется с вами в ближайшее время!";
            reservationInfo.style.color = "blue";
        }
    };
formNameInput.oninput = function() {
        formNameInput.style.border = "2px solid black";
};
formDataInput.oninput = function() {
        formDataInput.style.border = "2px solid black";
        // formDataInput.style.outline = "0px solid black";
};
formPhoneInput.oninput = function() {
        formPhoneInput.style.border = "2px solid black";
};
formTimeInput.oninput = function() {
        formTimeInput.style.border = "2px solid black";
};

// //Появление фокуса на форме при прокрутке страницы
// window.onscroll = function () {
//     if (window.pageYOffset > 800) {
//         formDataInput.style.outline = "1px solid blue";
//         formDataInput.focus();
//     } else if (window.pageYOffset < 800) {
//         formDataInput.style.outline = "0px solid black";
//         formDataInput.blur();
//     }
//   }; 
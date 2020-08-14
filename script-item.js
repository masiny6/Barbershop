let mainPhotoCatalog = document.querySelector(".main-photo-catalog");
let photo1 = document.querySelector(".photo-1-js");
let photo2 = document.querySelector(".photo-2-js");
let photo3 = document.querySelector(".photo-3-js");

// Смена фото при клике
photo1.onclick = function() {
    mainPhotoCatalog.setAttribute("src", "content/catalog-item-1-2.png");
    photo1.style.boxShadow = "0 0 15px rgba(0, 47, 255, 0.5)";
    photo2.style.boxShadow = "none";
    photo3.style.boxShadow = "none";
}
photo2.onclick = function() {
    mainPhotoCatalog.setAttribute("src", "content/catalog-item-1-3.png");
    photo2.style.boxShadow = "0 0 15px rgba(0, 47, 255, 0.5)";
    photo1.style.boxShadow = "none";
    photo3.style.boxShadow = "none";
}
photo3.onclick = function() {
    mainPhotoCatalog.setAttribute("src", "content/catalog-item-1-1.png");
    photo3.style.boxShadow = "0 0 15px rgba(0, 47, 255, 0.5)";
    photo1.style.boxShadow = "none";
    photo2.style.boxShadow = "none";
}
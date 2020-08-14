let popup = document.querySelector(".popup");
let siteNavigation = document.querySelector(".site-navigation");

// Открытие попапа
popup.onclick = function() {
    if (siteNavigation.classList.contains("site-navigation-370px")) {
        siteNavigation.classList.remove("site-navigation-370px");
        popup.classList.remove("popup");
        popup.classList.add("close-popup");
    } else {
        siteNavigation.classList.add("site-navigation-370px");
        popup.classList.add("popup");
        popup.classList.remove("close-popup");
    };
};



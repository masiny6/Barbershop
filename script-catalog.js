let filterForm = document.querySelector(".filter-form");
let productFilterForm = document.querySelector(".product-filter-form");
let baxterInput = document.querySelector("[name=manufacturers-1]");
let mrNattyInput = document.querySelector("[name=manufacturers-2]");
let suavecitoInput = document.querySelector("[name=manufacturers-3]");
let malinGoetzInput = document.querySelector("[name=manufacturers-4]");
let murraysInput = document.querySelector("[name=manufacturers-5]");
let americanCrewInput = document.querySelector("[name=manufacturers-6]");
let accessoriesInput = document.querySelector(".accessories");
let careInput = document.querySelector(".care");
let razorInput = document.querySelector(".razor");
let productFilterFormButton = document.querySelector(".product-filter-form button");
let baxterProduct = document.querySelectorAll(".baxter-js");
let suavecitoProduct = document.querySelector(".suavecito-js");
let americanCrewProduct = document.querySelectorAll(".american-js");
let accessoriesProduct = document.querySelector(".accessories-js");
let careProduct = document.querySelectorAll(".care-js");
let razorProduct = document.querySelector(".razor-js");

filterForm.onclick = function() {
    if (productFilterForm.classList.contains("product-filter-form-370px")) {
        productFilterForm.classList.remove("product-filter-form-370px");
        filterForm.classList.remove("fiter-form");
        filterForm.classList.add("close-filter-form");
        filterForm.textContent = "Закрыть фильтр";
    } else {
        productFilterForm.classList.add("product-filter-form-370px");
        filterForm.classList.add("fiter-form");
        filterForm.classList.remove("close-filter-form");
        filterForm.textContent = "Фильтр";
    }
};

productFilterFormButton.onclick = function(evt) {
    //Фильтр производителей
    evt.preventDefault();
    if (baxterInput.checked && !suavecitoInput.checked && !americanCrewInput.checked) {
        for (let _baxterProduct of baxterProduct) {
        _baxterProduct.style.display = "block";
        }
        for (let _americanCrewProduct of americanCrewProduct) {
        _americanCrewProduct.style.display = "none";
        }
        suavecitoProduct.style.display = "none";
    }
    if (suavecitoInput.checked && !baxterInput.checked && !americanCrewInput.checked) {
        suavecitoProduct.style.display = "block";
        for (let _americanCrewProduct of americanCrewProduct) {
        _americanCrewProduct.style.display = "none";
        }
        for (let _baxterProduct of baxterProduct) {
        _baxterProduct.style.display = "none";
        }
    } 
    if (americanCrewInput.checked && !baxterInput.checked && !suavecitoInput.checked) {
        for (let _americanCrewProduct of americanCrewProduct) {
        _americanCrewProduct.style.display = "block";
        }
        for (let _baxterProduct of baxterProduct) {
        _baxterProduct.style.display = "none";
        }
        suavecitoProduct.style.display = "none";
    }
    if (baxterInput.checked && suavecitoInput.checked) {
        for (let _baxterProduct of baxterProduct) {
        _baxterProduct.style.display = "block";
        }
        suavecitoProduct.style.display = "block";
        for (let _americanCrewProduct of americanCrewProduct) {
        _americanCrewProduct.style.display = "none";
        }
    }
    if (baxterInput.checked && americanCrewInput.checked) {
        for (let _americanCrewProduct of americanCrewProduct) {
        _americanCrewProduct.style.display = "block";
        }
        for (let _baxterProduct of baxterProduct) {
        _baxterProduct.style.display = "block";
        }
        suavecitoProduct.style.display = "none";
    }
    if (suavecitoInput.checked && americanCrewInput.checked) {
        suavecitoProduct.style.display = "block";
        for (let _americanCrewProduct of americanCrewProduct) {
        _americanCrewProduct.style.display = "block";
        }
        for (let _baxterProduct of baxterProduct) {
        _baxterProduct.style.display = "none";
        }
    }
    if (baxterInput.checked && suavecitoInput.checked && americanCrewInput.checked) {
        for (let _americanCrewProduct of americanCrewProduct) {
        _americanCrewProduct.style.display = "block";
        }
        for (let _baxterProduct of baxterProduct) {
        _baxterProduct.style.display = "block";
        }
        suavecitoProduct.style.display = "block";
    }
    //Фильтр групп товаров
    if (accessoriesInput.checked) {
        for (let _careProduct of careProduct) {
        _careProduct.style.display = "none";
        }
        razorProduct.style.display = "none";
    }
    if (careInput.checked) {
        accessoriesProduct.style.display = "none";
        razorProduct.style.display = "none";
    }
    if (razorInput.checked) {
        accessoriesProduct.style.display = "none";
        for (let _careProduct of careProduct) {
        _careProduct.style.display = "none";
        }
    }
}



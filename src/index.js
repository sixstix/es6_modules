import Wishlist from "./wishlist";  

console.log("Hello World");

let wishlist = new Wishlist();

//Select the form
let form = document.querySelector("#submitForm");
//Select the input for car make
let inputMake = document.querySelector("#makeInput");
//Select the input for car model
let inputModel = document.querySelector("#modelInput");
//Select the input for car year
let inputYear = document.querySelector("#yearInput");
//Select the paragraph element for car make
let carMake = document.querySelector("#car-make");
//Select the paragraph element for car model
let carModel = document.querySelector("#car-model");
//Select the paragraph element for car year
let carYear = document.querySelector("#car-year");
//Select the remove button
let removeBtn = document.querySelector("#removeBtn");
//Select the wishlist unordered list element
let ulWishList = document.querySelector("#wishListContainer > ul");
//Call the WishList constructor to create an instance from the WishList class

form.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);

function showCarDetails(car){
    carMake.textContent = car.make;
    carModel.textContent = car.model;
    carYear.textContent = car.year;

    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car.id);
}

function updateDom() {
    ulWishList.innerHTML = "";

    wishlist.list.forEach((car) => {
        let li = document.createElement("li");
        li.textContent = car.model;
        li.addEventListener("click", () => showCarDetails(car));
        ulWishList.appendChild(li);
    });
}

function addCar(event) {
    event.preventDefault();

    let make = inputMake.value;
    let model = inputModel.value;
    let year = inputYear.value;

    wishlist.add(make, model, year);
    updateDom();
    inputMake.value = "";
    inputModel.value = "";
    inputYear.value = "";
}

function removeCar() {
    let carId = Number(removeBtn.getAttribute("data-carId"));
    wishlist.remove(carId);

    updateDom();
    carMake.textContent = "";
    carModel.textContent = "";
    carYear.textContent = "";

    removeBtn.disabled = true;
}


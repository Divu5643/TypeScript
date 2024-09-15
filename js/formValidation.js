"use strict";
const productSelect = document.querySelector("#floatingProduct");
const productQty = document.querySelector("#floatingQty");
const productChange = (event) => {
    var _a;
    const productPriceInput = document.querySelector("#productPrice");
    let select = event.target;
    var selectedIndex = select.selectedIndex;
    var selectedoption = select.selectedOptions[0];
    var productPrice = (_a = selectedoption.getAttribute("data-price")) !== null && _a !== void 0 ? _a : "";
    productPriceInput.value = productPrice;
    var quantity = Number(productQty.value);
    calcAndDisplayPrice(Number(productPrice), quantity);
};
const quantityChange = (event) => {
    const productPriceInput = document.querySelector("#productPrice");
    var productPrice = productPriceInput.value;
    var quantity = Number(document.querySelector("#floatingQty").value);
    console.log("ProductPrice : ", productPrice, "quantity :", quantity);
    calcAndDisplayPrice(Number(productPrice), quantity);
};
const calcAndDisplayPrice = (productPrice, quantity) => {
    var totalPrice = quantity * Number(productPrice);
    document.querySelector("#floatingPrice").value = String(totalPrice);
};
productSelect.addEventListener("change", productChange);
productQty.addEventListener("change", quantityChange);

var productSelect = document.querySelector("#floatingProduct");
var productQty = document.querySelector("#floatingQty");
var productChange = function (event) {
    var _a;
    var productPriceInput = document.querySelector("#productPrice");
    var select = event.target;
    var selectedIndex = select.selectedIndex;
    var selectedoption = select.selectedOptions[0];
    var productPrice = (_a = selectedoption.getAttribute("data-price")) !== null && _a !== void 0 ? _a : "";
    productPriceInput.value = productPrice;
    var quantity = Number(productQty.value);
    calcAndDisplayPrice(Number(productPrice), quantity);
};
var quantityChange = function (event) {
    var productPriceInput = document.querySelector("#productPrice");
    var productPrice = productPriceInput.value;
    var quantity = Number(document.querySelector("#floatingQty").value);
    console.log("ProductPrice : ", productPrice, "quantity :", quantity);
    calcAndDisplayPrice(Number(productPrice), quantity);
};
var calcAndDisplayPrice = function (productPrice, quantity) {
    var totalPrice = quantity * Number(productPrice);
    document.querySelector("#floatingPrice").value = String(totalPrice);
};
productSelect.addEventListener("change", productChange);
productQty.addEventListener("change", quantityChange);

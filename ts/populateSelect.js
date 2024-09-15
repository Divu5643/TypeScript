// import { Products,States } from "./enum"
window.onload = function () {
    populateStates();
    populateProducts();
};
var populateStates = function () {
    console.log("hello");
    var stateSelect = document.querySelector("#floatingState");
    var optionString = "<option value> Select State</option>";
    var statesArray = Object.keys(States).filter(function (value) { return isNaN(Number(value)); });
    statesArray.forEach(function (state) {
        optionString += "<option value =\"".concat(state, "\" >").concat(state, "</option>");
    });
    stateSelect.innerHTML = optionString;
};
var populateProducts = function () {
    var productSelect = document.querySelector("#floatingProduct");
    var optionString = "<option value> Select a Product</option>";
    for (var key in Products) {
        if (isNaN(Number(key))) {
            var value = Products[key];
            optionString += "<option class=\"productOption\"  value =\"".concat(key, "\" data-price =\"").concat(value, "\">").concat(key, "</option>");
        }
    }
    productSelect.innerHTML = optionString;
};
var States;
(function (States) {
    States[States["AndhraPradesh"] = 0] = "AndhraPradesh";
    States[States["ArunachalPradesh"] = 1] = "ArunachalPradesh";
    States[States["Assam"] = 2] = "Assam";
    States[States["Bihar"] = 3] = "Bihar";
    States[States["Chhattisgarh"] = 4] = "Chhattisgarh";
    States[States["Goa"] = 5] = "Goa";
    States[States["Gujarat"] = 6] = "Gujarat";
    States[States["Haryana"] = 7] = "Haryana";
    States[States["HimachalPradesh"] = 8] = "HimachalPradesh";
    States[States["Jharkhand"] = 9] = "Jharkhand";
    States[States["Karnataka"] = 10] = "Karnataka";
    States[States["Kerala"] = 11] = "Kerala";
    States[States["MadhyaPradesh"] = 12] = "MadhyaPradesh";
    States[States["Maharashtra"] = 13] = "Maharashtra";
    States[States["Manipur"] = 14] = "Manipur";
    States[States["Meghalaya"] = 15] = "Meghalaya";
    States[States["Mizoram"] = 16] = "Mizoram";
    States[States["Nagaland"] = 17] = "Nagaland";
    States[States["Odisha"] = 18] = "Odisha";
    States[States["Punjab"] = 19] = "Punjab";
    States[States["Rajasthan"] = 20] = "Rajasthan";
    States[States["Sikkim"] = 21] = "Sikkim";
    States[States["TamilNadu"] = 22] = "TamilNadu";
    States[States["Telangana"] = 23] = "Telangana";
    States[States["Tripura"] = 24] = "Tripura";
    States[States["UttarPradesh"] = 25] = "UttarPradesh";
    States[States["Uttarakhand"] = 26] = "Uttarakhand";
    States[States["WestBengal"] = 27] = "WestBengal";
    States[States["AndamanAndNicobarIslands"] = 28] = "AndamanAndNicobarIslands";
    States[States["Chandigarh"] = 29] = "Chandigarh";
    States[States["Lakshadweep"] = 30] = "Lakshadweep";
    States[States["Delhi"] = 31] = "Delhi";
    States[States["Puducherry"] = 32] = "Puducherry";
})(States || (States = {}));
var Products;
(function (Products) {
    Products[Products["Keyboard"] = 1599] = "Keyboard";
    Products[Products["Mouse"] = 799] = "Mouse";
    Products[Products["Monitor"] = 6999] = "Monitor";
    Products[Products["Laptop"] = 54999] = "Laptop";
    Products[Products["Headphones"] = 2999] = "Headphones";
    Products[Products["Webcam"] = 1299] = "Webcam";
    Products[Products["Printer"] = 3499] = "Printer";
    Products[Products["USBDrive"] = 699] = "USBDrive";
    Products[Products["Charger"] = 499] = "Charger";
    Products[Products["Backpack"] = 1499] = "Backpack";
    Products[Products["DeskLamp"] = 899] = "DeskLamp";
    Products[Products["MousePad"] = 399] = "MousePad";
})(Products || (Products = {}));

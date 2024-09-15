var chechkoutForm = document.querySelector("#chechkoutForm");
chechkoutForm.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var formData = new FormData(chechkoutForm);
    var name = formData.get("username");
    var phone = formData.get("phone");
    var email = formData.get("email");
    var street = formData.get("street");
    var city = formData.get("city");
    var state = formData.get("state");
    var product = formData.get("Product");
    var quantity = formData.get("quantity");
    var price = document.querySelector("#floatingPrice").value;
    var orderList = JSON.parse((_a = localStorage.getItem("orderList")) !== null && _a !== void 0 ? _a : "[]");
    var user = {
        orderID: Date.now(),
        name: name,
        phone: phone,
        email: email,
        street: street,
        city: city,
        state: state,
        product: product,
        quantity: quantity,
        price: price
    };
    orderList.push(user);
    localStorage.setItem("orderList", JSON.stringify(orderList));
});

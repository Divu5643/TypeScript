var orders = {
    orderList: []
};
var Order = /** @class */ (function () {
    function Order(name, phone, email, street, city, state, product, quantity, price) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.street = street;
        this.city = city;
        this.state = state;
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }
    return Order;
}());
window.onload = function () {
    loadFromLocalStroage();
};
var loadFromLocalStroage = function () {
    var _a;
    orders.orderList = JSON.parse((_a = localStorage.getItem("orderList")) !== null && _a !== void 0 ? _a : "");
    console.log(orders.orderList);
    var accordianCont = document.querySelector("#accordionExample");
    var innerHtml = "";
    orders.orderList.forEach(function (obj) {
        innerHtml = "<div class=\"accordion-item\">\n                <h2 class=\"accordion-header\">\n                  <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                    ".concat(obj.product, "\n                  </button>\n                </h2>\n                <div id=\"collapseOne\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#accordionExample\">\n                  <div class=\"accordion-body\">\n                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.\n                  </div>\n                </div>\n              </div>");
    });
};

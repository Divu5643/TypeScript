interface orderList {
    orderList : Order[]

}
const orders :orderList = {
    orderList :[]
   
   }
class Order  {
    orderId! : number
    name: string
    phone:number
    email:string
    street:string
    city:string
    state:string
    product:string
    quantity:number
    price:number

    constructor(name:string,phone:number,email:string,street:string,city:string,state:string,product:string,quantity:number,price:number){
        this.name = name;
        this.phone = phone;
        this.email = email ;
        this.street= street;
        this.city= city;
        this.state = state;
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }
}

window.onload = ()=>{
    loadFromLocalStroage();
}

const loadFromLocalStroage = ()=>{
orders.orderList =  JSON.parse(localStorage.getItem("orderList")?? "");
console.log(orders.orderList);
const accordianCont =  document.querySelector("#accordionExample") as HTMLElement;
var innerHtml ="";
orders.orderList.forEach(obj =>{
innerHtml =`<div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#order${obj.orderId}" aria-expanded="true" aria-controls="collapseOne">
                    ${obj.product}
                  </button>
                </h2>
                <div id="order${obj.orderId}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Name: ${obj.name} 
                  </div>
                </div>
              </div>`
})
}
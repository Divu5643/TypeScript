var chechkoutForm = document.querySelector("#chechkoutForm") as  HTMLFormElement;

chechkoutForm.addEventListener("submit",(event:Event)=>{
event.preventDefault();
const formData = new FormData(chechkoutForm);
const name =  formData.get("username") as string;
const phone =  formData.get("phone") as string;
const email =  formData.get("email") as string;
const street =  formData.get("street") as string;
const city =  formData.get("city") as string;
const state =  formData.get("state") as string;
const product =  formData.get("Product") as string;
const quantity =  formData.get("quantity") as string;
const price  =  (document.querySelector("#floatingPrice") as HTMLInputElement).value;
const orderList:object[] = JSON.parse(localStorage.getItem("orderList")?? "[]") ;

const user = {
    orderID : Date.now(),
    name:name,
    phone,
    email,
    street,
    city,
    state,
    product,
    quantity,
    price
}
orderList.push(user);
localStorage.setItem("orderList",JSON.stringify(orderList));

})


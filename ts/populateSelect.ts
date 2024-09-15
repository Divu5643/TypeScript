// import { Products,States } from "./enum"
window.onload = ()=>{
populateStates();
populateProducts();
}

const populateStates =()=>{
    console.log("hello");
const stateSelect =  document.querySelector("#floatingState") as HTMLSelectElement;
var optionString="<option value> Select State</option>";
const statesArray = Object.keys(States).filter(value => isNaN(Number(value)));
statesArray.forEach(state=>{
    optionString+=`<option value ="${state}" >${state}</option>`;
})

stateSelect.innerHTML=optionString;

}
const populateProducts = ()=>{

    const productSelect = document.querySelector("#floatingProduct") as HTMLSelectElement;
    var optionString="<option value> Select a Product</option>";
for(var key in Products){
    if(isNaN(Number(key))){
        const value = Products[key as keyof typeof Products];
        optionString+=`<option class="productOption"  value ="${key}" data-price ="${value}">${key}</option>`;
    }
}
productSelect.innerHTML=optionString;
}

enum States {
    AndhraPradesh ,
    ArunachalPradesh ,
    Assam ,
    Bihar ,
    Chhattisgarh ,
    Goa ,
    Gujarat ,
    Haryana ,
    HimachalPradesh,
    Jharkhand ,
    Karnataka,
    Kerala ,
    MadhyaPradesh,
    Maharashtra,
    Manipur ,
    Meghalaya,
    Mizoram ,
    Nagaland,
    Odisha ,
    Punjab ,
    Rajasthan ,
    Sikkim ,
    TamilNadu ,
    Telangana ,
    Tripura ,
    UttarPradesh,
    Uttarakhand,
    WestBengal ,
    AndamanAndNicobarIslands ,
    Chandigarh ,
    Lakshadweep ,
    Delhi ,
    Puducherry
}
enum Products {
    Keyboard = 1599,
    Mouse = 799,
    Monitor = 6999,
    Laptop = 54999,
    Headphones = 2999,
    Webcam = 1299,
    Printer = 3499,
    USBDrive = 699,
    Charger = 499,
    Backpack = 1499,
    DeskLamp = 899,
    MousePad = 399
}
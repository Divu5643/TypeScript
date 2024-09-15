const productSelect = document.querySelector("#floatingProduct") as HTMLSelectElement;
const productQty = document.querySelector("#floatingQty") as HTMLInputElement;
const productChange = (event:Event)=>{
    const productPriceInput = document.querySelector("#productPrice") as HTMLInputElement;
    let select = event.target as HTMLSelectElement;
    
    var selectedIndex : number = select.selectedIndex;
    
    var selectedoption =  select.selectedOptions[0];
    
    var productPrice:string = selectedoption.getAttribute("data-price")?? "";
    productPriceInput.value = productPrice;
    var quantity :number = Number(productQty.value);
    calcAndDisplayPrice(Number(productPrice),quantity);
    
}

const quantityChange = (event:Event)=>{
    const productPriceInput = document.querySelector("#productPrice") as HTMLInputElement;
    var productPrice = productPriceInput.value;
    var quantity :number = Number((document.querySelector("#floatingQty") as HTMLInputElement).value);
    console.log("ProductPrice : ",productPrice,"quantity :",quantity);
    calcAndDisplayPrice(Number(productPrice),quantity);
}

const calcAndDisplayPrice = (productPrice:number,quantity:number)=>{
    var totalPrice:number =  quantity* Number(productPrice);
    (document.querySelector("#floatingPrice") as HTMLInputElement).value = String(totalPrice);
    
}

productSelect.addEventListener("change",productChange);
productQty.addEventListener("change",quantityChange);
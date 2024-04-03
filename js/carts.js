let productsINcart =localStorage.getItem("productsINcart")

let allproducts = document.querySelector(".products")
if(productsINcart){
    let item = JSON.parse(productsINcart);
    drawcartproduct(item);
}
function drawcartproduct(products){
    let y=products.map((item) => {
        return `
        <div class="product_item">
        <img src="${item.imageUrl}"alt="TV" class="product_item_img">
        <div class="product_item_description">
            <h2>${item.title}</h2>
            <p>an exslant product which it modern and easy to use  </p>
            <span>${item.color}</span>
        </div>
        <div class="prouduct_item_action">
            <button class="add_to_cart" onClick="removefromcart(${item.id})">remove from cart</button>
            

        </div>
    </div>

        `
    }
    )
    console.log(localStorage.getItem("productsINcart"))
    // allproducts.innerHTML=y;

}
let userInfo = document.querySelector("#user_info")
let userdata = document.querySelector("#user")
let links = document.querySelector("#links")

if(localStorage.getItem("username")){
    links.remove()
    userInfo.style.display="flex"
    userdata.innerHTML=localStorage.getItem("username")
}

let logoutbtn = document.querySelector("#logout")
logoutbtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location = "login.html";
    },1500)
}
)






let allproducts = document.querySelector(".products")
let products = [
    {
        id:1,
        title:"TV",
        color:"black",
        imageUrl:"image/TV.PNG"
    },{
        id:2,
        title:"Computer",
        color:"black",
        imageUrl:"image/computer.PNG" 
    },{
        id:3,
        title:"headphone",
        color:"black",
        imageUrl:"image/headphone.PNG"
    },{
        id:4,
        title:"laptop",
        color:"black",
        imageUrl:"image/laptop.PNG"
    },{
        id:5,
        title:"microwave",
        color:"black",
        imageUrl:"image/microwave.PNG"
    },{
        id:6,
        title:"phone",
        color:"black",
        imageUrl:"image/phone.PNG"
    },{
        id:7,
        title:"radio",
        color:"black",
        imageUrl:"image/raduo.PNG"
    },{
        id:8,
        title:"tablat",
        color:"black",
        imageUrl:"image/tablat.PNG"
    }
]
function drawItem(){
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
            <button class="add_to_cart" onClick="addtocart(${item.id})">Add to cart</button>
            <i class="far fa-heart fav"></i>

        </div>
    </div>

        `
    }
    )
    allproducts.innerHTML=y;
}drawItem()
let badge = document.querySelector(".badge")

let cartproductDiv = document.querySelector(".carts_product div")
let addedItem = localStorage.getItem("productsINcart")? JSON.parse(localStorage.getItem("productsINcart")) : [];

if(addedItem){
    addedItem.map(item =>{
        cartproductDiv.innerHTML +=`<p> ${item.title}</p>`} )
        badge.style.display="block"
        badge.innerHTML = addedItem.length;
}



    if(localStorage.getItem=("username")){
        function addtocart(id){
            let choosenItem = products.find((item) => item.id === id)
            cartproductDiv.innerHTML +=`<p> ${choosenItem.title}</p>`
            let cartproductlength = document.querySelectorAll(".carts_product div p")
            addedItem=[...addedItem,choosenItem]
            localStorage.setItem["productsINcart",JSON.stringify(addedItem) ]

            badge.style.display="block"
            badge.innerHTML = cartproductlength.length;
        }
    }else{
        window.location="login.html"
    }


let shoppingcartICON = document.querySelector(".shopping_cart")
let cartProducts = document.querySelector(".carts_product")

shoppingcartICON.addEventListener("click" , opencart)

function opencart(){
    if( cartproductDiv.innerHTML !=""){
        if( cartProducts.style.display=="block"){
            cartProducts.style.display="none"
        }else{
            cartProducts.style.display="block"
        }
    }
}
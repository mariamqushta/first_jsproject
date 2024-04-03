let username = document.querySelector("#username")
let password = document.querySelector("#password")
let loginbtn = document.querySelector("#sign_in")

let getusername = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")

loginbtn.addEventListener("click",function(page){
    page.preventDefault()
    if(username.value === ""||password.value === ""){
        alert("please fill data")}
    else{
        if( getusername && getusername.trim() === username.value.trim() &&  getpassword && getpassword.trim() === password.value.trim()){
            setTimeout( () =>{
                window.location="index.html"
            },1500)
        }else{
            alert("your username or password are wrong")
        }
    }
    
    }

)
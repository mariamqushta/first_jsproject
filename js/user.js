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
    localStorage.clear()
    setTimeout(()=>{
        window.location = "login.html"
    } , 1500)
}
)
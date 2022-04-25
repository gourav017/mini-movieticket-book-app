// Store the wallet amount to your local storage with key "amount"

document.querySelector("#add_to_wallet").addEventListener("click",myfun)
document.querySelector("#wallet").textContent= JSON.parse(localStorage.getItem("amount"))

function myfun(){

   
     let amt = document.querySelector("#amount").value

     localStorage.setItem("amount",JSON.stringify(amt))

     let redtamt =JSON.parse(localStorage.getItem("amount"))

     document.querySelector("#wallet").textContent= Number(document.querySelector("#wallet").textContent) + Number(redtamt)

     localStorage.setItem("amount",JSON.stringify(Number(document.querySelector("#wallet").textContent)))
}


// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

function submit(){
    let amt = JSON.parse(localStorage.getItem("amount"))
    document.getElementById("wallet").textContent=amt
    let c = Number(amt)-(100*(document.getElementById("number_of_seats").value))

    if(c<0){
        alert("Insufficient Balance!")
    }
    else{
        alert("Booking successful!")
        localStorage.setItem("amount",JSON.stringify(c))
        document.getElementById("wallet").textContent=c

    }
}


let amt = JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet").textContent=amt

let catchmovie =JSON.parse(localStorage.getItem("movie"))

catchmovie.map(function(elem){
    // let div = document.createElement("div")
    document.querySelector("#movie").innerHTML=null

    let p = document.createElement("h4")
    p.innerText=elem.Title;

    let img = document.createElement("img")
    img.src=elem.Poster;

    // div.append(img,p)

    document.querySelector("#movie").append(img,p)
})
// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let amt = JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet").textContent=amt

let id;

async function searchMovies(){
    try{
        const query = document.getElementById("search").value;

        const res = await fetch(`https://www.omdbapi.com/?apikey=607b038c&s=${query}`);

        const data = await res.json();

        const movie = data.Search;
        console.log(movie);

        return movie
    }
    catch(err){
        console.log("err",err)
    }
}
let cartmovie =JSON.parse(localStorage.getItem("movie"))|| []
let movies_div = document.getElementById("movies")
function appendMovies(data){
    if(data===undefined){
        return false;
    }
    movies_div.innerHTML=null;
    data.forEach(function(elem){
        let div = document.createElement("div")

        let p = document.createElement("h4")
        p.innerText=elem.Title;

        let img = document.createElement("img")
        img.src=elem.Poster;

        let btn = document.createElement("button")
        btn.textContent="Book Now"

        btn.setAttribute("class","book_now")
        btn.addEventListener("click",function(){
            booknow(elem)
        })
        

        div.append(img,p,btn)

        movies_div.append(div)

    })
}

function booknow(elem){
    cartmovie.push(elem)
  
   

    localStorage.setItem("movie",JSON.stringify(cartmovie));
    window.location.href="checkout.html"
}




async function main(){
    let data = await searchMovies();
    if (data===undefined){
        return false
    }
    appendMovies(data);
}

function debounced(func,delay){
    if(id){
        clearTimeout(id)
    }
    id= setTimeout(function(){
        func();
    },delay)
}
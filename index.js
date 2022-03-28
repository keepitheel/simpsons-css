let getDragonBtn = document.getElementById("get-dragon-button");
let hideDragonBtn = document.getElementById("hide-dragon-button");
let dragonNest = document.getElementById("dragon-nest");
let quote = document.getElementById("quote");
let moreDragonBtn = document.getElementById("more-dragon-button");

let simpsons = []

const fetchData = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=25")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((element) => {
            simpsons.push(element)
        });
    });
};

const renderData = (obj) => {
      let img =  document.createElement("img")
      img.addEventListener("click", () => {
          quote.innerText = obj.quote
      })
  img.src = obj.image
  img.className = "body-box-1"
   dragonNest.append(img)


}
getDragonBtn.addEventListener("click", function() {
    dragonNest.innerHTML = ""
    simpsons.forEach((element) => {
        renderData(element)
    });
});
moreDragonBtn.addEventListener("click", function() {
    dragonNest.innerHTML = ""
    simpsons = []
    fetchData()
    
});

hideDragonBtn.addEventListener("click", function() {
    dragonNest.innerHTML = ""
});


  fetchData()

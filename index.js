let getDragonBtn = document.getElementById("get-dragon-button");
let hideDragonBtn = document.getElementById("hide-dragon-button");
let dragonNest = document.getElementById("dragon-nest");

const fetchData = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=35")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((element) => {
                renderData(element)
        });
    });
};

const renderData = (obj) => {
  let img =  document.createElement("img")
  img.src = obj.image
  img.className = "body-box-1"
  dragonNest.append(img)


}

fetchData()

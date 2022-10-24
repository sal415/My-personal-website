const nycbutton = document.querySelector("#nyc")
nycbutton.addEventListener('click',function(){
    console.log ("I have been clicked")
   const imagecontainer = document.querySelector("#image-container")
   const nycimg = document.createElement("img")
   nycimg.src="https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"
    imagecontainer.appendChild(nycimg)
})
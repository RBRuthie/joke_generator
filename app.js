
const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJokes)

generateJokes()

async function generateJokes(){
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
  )
  
  const data = await res.json();
  console.log(data)
  console.log(data.joke)
  console.log(data.delivery)
    // if the joke portion is not there
  let joke = ""
  if (data.joke == undefined){
      joke = `${data.setup} <br /> ${data.delivery}`
  } else {
      joke = data.joke;
  }

  //  this is how we send the joke
    jokeText.innerHTML = joke


}
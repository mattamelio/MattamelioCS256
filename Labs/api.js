// fetch data from a public API
function doAPICall() {

  fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(data => processData(data));

}


// callback function to be used when data is fetched from API
// parameter data will be a JavaScript object
function processData(data) {

  var api = document.getElementById("api");

  var joke = data.value;

  var text = document.createTextNode(joke);

  var p = document.createElement("p");

  p.appendChild(text);
  api.appendChild(p);

}

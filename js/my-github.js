// Write code here to communicate with Github

const myGithub = document.getElementsByClassName("js-scroll-trigger")[2];
const repoList = document.getElementById("repos-list");
const repoNumbers = document.getElementById("repos-count");
const searchBut = document.getElementById("searchBut");
const inputBox = document.getElementById("inputBox");
let value = "MahshidAzami";

searchBut.addEventListener("click", function() {
  value = inputBox.value;
  x();
});
function x() {
  fetch(`https://api.github.com/users/${value}/repos`)
    .then(Response => Response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        repoList.innerHTML += `<li><a href = "${json[i].html_url}">${
          json[i].name
        }</a></li>`;
      }
      console.log(value);
      return json;
    })
    .then(json => (repoNumbers.innerText = json.length))
    .catch(() => alert("Try Again"));
}

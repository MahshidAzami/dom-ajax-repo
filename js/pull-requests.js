const requestList = document.getElementById("pull-requests-list");
const inputBox = document.getElementById("inputBox");

// input is a DOM element we already have using "querySelector"
inputBox.addEventListener("keyup", function(event) {
  const value = event.target.value;
  fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
    .then(Response => console.log(Response.json()))
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        if (json[i].user.login === value) {
          requestList.innerHTML += `<li><a href = "${json[i].html_url}">${
            json[i].title
          }</a></li>`;
        }
      }
    });
  // "value" will be the last value of the input field, and will be updated everytime the user types a new letter
});

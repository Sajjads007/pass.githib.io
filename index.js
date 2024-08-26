let input = document.getElementById("pass");
let heading = document.getElementById("heading");
let wrong = document.getElementById("wrong");
let greet = document.getElementById("greet");
let button = document.getElementById("check");
let link = document.getElementById("new");
let form = document.getElementById("form");
link.style.display = "none";
button.addEventListener("click", () => {
  if (input.value == "sajjad123") {
    heading.innerText = "Password is correct";
    greet.innerText = "Hai Good Morning";
    wrong.style.cssText = "Display:none;";
    link.style.display = "block";
    button.style.display = "none";
    form.style.display = "none";
  } else {
    wrong.innerText = "Password is wrong try again";
  }
});

//Adds the functionality to press ESC at any page to get back to the landing page.

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key == "Escape") {
    document.querySelectorAll("a.index")[0].click();
  }
});

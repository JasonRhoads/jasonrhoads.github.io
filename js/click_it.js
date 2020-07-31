function clickBox() {
  let boxes = document.querySelectorAll(".click-box");
  boxes.forEach(function(box) {
    box.addEventListener("click", function() {
      
      // Change which box is current
      let currentClass = "current";
      document.querySelector(".current").classList.remove(currentClass);
      box.classList.add(currentClass);
    });
  });
}
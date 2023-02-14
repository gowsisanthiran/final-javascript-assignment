const links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});

var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide() {
  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dot[index].classList.add("active");

  index++;

  setTimeout(changeSlide, 2000);
}

changeSlide();

// var index = 0;
// var locations = [
//   "Amsterdam, The Netherlands",
//   "Sydney, Australia",
//   "San Francisco, California",
// ];

// var slides = document.getElementsByClassName("slides");
// var nextArrow = document.getElementById("next");

// var previousArrow = document.getElementById("previous");

// var place = document.getElementById("place");

// var dotsContainer = document.getElementById("dotsContainer");

// var dotArray = document.getElementsByClassName("dots");

// createDots();
// showSlides(index);

// function createDots() {
//   for (i = 0; i < slides.length; i++) {
//     var dot = document.createElement("span");
//     dot.className = "dots";
//     dotsContainer.appendChild(dot);
//   }
// }

// function showSlides(x) {
//   console.log("asdasdasd");
//   if (x > slides.length - 1) {
//     index = 0;
//   }
//   if (x < 0) {
//     index = slides.length - 1;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     dotArray[i].className = "dots";
//   }

//   slides[index].style.display = "block";
//   dotArray[index].className += " activeDot";
//   place.innerHTML = locations[index];
// }

// nextArrow.onclick = function () {
//   index += 1;
//   showSlides(index);
// };

// previousArrow.onclick = function () {
//   index -= 1;
//   showSlides(index);
// };

// dotArray[0].onclick = showSlides(1);

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const dropdown = document.getElementById("shapeDropdown");

const square = document.getElementById("squareInput");
const rectangle = document.getElementById("rectangleInput");
const triangle = document.getElementById("triangleInput");
const circle = document.getElementById("circleInput");
const parallelogram = document.getElementById("parallelogramInput");
const trapezoid = document.getElementById("trapezoidInput");
const rhombus = document.getElementById("rhombusInput");

dropdown.addEventListener("change", function () {
  let shape = this.value;
  square.classList.add("hidden");
  rectangle.classList.add("hidden");
  triangle.classList.add("hidden");
  circle.classList.add("hidden");
  parallelogram.classList.add("hidden");
  trapezoid.classList.add("hidden");
  rhombus.classList.add("hidden");

  if (shape == "square") {
    square.classList.remove("hidden");
  } else if (shape == "rectangle") {
    rectangle.classList.remove("hidden");
  } else if (shape == "triangle") {
    triangle.classList.remove("hidden");
  } else if (shape == "circle") {
    circle.classList.remove("hidden");
  } else if (shape == "parallelogram") {
    parallelogram.classList.remove("hidden");
  } else if (shape == "trapezoid") {
    trapezoid.classList.remove("hidden");
  } else if (shape == "rhombus") {
    rhombus.classList.remove("hidden");
  } else {
    square.classList.add("hidden");
  }
});

function calculate() {
  var shape = document.getElementById("shapeDropdown").value;

  if (shape == "square") {
    let side = document.getElementById("squareIn").value;
    let z = side * side;

    document.getElementById("sideUserInput").innerHTML = side + " x " + side;
    document.getElementById("output").innerHTML = z;
  } else if (shape == "rectangle") {
    let length = document.getElementById("rectangleInlength").value;
    let width = document.getElementById("rectangleInwidth").value;
    let z = length * width;

    document.getElementById("sideUserInput").innerHTML = length + " x " + width;
    document.getElementById("output").innerHTML = z;
  } else if (shape == "triangle") {
    let base = document.getElementById("triangleInbase").value;
    let height = document.getElementById("triangleInheight").value;
    let z = (base * height) / 2;

    document.getElementById("sideUserInput").innerHTML = "1/2 " + " x " + base + " x " + height;
    document.getElementById("output").innerHTML = z;
  } else if (shape == "circle") {
    let r = document.getElementById("circleInR").value;
    let z = 3.14 * r * r;

    document.getElementById("sideUserInput").innerHTML = "Π " + " x " + r + " x " + r;
    document.getElementById("output").innerHTML = z;
  } else if (shape == "parallelogram") {
    let base = document.getElementById("parallelogramInbase").value;
    let height = document.getElementById("parallelogramInheight").value;
    let z = base * height;

    document.getElementById("sideUserInput").innerHTML = base + " x " + height;
    document.getElementById("output").innerHTML = z;
  } else if (shape == "trapezoid") {
    let a = document.getElementById("trapezoidInA").value;
    let b = document.getElementById("trapezoidInB").value;
    let height = document.getElementById("trapezoidInheight").value;
    let z = ((a + b) * height) / 2;

    document.getElementById("sideUserInput").innerHTML = "1/2 " + " x " + "(" + a + " + " + b + ")" + " x " + height;
    document.getElementById("output").innerHTML = z;
  } else if (shape == "rhombus") {
    let d1 = document.getElementById("rhombusInDiagonal1").value;
    let d2 = document.getElementById("rhombusInDiagonal2").value;
    let z = (d1 * d2) / 2;

    document.getElementById("sideUserInput").innerHTML = "1/2 " + " x " + d1 + " x " + d2;
    document.getElementById("output").innerHTML = z;
  } else {
    alert("Pls Choose Shape to Calculate");
  }
}

function rules() {
  alert("Before Using the Calculator Pls Read this rules");
  alert("You have to refresh the page for every use");
  alert("Choose one of the shapes before clicking the calculate button");
  alert("Dont forget to input your number to the input section or the output just gonna show 0");
  alert("This is a practice web if you have a review or some suggestion i will gladly accept it in the report section");
}

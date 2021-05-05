const changeHamburger = () => {
  if (
    document.getElementById("hamburger").src ==
    "https://prajjwal.ml/img/hamburger.svg"
  ) {
    document.getElementById("hamburger").src =
      "https://prajjwal.ml/img/hamburger-close.svg";
  } else {
    document.getElementById("hamburger").src =
      "https://prajjwal.ml/img/hamburger.svg";
  }

  var mobNav = document.getElementById("mobile-nav");

  if (mobNav.style.visibility === "visible") {
    mobNav.style.visibility = "hidden";
    mobNav.style.opacity = "0";
  } else if ((mobNav.style.visibility = "hidden")) {
    mobNav.style.visibility = "visible";
    mobNav.style.opacity = "1";
  }
  var hamburger = document.getElementById("hamburger");
  if (hamburger.style.position === "static") {
    hamburger.style.display = "fixed";
  } else if ((hamburger.style.display = "fixed")) {
    hamburger.style.display = "static";
  }
};

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
  if (mobNav.style.display === "flex") {
    mobNav.style.display = "none";
  } else if ((mobNav.style.display = "none")) {
    mobNav.style.display = "flex";
  }

  var hamburger = document.getElementById("hamburger");
  console.log(hamburger.style.position);
  if (hamburger.style.position === "static") {
    hamburger.style.display = "fixed";
  } else if ((hamburger.style.display = "fixed")) {
    hamburger.style.display = "static";
  }
};

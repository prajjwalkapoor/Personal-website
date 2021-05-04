const changeHamburger = () => {
  var x = document.getElementById("mobile-nav");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  if (
    document.getElementById("hamburger").src ==
    "http://prajjwal.ml/img/hamburger.svg"
  ) {
    document.getElementById("hamburger").src =
      "http://prajjwal.ml/img/hamburger-close.svg";
  } else {
    document.getElementById("hamburger").src =
      "http://127.0.0.1:5500/img/hamburger.svg";
  }
};

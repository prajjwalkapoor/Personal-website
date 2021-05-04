const changeHamburger = () => {
  var x = document.getElementById("mobile-nav");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }

  if (
    document.getElementById("hamburger").src ==
    "http://127.0.0.1:5500/img/hamburger.svg"
  ) {
    document.getElementById("hamburger").src =
      "http://127.0.0.1:5500/img/hamburger-close.svg";
  } else {
    document.getElementById("hamburger").src =
      "http://127.0.0.1:5500/img/hamburger.svg";
  }
};

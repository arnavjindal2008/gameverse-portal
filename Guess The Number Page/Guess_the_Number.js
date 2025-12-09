  let hamicon = document.getElementById("hamicon");
  let navbar = document.getElementsByClassName("navbar")[0]

  hamicon.addEventListener("click",tap)

  function tap() {
      if (window.innerWidth <= 450) {

          if (navbar.style.display === "none") {
              navbar.style.display = "flex";
              navbar.style.flexDirection = "column";
          } else {
              navbar.style.display = "none";
          }

      }
  };
  // <!-- ===== Theme Changer ===== -->
  const btn = document.getElementById("theme");
  const head = document.getElementsByTagName("header")[0];
  const footer = document.getElementsByTagName("footer")[0];
  btn.addEventListener("click",changecolor);

  function changecolor() {
    head.classList.toggle("theme2header");
    footer.classList.toggle("theme2footer");

    if (btn.innerText == "Switch to Theme 2") {
      btn.innerText = "Switch to Theme 1"
    }
    else {
      btn.innerText = "Switch to Theme 2"
    }
  };
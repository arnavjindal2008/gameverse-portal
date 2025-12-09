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
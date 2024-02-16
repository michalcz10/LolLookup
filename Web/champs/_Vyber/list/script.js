function navrespons() {
    var x = document.getElementById("maintopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
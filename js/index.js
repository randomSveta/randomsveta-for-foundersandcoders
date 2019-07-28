function navbarToggle() {
    let elem= document.getElementById("navbar-top"); 
    
    if (elem.className === "navigation-bar") {
        elem.className += " responsive";
      } else {
        elem.className = "navigation-bar";
      }
   let icon = document.getElementById("menu-icon");
    if(icon.className.includes('fa-bars')) {
        icon.className = "fa fa-times"
    }
    else {
        icon.className = "fa fa-bars"
    }
}
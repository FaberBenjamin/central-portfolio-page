let Home = document.getElementById("Home");
let About = document.getElementById("About");
let Portfolio = document.getElementById("Portfolio");
let Contact = document.getElementById("Contact");
let ReactProject = document.getElementById("React_Project");

Home.onmouseover = function(){
    this.classList.add("bottom_active");
    console.log("siker");
};

Home.onmouseleave = function(){
    this.classList.remove("bottom_active")
}

About.onmouseover = function(){
    this.classList.add("bottom_active")
    console.log("siker");
};

About.onmouseleave = function(){
    this.classList.remove("bottom_active")
}

Portfolio.onmouseover = function(){
    this.classList.add("bottom_active")
    console.log("siker");
};

Portfolio.onmouseleave = function(){
    this.classList.remove("bottom_active")
}

Contact.onmouseover = function(){
    this.classList.add("bottom_active")
    console.log("siker");
};

Contact.onmouseleave = function(){
    this.classList.remove("bottom_active")
}

ReactProject.onclick = function(){
    window.open("https://faberbenjamin.github.io/the-nutrition-comparer/?fbclid=IwAR24zar_9tHQvUbMRTLQ0Br5i2QAAAQBWkLEGbBYoFIa8Bx2N_a8BMpMO34");
}

ReactProject.onmouseover = function() {
    this.classList.add("React_project_active")
}

ReactProject.onmouseleave = function() {
    this.classList.remove("React_project_active")
}

userHasScrolled = false;


function reveal() {
    let reveals = document.querySelectorAll(".card, .portfolio_textbox, .portfolio_work, .section_title_container, .title_end, .potfolio_content_container")

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } 
      }

}

window.addEventListener("scroll", reveal);

function navbarSmall() {
    var x = document.getElementById("Navbar");
    if (x.className === "whole_navbar montserrat active_navbar") {
      x.className += " responsive";
    } else {
      x.className = "whole_navbar montserrat active_navbar";
    }
  } 

  window.onscroll = function()
{
    let Navbar = document.getElementById("Navbar");
    Navbar.classList.add("active_navbar");
    userHasScrolled = true;
}

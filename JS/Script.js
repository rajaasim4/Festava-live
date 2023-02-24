// ? Change Hamburger Style
let navlinks = document.querySelector(".Nav-links");
let btn = document.querySelector(".Hamburger button");
let HamburgerStyleChange = () => {
  document
    .getElementById("Hamburger_bar_1")
    .classList.toggle("Hamburger_bar_1");
  document
    .getElementById("Hamburger_bar_2")
    .classList.toggle("Hamburger_bar_2");
  document
    .getElementById("Hamburger_bar_3")
    .classList.toggle("Hamburger_bar_3");
  navlinks.classList.toggle("Nav-links-show");
  let matchmedia = window.matchMedia("(max-width:540px)");
  if (matchmedia.matches) {
    document.querySelector(".Nav-btn").classList.toggle("Nav-btn-show");
  }
};

//!Click Outside Detector to hide Navbar when open in Small Devices

document.addEventListener(
  "click",
  (e) => {
    if (e.target.className !== "Nav-links" && e.target.id !== "HamburgerBtn") {
      navlinks.classList.remove("Nav-links-show");
      document
        .getElementById("Hamburger_bar_1")
        .classList.remove("Hamburger_bar_1");
      document
        .getElementById("Hamburger_bar_2")
        .classList.remove("Hamburger_bar_2");
      document
        .getElementById("Hamburger_bar_3")
        .classList.remove("Hamburger_bar_3");
    }
  },
  false
);

//? Make Sticky Navbar and Highlight(Scroll Spy) the link
let allSections = document.querySelectorAll("section[id]");
let navBarLinks = document.querySelectorAll(".Nav-links li a");
window.addEventListener("scroll", () => {
  let height = scrollY;
  allSections.forEach((section) => {
    let sectionTop = section.offsetTop - 150;
    let sectionHeight = section.offsetHeight;
    let id = section.getAttribute("id");
    if (height >= sectionTop && height < sectionTop + sectionHeight) {
      navBarLinks.forEach((link) => {
        link.classList.remove("ActiveLink");
        document
          .querySelector(".Nav-links li a[href*=" + id + "]")
          .classList.add("ActiveLink");
      });
    }
  });

  let Stickynavbar = document.getElementsByTagName("nav")[0];
  height >= 300
    ? Stickynavbar.classList.add("StickyNavbar")
    : Stickynavbar.classList.remove("StickyNavbar");
});

//*Navigate to homepage if on Another Page

navlinks.addEventListener("click", (e) => {
  
});

//? Tabs Section
let contactform = document.querySelector(".Contact-Form");
let contactmap = document.querySelector(".Contact-Map");
let ContactTab = (e, tabshow) => {
  let tabcontent = document.querySelectorAll(".Tab-Content");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  let tablinks = document.querySelectorAll(".Contact-tabs button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      "Contact-tabs-active",
      ""
    );
  }
  document.getElementById(tabshow).style.display = "block";
  e.currentTarget.classList.add("Contact-tabs-active");
};

document.getElementById("defaultOpenTab").click();

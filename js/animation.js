const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entries)
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => {
    observer.observe(element);
});


let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}


const menuBtn = document.querySelector(".menu-btn");
const menuContainer = document.getElementById("menu");
const timeLine = document.getElementById("timeline");
const footer = document.getElementById("footer");
const bodyAbout = document.getElementById("body-about");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    menuContainer.classList.add("visible");
    timeLine?.classList.remove("visible-section");
    footer?.classList.remove("visible-section");
    timeLine?.classList.add("hidden-timeline");
    footer?.classList.add("hidden-footer");
    bodyAbout?.classList.add("hidden-about");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    menuContainer?.classList.remove("visible");
    timeLine?.classList.add("visible-section");
    footer?.classList.add("visible-section");
    timeLine?.classList.remove("hidden-timeline");
    footer?.classList.remove("hidden-footer");
    bodyAbout?.classList.remove("hidden-about");
  }
});

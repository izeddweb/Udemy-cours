//  Set Variable

const links = document.querySelectorAll("[data-page]");

//       Set Function

// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     links.forEach((link) => {
//       link.classList.remove("style");
//     });
//     link.classList.add("style");
//   });
// });

// working on observer concept

const sections = document.querySelectorAll("section");
const indicator = document.querySelector(".indicator");
const colorBG = [
  "linear-gradient(45deg, blue, red)",
  "linear-gradient(45deg, #F0C27B, #4B1248)",
  "linear-gradient(45deg, #FF4E50, #F9D423)",
  "linear-gradient(45deg, #FBD3E9, #BB377D)",
];

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(functionNav, options);

function functionNav(entries) {
  entries.forEach(function (entrie) {
    let className = entrie.target.className;
    let activeLink = document.querySelector(`[data-page="${className}"]`);
    let elementIndex = entrie.target.getAttribute("data-index");
    let coordination = activeLink.getBoundingClientRect();
    let direction = {
      height: coordination.height,
      width: coordination.width,
      top: coordination.top,
      left: coordination.left,
    };
    if (entrie.isIntersecting) {
      indicator.style.setProperty("height", `${direction.height}px`);
      indicator.style.setProperty("width", `${direction.width}px`);
      indicator.style.setProperty("top", `${direction.top}px`);
      indicator.style.setProperty("left", `${direction.left}px`);
      indicator.style.background = colorBG[elementIndex];
    }
  });
}

sections.forEach(function (section) {
  observer.observe(section);
});

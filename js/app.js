"use strict";
// (function (){
const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();
let projects = [
  {
    title: "Raven - Social Network",
    techUsed: "Python Django , jQuery",
    description:
      "Social Networking Site like Facebook or Twitter built with Python Django and jQuery. Signup and start using it",
    image: "raven.jpg",
    live: "http://sbraven.herokuapp.com/",
    repo:
      "https://github.com/basu-dev/django-social-network-like-Facebook-or-Instagram",
  },
  {
    title: "DevJS- My own JS MVC project.",
    techUsed: "Vanilla Javascript",
    description:
      "My own simple lightweight JS Framework like React or Vue having functionality like Child Components, Event Handling , Routing etc.",
    image: "devjs.jpg",
    live: "https://devapp.netlify.app/",
    repo: "https://github.com/basu-dev/devJS-My-own-JS-Framework",
  },
  {
    title: "Candy Crush Mini",
    techUsed: "JavaScript , HTML, CSS3",
    description:
      "Candy Crush webapp created during my Advanced JavaScript Challange. You can play it right now.",
    image: "candycrush.jpg",
    live: "https://candycrushmini.netlify.app/",
    repo: "https://github.com/basu-dev/CandyCrush-A-Vanilla-JS-Challange",
  },
  {
    title: "B&B Multimedia",
    techUsed: "Python Django , jQuery",
    description:
      "This is the website I built for the company B&B Multimedia which is Events Hosting Organization.",
    image: "bnb.jpg",
    live: "https://www.bandbmultimedia.com/",
  },
  {
    title: "Tic Tac Toe PWA",
    techUsed: "HTML, CSS3, JavaScript",
    description:
      "Tic Tac Toe game developed as my Advanced JavaScript Challenge. You can play single player as well as multi player game.",
    image: "tic.jpg",
    live: "https://tictactoemini.netlify.app",
  },
  {
    title: "Far - CLI Text Viewer",
    techUsed: "Rust",
    description:
      "A file opener for Windows command prompt and PowerShell like 'cat' for linux distributions. You can install it and type far <filename> and boom!",
    image: "far.jpg",
    repo:
      "https://github.com/basu-dev/far-A-command-prompt-text-viewer-like-cat-for-linux",
  },
];
const projectArea = document.querySelector(".projects-center .card-list");
const projectTemplate = (
  index,
  title,
  techUsed,
  description,
  image,
  live,
  repo
) => {
  return /*html*/ `
            <div class="project-card" id="card-${index}">
          <div class="project-img">
            <img src="${image}" alt="${title}">
          </div>
          <div class="header">
            <h2>${title}</h2>
            <div class="title">Tech Used: ${techUsed}</div>
          </div>
          <div class="colorband"></div>
          <div class="desc">${description}</div>
          <div class="actions">
            <a href="${live}" target="_blank" rel="noopener noreferrer">
              <button>
                <span>
                  <i class="far fa-window-restore"></i>
                  <span>
                    Live Site
                  </span>
                </span>
              </button>
            </a>
            <a href="${repo}" target="_blank"
              rel="noopener noreferrer">
              <button>
                <span>
                  <i class="fab fa-github"></i>
                  <span>
                    Repo Link
                  </span>
                </span>
              </button>
            </a>
          </div>
        </div>
    `;
};
const socialLinksTemplate = (i) => {
  return  /*html*/`
        <ul class="social-icons ${i==2?"hero-icons":null}">
        <li>
          <a href="https://twitter.com/AdBasudev" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/basu-dev-adhikari-a92068140/" target="_blank" rel="noopener noreferrer"
            class="social-icon">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/basu-dev" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/AdBasudev" target="_blank" rel="noopener noreferrer" class="social-icon">
            <i class="fab fa-dev"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/______dev________/" target="_blank" rel="noopener noreferrer"
            class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/dev.basu.97/" target="_blank" rel="noopener noreferrer"
            class="social-icon">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <ul>
`;
};
let parser = new DOMParser();
const parse = (string) => {
  return parser.parseFromString(string, "text/html").querySelector("body")
    .children[0];
};
const socialIconsBar = document.querySelectorAll(".social-icons");
document.querySelectorAll(".social-iconss").forEach((x,i) => {
    console.log(i)
  let parsed = parse(socialLinksTemplate(i));
  x.append(parsed);
});
projects.forEach((x, index) => {
  let temp = projectTemplate(
    index,
    x.title,
    x.techUsed,
    x.description,
    x.live,
    x.repo
  );
  projectArea.append(parse(temp));
});

// })();
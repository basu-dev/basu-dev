"use strict";
(function (d){
const navbar = d.querySelector("#large-nav");
const navheader =d.querySelector(".nav-header");
const main=d.querySelector("main");
const navBtn = d.querySelector("#nav-btn");
const closeBtn = d.querySelector("#close-btn");
const form=d.querySelector("form");
// const sidebar = d.querySelector("#sidebar");
const date = d.querySelector("#date");  

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();
const projects = [
  {
    title: "Raven - Social Network",
    techUsed: "Python Django , jQuery",
    description:
      "Social Networking Site like Facebook or Twitter built with Python Django and jQuery. Signup and start using it",
    image: "raven.JPG",
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
    repo:"https://github.com/basu-dev/TicTacToe-PWA-"
  },
  {
    title: "Far - CLI Text Viewer",
    techUsed: "Rust",
    description:
      "A file opener for Windows command prompt and PowerShell like 'cat' for linux distributions. You can install it and type far <filename> and boom!",
    image: "far.jpg",
    live:"https://farcli.netlify.app",
    repo:
      "https://github.com/basu-dev/far-A-command-prompt-text-viewer-like-cat-for-linux",
  },
];
const projectArea = d.querySelector(".projects-center .card-list");
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
            <img src="./images/${image}" alt="${title}">
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
const socialIconsBar = d.querySelectorAll(".social-icons");
d.querySelectorAll(".social-iconss").forEach((x,i) => {
  let parsed = parse(socialLinksTemplate(i));
  x.append(parsed);
});
projects.forEach((x, index) => {
  let temp = projectTemplate(
    index,
    x.title,
    x.techUsed,
    x.description,
    x.image,
    x.live,
    x.repo
  );
  projectArea.append(parse(temp));
});
const timeline=[
    {
        number:6,
        date: "Aug 2020",
        event:"Starting Learning Rust Programming Language for WebAssembly"
    },
    {
        number:5,
        date:"Jan 2020 - Present",
        event:"Working at DCube IT Solution, Pokhara as Angular Developer"
    },
    {
        number:4,
        date:"2019",
        event:"Started as Full Stack Web Developer at B&BMultimedia and at the same time started learning Angular."
    },
    {
        number:3,
        date:"2018",
        event:"Made some blog websites with Python Django and learnt jQuery. Made the Raven- A Social Network project in Django and jQuery and made website for B&B Multimedia."
    },
    {
        number:2,
        date:"2017",
        event:"Started Learning HTML, JavaScript & CSS and started making basic Web Pages with static contents. At the end of the year I was already learning Python for backend."
    },
    {
        number:1,
        date:"2016",
        event:"Started as Electronics & Communication Enginnering at WRC, Pokhara. Learnt C as first programming language. Started to know about programming language like C, C#, Python etc"
    }
]
const timeLineTemp=(number,date,event)=>{
    return /*html*/`
      <article class="timeline-item">
        <h4>${date}</h4>
        <p>${event}</p>
        <span class="number"> ${number} </span>
      </article>
`
};
const timeLineCenter=d.querySelector(".timeline-center");
timeline.forEach(x=>{
    timeLineCenter.append(parse(timeLineTemp(x.number,x.date,x.event)));
    
});
const scrollTop=_=>d.querySelector("main").scrollTop;
let initialScrollTop=scrollTop();
main.onscroll=()=>{
  let currentScrollTop=scrollTop();
  if(currentScrollTop<350){
    navheader.children[0].style.opacity=0
    navheader.classList.remove("nav-header-white");
    
    navbar.style.boxShadow="none";
  }
  else{
    if(currentScrollTop < initialScrollTop){
      navbar.style.top="0px";
      navheader.style.top="0px";
      navbar.style.boxShadow="1px 0px 5px grey";
      navheader.classList.add("nav-header-white");
      navheader.children[0].style.opacity=1
    }
    else{

      navbar.style.top="-47px";
      navheader.style.top="-47px";
    }
  }

  initialScrollTop=currentScrollTop;

}
form.onsubmit=(e)=>{
  e.preventDefault();
  let body=e.target[2].value;
  let subject=e.target[1].value;
  window.open(`mailto:adkrishna05@gmail.com?subject=${subject}&body=${body}`);
}

})(document);

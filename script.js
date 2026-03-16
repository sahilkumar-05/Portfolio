/* ================= LOADER ================= */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        loader.style.transition = "0.6s";
    }, 800);
});




/* ================= SCROLL PROGRESS ================= */
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / height) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
});


/* ================= REVEAL ANIMATION ================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


/* ================= COUNTER ANIMATION ================= */
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    let started = false;

    function updateCounter() {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }
    }

    window.addEventListener("scroll", () => {
        if (!started && counter.getBoundingClientRect().top < window.innerHeight) {
            started = true;
            updateCounter();
        }
    });
});


/* ================= SKILL BAR ANIMATION ================= */
const skillBars = document.querySelectorAll(".progress-fill");

window.addEventListener("scroll", () => {
    skillBars.forEach(bar => {
        if (bar.getBoundingClientRect().top < window.innerHeight) {
            bar.style.width = bar.dataset.width;
        }
    });
});


/* ================= TYPING EFFECT ================= */
const typingText = document.querySelector(".typing-text");

const words = [
    "Backend Software Engineer",
    "ASP.NET Core Specialist",
    "Database System Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (!deleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 40 : 80);
}

typeEffect();


/* ================= ACTIVE NAV HIGHLIGHT ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


/* ================= CUSTOM CURSOR ================= */
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    follower.style.left = e.clientX + "px";
    follower.style.top = e.clientY + "px";
});

/* ================= MOBILE MENU TOGGLE ================= */

// Get menu elements
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navList = document.getElementById("nav-list");
    const navLinks = document.querySelectorAll("#nav-list .nav-link");

    // Toggle menu on clicking the menu icon
    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
    });

    // Hide menu when any nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("active");
        });
    });
});
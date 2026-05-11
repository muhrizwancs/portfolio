/* ─────────────────────────────────────────────
Muhammad Rizwan — Portfolio JavaScript
src/js/main.js
───────────────────────────────────────────── */

/* ── SCROLL REVEAL ── */
function initReveal() {
const reveals = document.querySelectorAll(’.reveal’);
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add(‘visible’);
}
});
},
{ threshold: 0.12 }
);
reveals.forEach((el) => observer.observe(el));
}

/* ── NAV SCROLL EFFECT ── */
function initNavScroll() {
const nav = document.querySelector(‘nav’);
window.addEventListener(‘scroll’, () => {
if (window.scrollY > 50) {
nav.classList.add(‘scrolled’);
} else {
nav.classList.remove(‘scrolled’);
}
});
}

/* ── MOBILE NAV TOGGLE ── */
function initMobileNav() {
const toggle = document.querySelector(’.nav-toggle’);
const links  = document.querySelector(’.nav-links’);

if (!toggle || !links) return;

toggle.addEventListener(‘click’, () => {
links.classList.toggle(‘open’);
});

// Close menu when a link is clicked
links.querySelectorAll(‘a’).forEach((link) => {
link.addEventListener(‘click’, () => {
links.classList.remove(‘open’);
});
});
}

/* ── ACTIVE NAV LINK ON SCROLL ── */
function initActiveNav() {
const sections = document.querySelectorAll(‘section[id]’);
const navLinks = document.querySelectorAll(’.nav-links a’);

window.addEventListener(‘scroll’, () => {
let current = ‘’;
sections.forEach((section) => {
const sectionTop = section.offsetTop - 100;
if (window.scrollY >= sectionTop) {
current = section.getAttribute(‘id’);
}
});

```
navLinks.forEach((link) => {
  link.classList.remove('active');
  if (link.getAttribute('href') === `#${current}`) {
    link.classList.add('active');
  }
});
```

});
}

/* ── TYPED ROLE ANIMATION ── */
function initTyped() {
const roleEl = document.querySelector(’.hero-role’);
if (!roleEl) return;

const roles = [
‘Full Stack Developer’,
‘Flutter Developer’,
‘Python Developer’,
‘Data Analyst’,
];

let roleIndex = 0;
let charIndex  = 0;
let deleting   = false;

function type() {
const current = roles[roleIndex];

```
if (!deleting) {
  roleEl.textContent = current.slice(0, charIndex + 1);
  charIndex++;
  if (charIndex === current.length) {
    deleting = true;
    setTimeout(type, 1800);
    return;
  }
} else {
  roleEl.textContent = current.slice(0, charIndex - 1);
  charIndex--;
  if (charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }
}

setTimeout(type, deleting ? 60 : 90);
```

}

// Start after hero animation settles
setTimeout(type, 1200);
}

/* ── SKILL CHIP STAGGER ── */
function initSkillStagger() {
const chips = document.querySelectorAll(’.skill-chip’);
chips.forEach((chip, i) => {
chip.style.opacity = ‘0’;
chip.style.transform = ‘translateY(12px)’;
chip.style.transition = `opacity 0.4s ${i * 0.05}s ease, transform 0.4s ${i * 0.05}s ease`;
});

const skillsSection = document.querySelector(’#skills’);
if (!skillsSection) return;

const observer = new IntersectionObserver(
(entries) => {
if (entries[0].isIntersecting) {
chips.forEach((chip) => {
chip.style.opacity = ‘1’;
chip.style.transform = ‘translateY(0)’;
});
observer.disconnect();
}
},
{ threshold: 0.2 }
);
observer.observe(skillsSection);
}

/* ── SMOOTH SCROLL FOR ANCHOR LINKS ── */
function initSmoothScroll() {
document.querySelectorAll(‘a[href^=”#”]’).forEach((anchor) => {
anchor.addEventListener(‘click’, (e) => {
const target = document.querySelector(anchor.getAttribute(‘href’));
if (target) {
e.preventDefault();
target.scrollIntoView({ behavior: ‘smooth’, block: ‘start’ });
}
});
});
}

/* ── CURSOR GLOW (desktop only) ── */
function initCursorGlow() {
if (window.innerWidth < 900) return;

const glow = document.createElement(‘div’);
glow.style.cssText = `position: fixed; pointer-events: none; z-index: 9999; width: 300px; height: 300px; border-radius: 50%; background: radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%); transform: translate(-50%, -50%); transition: left 0.15s ease, top 0.15s ease;`;
document.body.appendChild(glow);

document.addEventListener(‘mousemove’, (e) => {
glow.style.left = e.clientX + ‘px’;
glow.style.top  = e.clientY + ‘px’;
});
}

/* ── INIT ALL ── */
document.addEventListener(‘DOMContentLoaded’, () => {
initReveal();
initNavScroll();
initMobileNav();
initActiveNav();
initTyped();
initSkillStagger();
initSmoothScroll();
initCursorGlow();
});
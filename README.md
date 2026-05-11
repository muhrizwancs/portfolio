<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Muhammad Rizwan — Full Stack & Flutter Developer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

```
:root {
  --bg: #0a0a0f;
  --bg2: #111118;
  --bg3: #16161f;
  --accent: #6c63ff;
  --accent2: #ff6584;
  --gold: #f4c430;
  --text: #e8e8f0;
  --muted: #7a7a9a;
  --border: rgba(108,99,255,0.18);
  --card: rgba(22,22,31,0.85);
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  line-height: 1.7;
  overflow-x: hidden;
}

/* ── NOISE OVERLAY ── */
body::before {
  content: '';
  position: fixed; inset: 0; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
}

/* ── NAV ── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.2rem 4rem;
  background: rgba(10,10,15,0.72);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  font-family: 'Syne', sans-serif;
  font-size: 1.25rem; font-weight: 800;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
}
.nav-links { display: flex; gap: 2.2rem; list-style: none; }
.nav-links a {
  color: var(--muted); text-decoration: none;
  font-size: 0.9rem; letter-spacing: 0.04em;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--text); }

/* ── HERO ── */
.hero {
  min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  padding: 8rem 4rem 5rem;
  position: relative;
  overflow: hidden;
}
.hero-glow {
  position: absolute; width: 600px; height: 600px; border-radius: 50%;
  background: radial-gradient(circle, rgba(108,99,255,0.13) 0%, transparent 70%);
  top: 10%; left: -100px; pointer-events: none;
}
.hero-glow2 {
  position: absolute; width: 400px; height: 400px; border-radius: 50%;
  background: radial-gradient(circle, rgba(255,101,132,0.09) 0%, transparent 70%);
  bottom: 10%; right: -80px; pointer-events: none;
}
.hero-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 5rem; align-items: center; max-width: 1200px; width: 100%;
  position: relative; z-index: 1;
}
.hero-tag {
  display: inline-block;
  background: rgba(108,99,255,0.12);
  border: 1px solid var(--border);
  color: var(--accent);
  font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase;
  padding: 0.4rem 1rem; border-radius: 100px;
  margin-bottom: 1.5rem;
  animation: fadeUp 0.6s ease both;
}
.hero-name {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.8rem, 5vw, 4.2rem);
  font-weight: 800; line-height: 1.08;
  letter-spacing: -2px;
  animation: fadeUp 0.7s 0.1s ease both;
}
.hero-name span {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.hero-role {
  font-size: 1.15rem; color: var(--muted); margin-top: 0.6rem;
  font-weight: 300; animation: fadeUp 0.7s 0.2s ease both;
}
.hero-bio {
  margin-top: 1.6rem; font-size: 1rem; color: var(--muted); max-width: 480px;
  animation: fadeUp 0.7s 0.3s ease both;
}
.hero-cta {
  display: flex; gap: 1rem; margin-top: 2.5rem; flex-wrap: wrap;
  animation: fadeUp 0.7s 0.4s ease both;
}
.btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.8rem 1.8rem; border-radius: 8px;
  font-family: 'DM Sans', sans-serif; font-weight: 500;
  font-size: 0.92rem; text-decoration: none; cursor: pointer;
  transition: all 0.25s;
}
.btn-primary {
  background: var(--accent); color: #fff;
  box-shadow: 0 4px 24px rgba(108,99,255,0.35);
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(108,99,255,0.5); }
.btn-outline {
  background: transparent; color: var(--text);
  border: 1px solid rgba(255,255,255,0.14);
}
.btn-outline:hover { border-color: var(--accent); color: var(--accent); }

.hero-photo-wrap {
  display: flex; justify-content: center; align-items: center;
  animation: fadeUp 0.8s 0.2s ease both;
}
.hero-photo-ring {
  position: relative;
  width: 340px; height: 340px;
}
.hero-photo-ring::before {
  content: '';
  position: absolute; inset: -3px; border-radius: 50%;
  background: conic-gradient(from 0deg, var(--accent), var(--accent2), var(--gold), var(--accent));
  animation: spin 6s linear infinite;
}
.hero-photo-ring::after {
  content: '';
  position: absolute; inset: -6px; border-radius: 50%;
  background: var(--bg);
}
.hero-photo {
  position: absolute; inset: 0; border-radius: 50%;
  overflow: hidden; z-index: 1;
  border: 4px solid var(--bg);
}
.hero-photo img {
  width: 100%; height: 100%; object-fit: cover; object-position: top center;
}
.hero-badge {
  position: absolute; bottom: 10px; right: -10px; z-index: 2;
  background: var(--bg2); border: 1px solid var(--border);
  border-radius: 12px; padding: 0.6rem 1rem;
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.82rem; color: var(--text);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  animation: float 3s ease-in-out infinite;
}
.badge-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 8px #4ade80;
  animation: pulse 2s ease infinite;
}

/* ── SECTIONS ── */
section { padding: 6rem 4rem; position: relative; z-index: 1; }
.section-label {
  font-size: 0.78rem; letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--accent); font-weight: 500; margin-bottom: 0.8rem;
}
.section-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 800; letter-spacing: -1px;
  margin-bottom: 1rem;
}
.section-sub { color: var(--muted); max-width: 540px; font-size: 1rem; margin-bottom: 3rem; }
.container { max-width: 1200px; margin: 0 auto; }

/* ── SKILLS ── */
#skills { background: var(--bg2); }
.skills-grid {
  display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 2rem;
}
.skill-chip {
  display: flex; align-items: center; gap: 0.5rem;
  background: var(--bg3); border: 1px solid var(--border);
  padding: 0.55rem 1.2rem; border-radius: 100px;
  font-size: 0.9rem; font-weight: 500;
  transition: all 0.25s; cursor: default;
}
.skill-chip:hover {
  border-color: var(--accent);
  background: rgba(108,99,255,0.08);
  transform: translateY(-2px);
}
.skill-icon { font-size: 1.1rem; }

/* ── EXPERIENCE ── */
.exp-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem 2.2rem;
  backdrop-filter: blur(8px);
  position: relative; overflow: hidden;
  transition: border-color 0.25s, transform 0.25s;
}
.exp-card:hover { border-color: var(--accent); transform: translateY(-3px); }
.exp-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
}
.exp-company { color: var(--accent); font-size: 0.85rem; font-weight: 500; margin-bottom: 0.3rem; }
.exp-role {
  font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;
}
.exp-period { color: var(--muted); font-size: 0.85rem; }

/* ── PROJECTS ── */
#projects { background: var(--bg2); }
.projects-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem; margin-top: 2rem;
}
.project-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px; padding: 2rem;
  backdrop-filter: blur(8px);
  transition: all 0.3s; position: relative; overflow: hidden;
}
.project-card::after {
  content: '';
  position: absolute; inset: 0; border-radius: 20px;
  background: linear-gradient(135deg, rgba(108,99,255,0.04), rgba(255,101,132,0.04));
  opacity: 0; transition: opacity 0.3s;
}
.project-card:hover { transform: translateY(-5px); border-color: var(--accent); }
.project-card:hover::after { opacity: 1; }
.project-emoji { font-size: 2.4rem; margin-bottom: 1rem; display: block; }
.project-name {
  font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 700; margin-bottom: 0.6rem;
}
.project-desc { color: var(--muted); font-size: 0.92rem; line-height: 1.65; margin-bottom: 1.2rem; }
.project-badge {
  display: inline-flex; align-items: center;
  background: rgba(244,196,48,0.1); border: 1px solid rgba(244,196,48,0.25);
  color: var(--gold); font-size: 0.75rem; padding: 0.25rem 0.75rem;
  border-radius: 100px; margin-bottom: 1rem; font-weight: 500;
}
.tech-stack { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.tech-tag {
  background: rgba(108,99,255,0.1); border: 1px solid rgba(108,99,255,0.2);
  color: var(--accent); font-size: 0.78rem; padding: 0.25rem 0.7rem;
  border-radius: 6px; font-weight: 500;
}

/* ── EDUCATION ── */
.edu-timeline { position: relative; padding-left: 2rem; }
.edu-timeline::before {
  content: ''; position: absolute; left: 0; top: 6px; bottom: 6px; width: 2px;
  background: linear-gradient(180deg, var(--accent), var(--accent2), transparent);
}
.edu-item {
  position: relative; margin-bottom: 2.5rem;
  padding-left: 1.5rem;
}
.edu-item::before {
  content: ''; position: absolute; left: -2.5rem; top: 6px;
  width: 12px; height: 12px; border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 12px rgba(108,99,255,0.6);
}
.edu-degree {
  font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700;
}
.edu-inst { color: var(--accent); font-size: 0.9rem; margin: 0.2rem 0; }
.edu-year { color: var(--muted); font-size: 0.85rem; }

/* ── CONTACT ── */
#contact { background: var(--bg2); text-align: center; }
.contact-inner { max-width: 600px; margin: 0 auto; }
.contact-links {
  display: flex; justify-content: center; flex-wrap: wrap; gap: 1rem; margin-top: 2rem;
}
.contact-link {
  display: flex; align-items: center; gap: 0.6rem;
  background: var(--bg3); border: 1px solid var(--border);
  color: var(--text); text-decoration: none;
  padding: 0.8rem 1.6rem; border-radius: 12px;
  font-size: 0.92rem; transition: all 0.25s;
}
.contact-link:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

/* ── FOOTER ── */
footer {
  text-align: center; padding: 2rem; color: var(--muted);
  font-size: 0.85rem; border-top: 1px solid var(--border);
}

/* ── ANIMATIONS ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes pulse {
  0%,100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* ── SCROLL REVEAL ── */
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  nav { padding: 1rem 1.5rem; }
  .nav-links { display: none; }
  .hero { padding: 7rem 1.5rem 4rem; }
  .hero-inner { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
  .hero-bio { max-width: 100%; }
  .hero-cta { justify-content: center; }
  .hero-photo-wrap { order: -1; }
  .hero-photo-ring { width: 240px; height: 240px; }
  section { padding: 4rem 1.5rem; }
}
```

  </style>
</head>
<body>

<!-- NAV -->

<nav>
  <div class="nav-logo">MR.</div>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- HERO -->

<section class="hero" id="about">
  <div class="hero-glow"></div>
  <div class="hero-glow2"></div>
  <div class="hero-inner">
    <div>
      <span class="hero-tag">👋 Available for Opportunities</span>
      <h1 class="hero-name">Muhammad<br/><span>Rizwan</span></h1>
      <p class="hero-role">Full Stack Developer &amp; Flutter Developer</p>
      <p class="hero-bio">
        BS Computer Science graduate from University of Swabi, passionate about building intelligent, data-driven applications. From AI-powered platforms to cross-platform mobile apps — I craft software that solves real problems.
      </p>
      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">View Projects →</a>
        <a href="#contact" class="btn btn-outline">Let's Connect</a>
      </div>
    </div>
    <div class="hero-photo-wrap">
      <div class="hero-photo-ring">
        <div class="hero-photo">
          <img src="data:image/jpeg;base64,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" alt="Muhammad Rizwan" />
        </div>
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Open to Work
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SKILLS -->

<section id="skills">
  <div class="container reveal">
    <div class="section-label">Technical Arsenal</div>
    <h2 class="section-title">Skills &amp; Technologies</h2>
    <p class="section-sub">A versatile toolkit spanning frontend, backend, mobile, and data — built through academic projects and real-world internship experience.</p>
    <div class="skills-grid">
      <div class="skill-chip"><span class="skill-icon">🐍</span> Python</div>
      <div class="skill-chip"><span class="skill-icon">☕</span> Java</div>
      <div class="skill-chip"><span class="skill-icon">🌐</span> HTML5</div>
      <div class="skill-chip"><span class="skill-icon">🎨</span> CSS3</div>
      <div class="skill-chip"><span class="skill-icon">⚡</span> JavaScript</div>
      <div class="skill-chip"><span class="skill-icon">💙</span> Flutter</div>
      <div class="skill-chip"><span class="skill-icon">🌶️</span> Flask</div>
      <div class="skill-chip"><span class="skill-icon">🗄️</span> MySQL</div>
      <div class="skill-chip"><span class="skill-icon">📊</span> Data Analysis</div>
      <div class="skill-chip"><span class="skill-icon">🤖</span> Groq API</div>
      <div class="skill-chip"><span class="skill-icon">📄</span> CV Parsing</div>
      <div class="skill-chip"><span class="skill-icon">🔗</span> REST APIs</div>
    </div>
  </div>
</section>

<!-- EXPERIENCE -->

<section id="experience">
  <div class="container reveal">
    <div class="section-label">Work History</div>
    <h2 class="section-title">Experience</h2>
    <p class="section-sub">Hands-on experience building production-ready applications in a professional environment.</p>
    <div class="exp-card">
      <div class="exp-company">Developer Hub Corporation</div>
      <div class="exp-role">Flutter Developer — Internship</div>
      <div class="exp-period">📍 Pakistan &nbsp;·&nbsp; Flutter Development</div>
      <p style="margin-top:1rem; color:var(--muted); font-size:0.95rem;">
        Worked as a Flutter Developer intern, contributing to cross-platform mobile application development. Gained hands-on experience with Flutter's widget ecosystem, state management, and integrating REST APIs into mobile applications.
      </p>
    </div>
  </div>
</section>

<!-- PROJECTS -->

<section id="projects">
  <div class="container reveal">
    <div class="section-label">What I've Built</div>
    <h2 class="section-title">Featured Projects</h2>
    <p class="section-sub">End-to-end applications built with modern stacks — from AI-powered HR tools to community management systems.</p>
    <div class="projects-grid">

```
  <div class="project-card">
    <span class="project-emoji">🤖</span>
    <span class="project-badge">⭐ Final Year Project</span>
    <div class="project-name">Hire Ready AI</div>
    <div class="project-desc">
      An AI-powered HR recruitment platform that parses CVs (PDF &amp; DOCX), matches candidates to job requirements using the Groq API, and streamlines the hiring pipeline. Built as my Final Year Project with a full-stack architecture.
    </div>
    <div class="tech-stack">
      <span class="tech-tag">HTML/CSS/JS</span>
      <span class="tech-tag">Python Flask</span>
      <span class="tech-tag">MySQL</span>
      <span class="tech-tag">Groq API</span>
      <span class="tech-tag">CV Parsing</span>
      <span class="tech-tag">PDF/DOCX</span>
    </div>
  </div>

  <div class="project-card">
    <span class="project-emoji">🔍</span>
    <div class="project-name">Lost &amp; Found</div>
    <div class="project-desc">
      A community web application that helps people report and recover lost items. Features item listings, search functionality, and a MySQL-backed database to track found and missing items efficiently.
    </div>
    <div class="tech-stack">
      <span class="tech-tag">HTML/CSS</span>
      <span class="tech-tag">Python Flask</span>
      <span class="tech-tag">MySQL</span>
    </div>
  </div>

</div>
```

  </div>
</section>

<!-- EDUCATION -->

<section id="education">
  <div class="container reveal">
    <div class="section-label">Academic Journey</div>
    <h2 class="section-title">Education</h2>
    <p class="section-sub">A strong academic foundation in science and computer science from institutions in KPK, Pakistan.</p>
    <div class="edu-timeline">

```
  <div class="edu-item">
    <div class="edu-degree">BS Computer Science</div>
    <div class="edu-inst">University of Swabi</div>
    <div class="edu-year">2022 – 2026</div>
  </div>

  <div class="edu-item">
    <div class="edu-degree">Intermediate — Pre-Medical</div>
    <div class="edu-inst">BISE Mardan</div>
    <div class="edu-year">2022</div>
  </div>

  <div class="edu-item">
    <div class="edu-degree">Matric — Science</div>
    <div class="edu-inst">BISE Mardan</div>
    <div class="edu-year">2020</div>
  </div>

</div>
```

  </div>
</section>

<!-- CONTACT -->

<section id="contact">
  <div class="container">
    <div class="contact-inner reveal">
      <div class="section-label">Get In Touch</div>
      <h2 class="section-title">Let's Work Together</h2>
      <p class="section-sub" style="margin:0 auto 0.5rem;">
        Based in Karachi, Pakistan 🇵🇰 &nbsp;·&nbsp; Originally from Swabi<br/>
        Open to full-time roles, freelance projects, and collaborations.
      </p>
      <div class="contact-links">
        <a href="mailto:muhrizwancs@gmail.com" class="contact-link">
          <span>✉️</span> muhrizwancs@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/muhammad-rizwan-ba05572a8" target="_blank" class="contact-link">
          <span>💼</span> LinkedIn Profile
        </a>
        <a href="mailto:muhrizwancs@gmail.com" class="contact-link">
          <span>📍</span> Karachi, Pakistan
        </a>
      </div>
    </div>
  </div>
</section>

<footer>
  <p>Crafted with ❤️ by <strong>Muhammad Rizwan</strong> · 2025</p>
</footer>

<script>
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  reveals.forEach(r => observer.observe(r));
</script>

</body>
</html>
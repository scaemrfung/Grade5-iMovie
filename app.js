function currentPage() {
  const file = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "") || "index";
  return file === "index" ? "index" : file;
}
function nav() {
  const page = currentPage();
  const params = new URLSearchParams(location.search);
  const lesson = params.get("n");
  const mark = (id) => (page === id ? "active" : "");
  return `
    <div class="nav-label">Classroom</div>
    <a class="nav-link ${mark("index")}" href="index.html"><span class="nav-ico">01</span> Course map</a>
    <a class="nav-link ${mark("how-to")}" href="how-to.html"><span class="nav-ico">02</span> How to teach</a>
    <a class="nav-link ${mark("projects")}" href="projects.html"><span class="nav-ico">03</span> Hand-in projects</a>
    <a class="nav-link ${page === "project" && lesson === "4" ? "active" : ""}" href="project.html?n=4"><span class="nav-ico">04</span> Final showcase</a>
    <div class="nav-label">Lessons</div>
    ${LESSONS.map((l) => `
      <a class="nav-link ${page === "lesson" && lesson === String(l.number) ? "active" : ""}" href="lesson.html?n=${l.number}">
        <span class="nav-ico">${String(l.number).padStart(2, "0")}</span> ${LESSON_SHORT[l.id] || l.title}
      </a>
    `).join("")}
  `;
}
function header() {
  return `
    <header class="topbar">
      <a class="brand" href="index.html">
        <div class="logo" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 16 16"><path d="M4 2.5v11L14 8 4 2.5z" fill="#F7FBFF"/></svg>
        </div>
        <div>
          <div class="brand-title">Grade 5 iMovie</div>
          <div class="brand-sub">MacBook · 13 lessons</div>
        </div>
      </a>
    </header>
    <nav class="mobile-nav" aria-label="Mobile">
      <a href="index.html">Course map</a>
      <a href="how-to.html">How to teach</a>
      <a href="projects.html">Projects</a>
      <a href="lesson.html?n=1">Lesson 1</a>
    </nav>
  `;
}
function mountChrome() {
  const app = document.getElementById("app");
  const page = app.innerHTML;
  app.outerHTML = `
    ${header()}
    <div class="shell">
      <aside class="sidebar">${nav()}</aside>
      <main class="main" id="main">${page}</main>
    </div>
  `;
}
document.addEventListener("DOMContentLoaded", mountChrome);

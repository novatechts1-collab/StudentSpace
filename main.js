document.addEventListener("DOMContentLoaded", () => {
  const darkbutton = document.querySelector("#logo-header");
  let clickCount = 0;
  const carousel = document.querySelector(".carousel");
  const calc = document.querySelector("#calc");
  const cbt = document.querySelector("#cbt");
  const lib = document.querySelector("#lib");
  const news = document.querySelector("#news");
  const lounge = document.querySelector("#lounge");
  const comm = document.querySelector("#commu");
  const activeInfo = document.querySelector(".active-info");
  darkbutton.addEventListener("click", () => {
    clickCount++;
    if (clickCount % 2 === 1) {
      document.documentElement.setAttribute("data-theme", "light");
      darkbutton.src = "assets/images/logo/vector/default-monochrome-black.svg";
      console.log("Light Mode");
    } else {
      document.documentElement.removeAttribute("data-theme");
      darkbutton.src = "assets/images/logo/vector/default-monochrome-white.svg";
      console.log("Dark Mode");
    }
  });
  carousel.addEventListener("click", (event) => {
    if (event.target.matches(".carousel-mini")) {
      document
        .querySelectorAll(".carousel-mini")
        .forEach((el) => el.classList.remove("selected"));
      event.target.classList.toggle("selected");
    }
  });
  calc.addEventListener("click", () => {
    activeInfo.classList.add("fade-out");
    void activeInfo.offsetWidth;
    setTimeout(() => {
      activeInfo.innerHTML =
        "<span class=" +
        "'info-header'" +
        " >Calculators Hub: Crunch Your Numbers</span> <span class= " +
        "'tagline'>Instant tools to evaluate your admission eligibility and academic standing</span><ul><li>UTME & Post-UTME Aggregate Score Checker</li><li>Departmental Cut-off Mark Eligibility Estimator</li><li>Targeted Score Calculator for Competitive Courses</li><li>GPA & CGPA Tracker for All Semesters</li></ul><button class=" +
        "'s-button'>Launch Calculator Tool →</button>";

      activeInfo.classList.remove("fade-out");
    }, 400);
  });
  cbt.addEventListener("click", () => {
    activeInfo.classList.add("fade-out");
    void activeInfo.offsetWidth;
    setTimeout(() => {
      activeInfo.innerHTML =
        "<span class=" +
        "'info-header'" +
        " >Interactive CBT Engine</span> <span class= " +
        "'tagline'>Simulate real exam conditions with timed past questions and instant feedback</span><ul><li>Realistic UTME / Post-UTME exam interface simulation</li><li>Instant scoring with step-by-step answer explanations</li><li>Subject-by-subject practice and weak-topic diagnostics</li><li>Timed test modes to build speed and accuracy</li></ul><button class=" +
        "'s-button'>Start CBT Practice →</button>";

      activeInfo.classList.remove("fade-out");
    }, 400);
  });
  lib.addEventListener("click", () => {
    activeInfo.classList.add("fade-out");
    void activeInfo.offsetWidth;
    setTimeout(() => {
      activeInfo.innerHTML =
        "<span class=" +
        "'info-header'" +
        " >Student Resource Library</span> <span class= " +
        "'tagline'>Your central archive for past papers, textbooks, and syllabus guides</span><ul><li>High-quality downloadable PDF past questions and answer keys</li><li>Recommended departmental textbooks and lecture notes</li><li>Essential reading lists and course syllabus breakdowns</li><li>Organised subject archives for quick reference</li></ul><button class=" +
        "'s-button'>Open Library →</button>";

      activeInfo.classList.remove("fade-out");
    }, 400);
  });
  news.addEventListener("click", () => {
    activeInfo.classList.add("fade-out");
    void activeInfo.offsetWidth;
    setTimeout(() => {
      activeInfo.innerHTML =
        "<span class=" +
        "'info-header'" +
        " >Verified Campus Bulletin</span> <span class= " +
        "'tagline'>Real-time updates on admissions, screening schedules, and university news</span><ul><li>Official admission list releases and cut-off mark announcements</li><li>Post-UTME screening schedules and registration deadlines</li><li>Academic calendar updates, matriculation, and campus events</li><li>Instant alerts for critical university news</li></ul><button class=" +
        "'s-button'>Read Campus News →</button>";

      activeInfo.classList.remove("fade-out");
    }, 400);
  });
  lounge.addEventListener("click", () => {
    activeInfo.classList.add("fade-out");
    void activeInfo.offsetWidth;
    setTimeout(() => {
      activeInfo.innerHTML =
        "<span class=" +
        "'info-header'" +
        " >Focus & Productivity Space</span> <span class= " +
        "'tagline'>An ambient environment designed to help you lock in for deep work.</span><ul><li>Integrated Pomodoro timer with customizable work/break intervals</li><li>Curated focus audio (Lo-Fi streams, rain, and ambient soundscapes)</li><li>Virtual silent study rooms to track focus sessions alongside peers</li><li>Distraction-free study layout</li></ul><button class=" +
        "'s-button'>Enter Study Lounge →</button>";

      activeInfo.classList.remove("fade-out");
    }, 400);
  });
  comm.addEventListener("click", () => {
    activeInfo.classList.add("fade-out");
    void activeInfo.offsetWidth;
    setTimeout(() => {
      activeInfo.innerHTML =
        "<span class=" +
        "'info-header'" +
        " >Student Space Forum</span> <span class= " +
        "'tagline'>Connect, ask questions, and collaborate with fellow aspirants and students</span><ul><li>Peer discussion forums and course-specific Q&A threads</li><li>Faculty, departmental, and aspirant group chats</li><li>Direct insights and advice from senior university students</li><li>Community study groups and peer support</li></ul><button class=" +
        "'s-button'>Join Community →</button>";

      activeInfo.classList.remove("fade-out");
    }, 400);
  });
});

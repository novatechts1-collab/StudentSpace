let ambientContext = null;
let ambientOsc = null;
let ambientGain = null;
let isAmbientPlaying = false;
function toggleAmbientHum() {
  if (!isAmbientPlaying) {
    ambientContext = new (window.AudioContext || window.webkitAudioContext)();

    ambientOsc = ambientContext.createOscillator();
    ambientGain = ambientContext.createGain();
    const filter = ambientContext.createBiquadFilter();

    ambientOsc.type = "triangle";
    ambientOsc.frequency.setValueAtTime(65.41, ambientContext.currentTime);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(150, ambientContext.currentTime);

    ambientGain.gain.setValueAtTime(0.001, ambientContext.currentTime);
    ambientGain.gain.exponentialRampToValueAtTime(
      0.025,
      ambientContext.currentTime + 2,
    );

    ambientOsc.connect(filter);
    filter.connect(ambientGain);
    ambientGain.connect(ambientContext.destination);

    ambientOsc.start();
    isAmbientPlaying = true;
  } else {
    if (ambientGain && ambientContext) {
      ambientGain.gain.exponentialRampToValueAtTime(
        0.001,
        ambientContext.currentTime + 1,
      );
      setTimeout(() => {
        ambientOsc.stop();
        ambientOsc.disconnect();
        ambientContext.close();
        isAmbientPlaying = false;
      }, 1000);
    }
  }
}
window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
function playTerminalSound(frequency, type, duration) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      audioCtx.currentTime + duration,
    );

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {}
}
document.addEventListener("DOMContentLoaded", () => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const darkbutton = document.querySelector("#logo-header");
  let clickCount = 0;
  const carousel = document.querySelector(".carousel");
  const calc = document.querySelector("#calc");
  const cbt = document.querySelector("#cbt");
  const lib = document.querySelector("#lib");
  const news = document.querySelector("#news");
  const lounge = document.querySelector("#lounge");
  const comm = document.querySelector("#commu");
  const board = document.querySelector(".game");
  const game = document.querySelector(".game-grid");
  const orbs = document.querySelectorAll(".orbs");
  secret = document.querySelector(".secret");
  const secretText = document.querySelector(".secret-text");
  const omega = document.querySelector(".omega");
  const activeInfo = document.querySelector(".active-info");
  darkbutton.addEventListener("click", () => {
    clickCount++;
    if (clickCount % 4 === 0) {
      document.documentElement.removeAttribute("data-theme");
      darkbutton.src = "assets/images/logo/vector/default-monochrome-white.svg";
      console.log("Dark Mode - Forest");
    } else if (clickCount % 4 === 1) {
      document.documentElement.setAttribute("data-theme", "green-light");
      darkbutton.src = "assets/images/logo/vector/default-monochrome-black.svg";
      console.log("Light Mode - Forest");
    } else if (clickCount % 4 === 2) {
      document.documentElement.setAttribute("data-theme", "blue-dark");
      darkbutton.src = "assets/images/logo/vector/default-monochrome-white.svg";
      console.log("Dark Mode - Ocean");
    } else if (clickCount % 4 === 3) {
      document.documentElement.setAttribute("data-theme", "blue-light");
      darkbutton.src = "assets/images/logo/vector/default-monochrome-black.svg";
      console.log("Light Mode - Ocean");
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
  omega.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 1) {
      console.log(clickCount);
      playTerminalSound(440, "sine", 0.1);
      secret.classList.add("fade");
      omega.classList.add("clicked");

      setTimeout(() => {
        secretText.classList.add("found");
        secretText.innerHTML = "Tap me twice more to unlock the hidden core";
        secret.classList.remove("fade");
      }, 200);
    } else if (clickCount === 2) {
      console.log(clickCount);
      playTerminalSound(554, "sine", 0.1);
      secretText.classList.add("fade");
      omega.classList.add("clickedmore");

      setTimeout(() => {
        secretText.innerHTML = "Tap me one more time to bring the board online";
        secretText.classList.remove("fade");
      }, 200);
    } else if (clickCount === 3) {
      console.log(clickCount);
      playTerminalSound(523, "triangle", 0.15);
      setTimeout(() => playTerminalSound(659, "triangle", 0.15), 100);
      setTimeout(() => playTerminalSound(784, "triangle", 0.3), 200);
      secretText.classList.add("fade");
      omega.classList.add("fade");

      setTimeout(() => {
        omega.classList.add("bye");
        secretText.classList.remove("found");
        board.classList.add("found");
      }, 300);
      clickCount = 0;
    }
  });
  game.addEventListener("click", (event) => {
    const alpha = document.querySelector("#orb1");
    const beta = document.querySelector("#orb2");
    const gamma = document.querySelector("#orb3");
    const delta = document.querySelector("#orb4");
    const epsilon = document.querySelector("#orb5");
    const zeta = document.querySelector("#orb6");
    const eta = document.querySelector("#orb7");
    const theta = document.querySelector("#orb8");
    const iota = document.querySelector("#orb9");
    if (event.target.matches(".orbs")) {
      let currentClicks = Number(event.target.dataset.clicks) || 0;
      currentClicks++;
      let marker = Math.abs(3.5 - currentClicks);
      if (currentClicks >= 6) {
        currentClicks = 0;
      }
      event.target.dataset.clicks = currentClicks;
      let Combination = [
        Number(alpha.dataset.clicks),
        Number(beta.dataset.clicks),
        Number(gamma.dataset.clicks),
        Number(delta.dataset.clicks),
        Number(epsilon.dataset.clicks),
        Number(zeta.dataset.clicks),
        Number(eta.dataset.clicks),
        Number(theta.dataset.clicks),
        Number(iota.dataset.clicks),
      ];
      let colourMap = {
        0: "off",
        1: "red",
        5: "red",
        2: "yellow",
        4: "yellow",
        3: "green",
      };
      let mappedOut = Combination.map((val) => colourMap[val]);
      const winningCombo = [
        "red",
        "yellow",
        "green",
        "red",
        "yellow",
        "green",
        "red",
        "yellow",
        "green",
      ];
      if (marker === 2.5) {
        event.target.classList.toggle("selected");
      } else if (marker === 1.5) {
        event.target.classList.toggle("selected-deux");
      } else if (marker === 0.5) {
        event.target.classList.toggle("selected-trois");
      }
      if (mappedOut.join() === winningCombo.join()) {
        console.log("You win, Victory Animation started");
        console.log(
          `Picked Combination is [${Combination}] , MappedOut Combination is [${mappedOut}]`,
        );
        setTimeout(() => {
          orbs.forEach((el) => el.classList.add("win"));
        }, 500);
        Combination.fill(0);
        orbs.forEach((orb, index) => {
          orb.dataset.clicks = Combination[index];
        });
      }
    }
  });
  game.addEventListener("animationend", () => {
    console.log("Animation Ended");
    orbs.forEach((el) =>
      el.classList.remove("win", "selected", "selected-deux", "selected-trois"),
    );
  });
  calc.addEventListener("click", () => {
    activeInfo.classList.add("fade-out");
    playTerminalSound(261.63, "sine", 0.1);
    void activeInfo.offsetWidth;
    setTimeout(() => {
      activeInfo.innerHTML =
        "<span class=" +
        "'info-header'" +
        " >Calculators Hub</span> <span class= " +
        "'tagline'>Instant tools to evaluate your admission eligibility and academic standing</span><ul><li>UTME & Post-UTME Aggregate Score Checker</li><li>Departmental Cut-off Mark Eligibility Estimator</li><li>Targeted Score Calculator for Competitive Courses</li><li>GPA & CGPA Tracker for All Semesters</li></ul><button class=" +
        "'s-button'>Launch Calculator Tool →</button>";
      omega.classList.add("found");
      activeInfo.classList.remove("fade-out");
    }, 400);
  });
  cbt.addEventListener("click", () => {
    activeInfo.classList.add("fade-out");
    playTerminalSound(293.66, "sine", 0.1);
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
    playTerminalSound(329.63, "sine", 0.1);
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
    playTerminalSound(392.0, "sine", 0.1);
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
    playTerminalSound(440.0, "sine", 0.1);
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
    playTerminalSound(523.25, "sine", 0.1);
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

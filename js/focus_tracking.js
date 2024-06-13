console.log("Focus tracking script loaded!");

let lastActivityTime = Date.now();
const idleThreshold = 300000 / 5; // 5 minutes, adjust as necessary
let idleTimer;

function resetIdleTimer() {
  lastActivityTime = Date.now();
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    console.log("User has been idle for 1 minute!");
    return lastActivityTime;
  }, idleThreshold);
}

document.addEventListener("mousemove", resetIdleTimer);
document.addEventListener("keydown", resetIdleTimer);
document.addEventListener("click", resetIdleTimer);
document.addEventListener("scroll", resetIdleTimer);

function handleVisibilityChange() {
  if (document.hidden) {
    console.log("Tab is inactive");
    // React to the tab becoming inactive
  } else {
    console.log("Tab is active");
    // React to the tab becoming active
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange);

window.addEventListener("blur", function () {
  console.log("Window lost focus");
});
window.addEventListener("focus", function () {
  console.log("Window gained focus");
});

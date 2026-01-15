document.addEventListener("DOMContentLoaded", () => {

  // Button elements
  const secureBtn = document.getElementById("secureBtn");
  const startBtn = document.getElementById("startBtn");
  const appsBtn = document.getElementById("appsBtn");

  // Get Secure Network button
  secureBtn.addEventListener("click", () => {
    alert("Shieldcore security activated!");
  });

  // Get Started button
  startBtn.addEventListener("click", () => {
    alert("Getting started with Shieldcore...");
  });

  // See All Apps button
  appsBtn.addEventListener("click", () => {
    alert("Redirecting to all Shieldcore apps...");
  });

});

secureBtn.addEventListener("click", () => {
  secureBtn.textContent = "Securing...";
  secureBtn.classList.add("loading");

  setTimeout(() => {
    secureBtn.textContent = "Get Secure Network";
    secureBtn.classList.remove("loading");
  }, 2000);
});
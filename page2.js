function createHearts() {
  const heartsContainer = document.getElementById("hearts");
  const numHearts = 15;

  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = Math.random() * 100 + "%";
    heart.style.animationDelay = Math.random() * 3 + "s";
    heartsContainer.appendChild(heart);
  }
}

function createConstellation() {
  const numStars = 30;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "constellation";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(star);
  }
}

function addColoredSparkleEffect() {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-button")) return;

    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#f9ca24", "#f0932b"];
    const sparkle = document.createElement("div");
    sparkle.style.position = "fixed";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    sparkle.style.width = "20px";
    sparkle.style.height = "20px";
    sparkle.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.clipPath =
      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "1000";
    sparkle.style.animation = "sparkle-burst 0.8s ease-out forwards";

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 800);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  createHearts();
  createConstellation();
  addColoredSparkleEffect();
  showBrowserNotice();
});

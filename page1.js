function createStars() {
  const starsContainer = document.getElementById("stars");
  const numStars = 20;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = Math.random() * 20 + 10 + "px";
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";
    starsContainer.appendChild(star);
  }
}

function addSparkleEffect(animationName = "sparkle-pop", duration = 600) {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-button")) return;

    const sparkle = document.createElement("div");
    sparkle.style.position = "fixed";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    sparkle.style.width = "20px";
    sparkle.style.height = "20px";
    sparkle.style.background = "white";
    sparkle.style.clipPath =
      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "1000";
    sparkle.style.animation = `${animationName} ${duration}ms ease-out forwards`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, duration);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  createStars();
  addSparkleEffect("sparkle-pop", 600);
  showBrowserNotice();
});

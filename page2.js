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

function showCodeModal() {
  const modal = document.getElementById('codeModal');
  modal.showModal();
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.close();
    }
  });
}

function copyCSS() {
  const cssCode = `@view-transition {
    navigation: auto;
}

/* Star Wipe Animations */

::view-transition-old(root) {
    animation: star-wipe-out 0.9s ease-in-out;
}

::view-transition-new(root) {
    animation: star-wipe-in 0.9s ease-in-out;
}

@keyframes star-wipe-out {
    /* Required to keep old page visible during transition */
}

@keyframes star-wipe-in {
    from {
        clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
    }
    to {
        clip-path: polygon(calc(50vmin + 50vw - 50vmin) -300vmin, calc(188vmin + 50vw - 50vmin) -24vmin, calc(484vmin + 50vw - 50vmin) -24vmin, calc(244vmin + 50vw - 50vmin) 152vmin, calc(332vmin + 50vw - 50vmin) 424vmin, calc(50vmin + 50vw - 50vmin) 256vmin, calc(-232vmin + 50vw - 50vmin) 424vmin, calc(-144vmin + 50vw - 50vmin) 152vmin, calc(-384vmin + 50vw - 50vmin) -24vmin, calc(-88vmin + 50vw - 50vmin) -24vmin);
    }
}`;

  navigator.clipboard.writeText(cssCode).then(function() {
    const button = document.querySelector('.copy-button');
    button.textContent = 'Copied!';
    button.classList.add('copied');
    
    setTimeout(function() {
      button.textContent = 'Copy CSS';
      button.classList.remove('copied');
    }, 2000);
  }).catch(function(err) {
    console.error('Failed to copy: ', err);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  createHearts();
  createConstellation();
  addColoredSparkleEffect();
  showBrowserNotice();
});

(function () {
  "use strict";

  var loader = document.getElementById("loader");
  var site = document.getElementById("site");

  // la logica del loader gira solo nelle pagine che lo includono (es. index.html)
  if (loader && site) {
    var fill = document.getElementById("loaderFill");
    var pctEl = document.getElementById("loaderPct");
    var progress = 0;

    var setProgress = function (p) {
      progress = Math.min(100, p);
      fill.style.width = progress + "%";
      pctEl.textContent = Math.floor(progress) + "%";
    };

    var reveal = function () {
      loader.classList.add("done");
      site.hidden = false;
      // forza un reflow prima di aggiungere la classe, per attivare la transizione
      requestAnimationFrame(function () {
        site.classList.add("show");
      });
      setTimeout(function () {
        if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
      }, 600);
    };

    var timer = setInterval(function () {
      setProgress(progress + (Math.random() * 16 + 6));
      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(reveal, 250);
      }
    }, 120);
  }

  // anno corrente nel footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- LIGHTBOX: apre gli screenshot a schermo intero per leggerli ----------
  var shots = Array.prototype.slice.call(document.querySelectorAll(".shot-grid img"));
  if (shots.length) {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML =
      '<button class="lightbox-close" aria-label="Chiudi">✕</button>' +
      '<button class="lightbox-prev" aria-label="Precedente">‹</button>' +
      '<img alt="">' +
      '<button class="lightbox-next" aria-label="Successiva">›</button>' +
      '<div class="lightbox-count"></div>';
    document.body.appendChild(lb);

    var lbImg = lb.querySelector("img");
    var lbCount = lb.querySelector(".lightbox-count");
    var current = 0;

    function openAt(i) {
      current = (i + shots.length) % shots.length;
      lbImg.src = shots[current].src;
      lbImg.alt = shots[current].alt || "";
      lbCount.textContent = (current + 1) + " / " + shots.length;
      lb.classList.add("open");
    }
    function close() {
      lb.classList.remove("open");
      lbImg.src = "";
    }

    shots.forEach(function (img, i) {
      img.addEventListener("click", function () {
        openAt(i);
      });
    });

    lb.querySelector(".lightbox-close").addEventListener("click", close);
    lb.querySelector(".lightbox-prev").addEventListener("click", function () {
      openAt(current - 1);
    });
    lb.querySelector(".lightbox-next").addEventListener("click", function () {
      openAt(current + 1);
    });
    lb.addEventListener("click", function (e) {
      if (e.target === lb) close();
    });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") openAt(current - 1);
      if (e.key === "ArrowRight") openAt(current + 1);
    });
  }
})();

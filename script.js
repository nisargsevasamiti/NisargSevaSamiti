/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (
      !menuBtn.contains(e.target) &&
      !navLinks.contains(e.target)
    ) {
      navLinks.classList.remove("active");
    }
  });
}

/* =========================
   TREE RENDERING
========================= */

const treeContainer = document.getElementById("treeContainer");
const loadMoreBtn = document.getElementById("loadMoreTrees");

const INITIAL_TREES = 8;
let showingAllTrees = false;

function renderTrees(limit = INITIAL_TREES) {

  if (!treeContainer) return;
  if (typeof trees === "undefined" || !Array.isArray(trees)) return;

  treeContainer.innerHTML = "";

  trees.slice(0, limit).forEach(tree => {

    const card = document.createElement("div");
    card.classList.add("tree-card");

    card.innerHTML = `
            <img 
                src="${tree.image}"
                alt="${tree.name}"
                loading="lazy"
                onerror="this.src='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80';"
            >

            <div class="tree-content">
                <h3>${tree.name}</h3>

                <p><strong>Marathi Name:</strong> ${tree.marathiName || "N/A"}</p>

                <p><strong>Scientific Name:</strong> ${tree.scientific || "N/A"}</p>

                <p><strong>Geographic Range:</strong> ${tree.geographicRange || "N/A"}</p>

                <p><strong>Ideal Environment:</strong> ${tree.idealEnvironment || "N/A"}</p>

                <p><strong>Primary Uses:</strong> ${tree.primaryUses || "N/A"}</p>

                <p class="tree-desc">
                    ${tree.description || "No description available."}
                </p>
            </div>
        `;

    treeContainer.appendChild(card);
  });
}

renderTrees();

/* =========================
   READ MORE / SHOW LESS
========================= */

if (loadMoreBtn) {

  loadMoreBtn.addEventListener("click", () => {

    if (typeof trees === "undefined") return;

    if (!showingAllTrees) {

      renderTrees(trees.length);

      loadMoreBtn.textContent = "Show Less";

      showingAllTrees = true;

    } else {

      renderTrees();

      loadMoreBtn.textContent = "Read More Trees";

      showingAllTrees = false;

      document.getElementById("trees").scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}

/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(image => {

  image.addEventListener("click", () => {

    if (!lightbox || !lightboxImg) return;

    lightbox.style.display = "flex";

    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;
  });
});

if (closeLightbox) {

  closeLightbox.addEventListener("click", () => {

    if (lightbox) {
      lightbox.style.display = "none";
    }
  });
}

if (lightbox) {

  lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}

/* =========================
   ESC KEY CLOSE LIGHTBOX
========================= */

document.addEventListener("keydown", (e) => {

  if (e.key === "Escape" && lightbox) {
    lightbox.style.display = "none";
  }
});

/* =========================
   BACK TO TOP BUTTON
========================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (!backToTop) return;

  if (window.scrollY > 300) {

    backToTop.style.display = "block";

  } else {

    backToTop.style.display = "none";
  }
});

if (backToTop) {

  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* =========================
   CLOSE MOBILE MENU ON LINK CLICK
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    if (navLinks) {
      navLinks.classList.remove("active");
    }
  });
});

/* =========================
   WINDOW RESIZE
========================= */

window.addEventListener("resize", () => {

  if (window.innerWidth > 768 && navLinks) {
    navLinks.classList.remove("active");
  }
});

/* =========================
   SCROLL ANIMATION
========================= */

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });

}, {
  threshold: 0.1
});

document.querySelectorAll(
  ".timeline-item, .gallery-grid img"
).forEach(el => {

  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 0.6s ease";

  observer.observe(el);
});
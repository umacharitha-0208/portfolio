(function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(
        this.getAttribute("href")
      );
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    });
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    // Close mobile menu when clicking on a link
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("active");
      }
    });
  }

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Intersection Observer for section animations
  const sections = document.querySelectorAll(".section");
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Add floating animation to profile image
  const profileImage = document.querySelector(".profile-image");
  if (profileImage) {
    setInterval(() => {
      profileImage.style.transform = `translateY(${
        Math.sin(Date.now() * 0.001) * 5
      }px)`;
    }, 16);
  }

  // Add typing effect to hero tagline
  const tagline = document.querySelector(".hero .tagline");
  const originalText = tagline.textContent;
  tagline.textContent = "";
  setTimeout(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        tagline.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  }, 1000);

  // Add parallax effect to hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  });

  // Add hover effects to project cards
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Add active navigation highlighting
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
})();

// Page loading animation
window.addEventListener("load", () => {
  const loadingOverlay =
    document.getElementById("loadingOverlay");
  setTimeout(() => {
    loadingOverlay.classList.add("hide");
  }, 1000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(
      this.getAttribute("href")
    );
    const offsetTop = target.offsetTop - 80;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("active");
  }
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Back to top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

// Intersection Observer for section animations
const sections = document.querySelectorAll(".section");
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Animate skill progress bars when skills section is visible
      if (entry.target.id === "skills") {
        animateSkillBars();
      }
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

// Animate skill progress bars
function animateSkillBars() {
  const progressBars = document.querySelectorAll(
    ".skill-progress-bar"
  );
  progressBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = width + "%";
    }, Math.random() * 500);
  });
}

// Add floating animation to profile image
const profileImage = document.querySelector(".profile-image");
if (profileImage) {
  setInterval(() => {
    profileImage.style.transform = `translateY(${
      Math.sin(Date.now() * 0.001) * 5
    }px)`;
  }, 16);
}

// Add typing effect to hero tagline
const tagline = document.querySelector(".hero .tagline");
const originalText = tagline.textContent;
tagline.textContent = "";

setTimeout(() => {
  let i = 0;
  const typeWriter = () => {
    if (i < originalText.length) {
      tagline.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  typeWriter();
}, 1000);

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  const rate = scrolled * -0.5;
  hero.style.transform = `translateY(${rate}px)`;
});

// Add hover effects to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add active navigation highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Contact form submission
const contactForm = document.getElementById("contactForm");
if (contactForm) contactForm
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Create mailto link
    const mailtoLink = `mailto:umacharitha.l23@iiits.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Show success message
    alert(
      "Thank you for your message! Your default email client should open with the message pre-filled."
    );

    // Reset form
    this.reset();
  });

// Resume download function
function downloadResume() {
  // In a real implementation, this would link to an actual PDF file
  alert(
    "Resume download functionality would be implemented here. Please contact via email for the latest resume."
  );
}

// Add some interactive particles to hero section
function createParticle() {
  const particle = document.createElement("div");
  particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                pointer-events: none;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${
                  Math.random() * 3 + 2
                }s infinite linear;
            `;

  document.querySelector(".hero").appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 5000);
}

// Create particles periodically
setInterval(createParticle, 500);

// Add float animation
const style = document.createElement("style");
style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// Add intersection observer for animations
const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay =
        Math.random() * 0.5 + "s";
      entry.target.style.animationPlayState = "running";
    }
  });
});

// Observe all cards for animation
document
  .querySelectorAll(
    ".project-card, .skill-category, .certification-card, .experience-item"
  )
  .forEach((card) => {
    card.style.animationPlayState = "paused";
    animateOnScroll.observe(card);
  });

// Add mouse trail effect
let mouseTrail = [];
const maxTrailLength = 20;

document.addEventListener("mousemove", (e) => {
  mouseTrail.push({
    x: e.clientX,
    y: e.clientY,
    time: Date.now(),
  });

  if (mouseTrail.length > maxTrailLength) {
    mouseTrail.shift();
  }

  updateMouseTrail();
});

function updateMouseTrail() {
  const existingTrails =
    document.querySelectorAll(".mouse-trail");
  existingTrails.forEach((trail) => trail.remove());

  mouseTrail.forEach((point, index) => {
    const trail = document.createElement("div");
    const opacity = index / mouseTrail.length;
    const size = (index / mouseTrail.length) * 6;

    trail.className = "mouse-trail";
    trail.style.cssText = `
                    position: fixed;
                    left: ${point.x}px;
                    top: ${point.y}px;
                    width: ${size}px;
                    height: ${size}px;
                    background: rgba(0, 0, 0, ${opacity * 0.5});
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9998;
                    transform: translate(-50%, -50%);
                `;

    document.body.appendChild(trail);

    setTimeout(() => {
      if (trail.parentNode) {
        trail.remove();
      }
    }, 1000);
  });
}

// Add scroll progress indicator
const scrollProgress = document.createElement("div");
scrollProgress.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #000, #333);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
document.body.appendChild(scrollProgress);

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const docHeight =
    document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + "%";
});

// Add dynamic favicon based on scroll position
function updateFavicon() {
  const scrollPercent =
    (window.pageYOffset /
      (document.body.scrollHeight - window.innerHeight)) *
    100;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 32;
  canvas.height = 32;

  // Draw progress circle
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, 32, 32);
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(
    16,
    16,
    12,
    -Math.PI / 2,
    -Math.PI / 2 + (scrollPercent / 100) * 2 * Math.PI
  );
  ctx.stroke();

  // Update favicon
  const link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = canvas.toDataURL();
  document.getElementsByTagName("head")[0].appendChild(link);
}

window.addEventListener("scroll", updateFavicon);
updateFavicon(); // Initial call

// Add Easter egg - Konami code
let konamiCode = [];
const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.code);
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    triggerEasterEgg();
    konamiCode = [];
  }
});

function triggerEasterEgg() {
  const celebration = document.createElement("div");
  celebration.innerHTML = `
                <div style="
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(0, 0, 0, 0.9);
                    color: white;
                    padding: 2rem;
                    border-radius: 10px;
                    text-align: center;
                    z-index: 10000;
                    animation: bounceIn 0.5s ease;
                ">
                    <h2>🎉 Konami Code Activated! 🎉</h2>
                    <p>You found the secret! Thanks for exploring my portfolio thoroughly.</p>
                    <p>- Uma Charitha</p>
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        background: white;
                        color: black;
                        border: none;
                        padding: 0.5rem 1rem;
                        border-radius: 5px;
                        cursor: pointer;
                        margin-top: 1rem;
                    ">Close</button>
                </div>
            `;

  document.body.appendChild(celebration);

  // Add confetti effect
  for (let i = 0; i < 50; i++) {
    createConfetti();
  }

  setTimeout(() => {
    if (celebration.parentNode) {
      celebration.remove();
    }
  }, 10000);
}

function createConfetti() {
  const confetti = document.createElement("div");
  const colors = ["#000", "#333", "#666", "#999"];
  confetti.style.cssText = `
                position: fixed;
                top: -10px;
                left: ${Math.random() * 100}vw;
                width: 10px;
                height: 10px;
                background: ${
                  colors[
                    Math.floor(Math.random() * colors.length)
                  ]
                };
                z-index: 9999;
                animation: confettiFall ${
                  Math.random() * 2 + 2
                }s linear forwards;
            `;

  document.body.appendChild(confetti);

  setTimeout(() => {
    if (confetti.parentNode) {
      confetti.remove();
    }
  }, 4000);
}

// Add confetti animation
const confettiStyle = document.createElement("style");
confettiStyle.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
            
            @keyframes bounceIn {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                }
                50% {
                    transform: translate(-50%, -50%) scale(1.1);
                }
                100% {
                    transform: translate(-50%, -50%) scale(1);
                }
            }
        `;
document.head.appendChild(confettiStyle);

// Add print styles for resume functionality
const printStyles = document.createElement("style");
printStyles.textContent = `
            @media print {
                nav, .back-to-top, .contact-form, footer .social-links {
                    display: none !important;
                }
                
                .section {
                    break-inside: avoid;
                    page-break-inside: avoid;
                }
                
                .hero {
                    background: white !important;
                    color: black !important;
                    padding: 2rem 0 !important;
                }
                
                .project-card, .skill-category, .certification-card, .experience-item {
                    break-inside: avoid;
                    box-shadow: none !important;
                    border: 1px solid #ccc !important;
                }
                
                a {
                    color: black !important;
                    text-decoration: underline !important;
                }
            }
        `;
document.head.appendChild(printStyles);

// Add keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.altKey) {
    switch (e.key) {
      case "1":
        document
          .querySelector("#home")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "2":
        document
          .querySelector("#about")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "3":
        document
          .querySelector("#skills")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "4":
        document
          .querySelector("#projects")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "5":
        document
          .querySelector("#contact")
          .scrollIntoView({ behavior: "smooth" });
        break;
    }
  }
});

// Add accessibility improvements
document
  .querySelectorAll("a, button, .project-card, .skill-category")
  .forEach((element) => {
    element.addEventListener("focus", function () {
      this.style.outline = "3px solid #000";
      this.style.outlineOffset = "2px";
    });

    element.addEventListener("blur", function () {
      this.style.outline = "none";
    });
  });

// Add performance monitoring
window.addEventListener("load", () => {
  const loadTime = performance.now();
  console.log(`Portfolio loaded in ${Math.round(loadTime)}ms`);

  // Optional: Send analytics data
  // This would typically send data to Google Analytics or similar
});

// Initialize all components
console.log(
  "🚀 Uma Charitha's Portfolio Initialized Successfully!"
);
console.log(
  "💡 Tip: Try the Konami Code (↑↑↓↓←→←→BA) for a surprise!"
);
console.log(
  "⌨️  Use Alt+1-5 for quick navigation between sections"
);
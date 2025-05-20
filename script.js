document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".wow");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});

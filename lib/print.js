window.addEventListener("beforeprint", () => {
  // Force all collapsibles open
  document.querySelectorAll(".outline-3 > .content")
    .forEach(el => el.classList.add("active"));

  // Show all tab contents
  document.querySelectorAll(".tab-content")
    .forEach(el => el.classList.add("active"));
});

window.addEventListener("afterprint", () => {
  // Restore collapsibles to closed state
  document.querySelectorAll(".outline-3 > .content")
    .forEach(el => el.classList.remove("active"));

  // Restore tabs (keep only the selected one open)
  document.querySelectorAll(".tab-content")
    .forEach(el => {
      if (!el.classList.contains(el.dataset.defaultTab)) {
        el.classList.remove("active");
      }
    });
});

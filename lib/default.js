document.addEventListener("DOMContentLoaded", function() {
  const sections = Array.from(document.querySelectorAll("h2"));
  if (sections.length === 0) return;

  // === Build tab bar ===
  const tabBar = document.createElement("div");
  tabBar.className = "tab-bar";
  sections[0].parentElement.insertBefore(tabBar, sections[0]);

  sections.forEach((sec, idx) => {
    const btn = document.createElement("button");
    btn.textContent = sec.textContent;
    tabBar.appendChild(btn);

    // Wrap tab content
    const content = document.createElement("div");
    content.className = "tab-content";
    sec.parentNode.insertBefore(content, sec);
    content.appendChild(sec);

    let next = content.nextSibling;
    while (next && next.tagName !== "H2") {
      content.appendChild(next);
      next = content.nextSibling;
    }

    // Default: show first tab
    if (idx === 0) {
      btn.classList.add("active");
      content.classList.add("active");
    }

    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-bar button").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      content.classList.add("active");
    });
  });

  // === Collapsible Weeks (div.outline-3) ===
  document.querySelectorAll(".outline-3").forEach((collapsable) => {
    const firstHeading = collapsable.querySelector("h3");
    if (!firstHeading) return;

    // Wrap heading into clickable header
    const header = document.createElement("div");
    header.className = "header";
    header.textContent = firstHeading.textContent;
    firstHeading.style.display = "none"; // hide original h3
    collapsable.insertBefore(header, collapsable.firstChild);

    // Wrap the rest of the content
    const content = document.createElement("div");
    content.className = "content active";
    while (header.nextSibling) {
      content.appendChild(header.nextSibling);
    }
    collapsable.appendChild(content);

    header.addEventListener("click", () => {
      content.classList.toggle("active");
    });
  });
});

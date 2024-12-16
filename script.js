document.querySelectorAll("h2").forEach((header) => {
  header.addEventListener("click", () => {
    const panelId = header.getAttribute("data-target");
    const contenido = document.getElementById(panelId);
    contenido.classList.toggle("hidden");

    const icon = header.nextElementSibling;

    if (icon) {
      const isHidden = contenido.classList.contains("hidden");
      icon.src = isHidden
        ? "assets/images/icon-plus.svg"
        : "assets/images/icon-minus.svg";
    }
  }); 
});

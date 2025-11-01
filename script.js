document.addEventListener("DOMContentLoaded", function () {
  // VANTA background only for desktop
  if (window.innerWidth >= 768) {
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x0077ff,
      backgroundColor: 0x0,
      backgroundAlpha: 0.0, // rende lo sfondo trasparente per mostrare l'immagine
      points: 12.0,
      maxDistance: 22.0,
      spacing: 18.0,
    });
  }
});

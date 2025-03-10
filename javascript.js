 document.addEventListener("DOMContentLoaded", function () {
      const links = document.querySelectorAll(".nav-links a");
      const currentUrl = window.location.pathname.split("/").pop(); // Get the filename only

      links.forEach(link => {
          if (link.getAttribute("href").split("/").pop() === currentUrl) {
              link.classList.add("active");
          }
      });
  });
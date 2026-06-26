/* Hidden Voices — interactions légères
   - Surligne l'entrée du sommaire correspondant à la section visible.
   - Le défilement vers les ancres est géré en CSS (scroll-behavior: smooth).
*/
(function () {
  "use strict";

  var tocLinks = Array.prototype.slice.call(
    document.querySelectorAll(".wp-toc a")
  );
  if (!tocLinks.length) return;

  // Associe chaque lien à sa section cible
  var sections = tocLinks
    .map(function (link) {
      var id = link.getAttribute("href").replace("#", "");
      var el = document.getElementById(id);
      return el ? { link: link, el: el } : null;
    })
    .filter(Boolean);

  function setActive(id) {
    tocLinks.forEach(function (link) {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#" + id
      );
    });
  }

  // Scroll-spy via IntersectionObserver (fallback simple si indisponible)
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { observer.observe(s.el); });
  } else {
    window.addEventListener("scroll", function () {
      var top = window.scrollY + 120;
      for (var i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el.offsetTop <= top) {
          setActive(sections[i].el.id);
          break;
        }
      }
    });
  }
})();

"use strict";

var accordionTitles = document.querySelectorAll(".accordion--title");
accordionTitles.forEach(accordionTitle => {
  accordionTitle.addEventListener("click", () => {
    if (accordionTitle.classList.contains("is-open")) {
      accordionTitle.classList.remove("is-open");
    } else {
      var accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
      accordionTitlesWithIsOpen.forEach(accordionTitleWithIsOpen => {
        accordionTitleWithIsOpen.classList.remove("is-open");
      });
      accordionTitle.classList.add("is-open");
    }
  });
});
//# sourceMappingURL=accordion.js.map

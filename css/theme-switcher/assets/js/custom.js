"use strict";

document
  .querySelectorAll("input[type='radio']")
  .forEach(function(input) {
    input.onclick = function() {
      document.documentElement.classList.value = '';
      document.documentElement.classList.add(input.id);
    }
  });

/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById("addition").addEventListener("click", function () {
    // perform an addition
    alert(
      parseFloat(document.getElementById("op-one").value) +
        parseFloat(document.getElementById("op-two").value)
    );
  });

  document
    .getElementById("substraction")
    .addEventListener("click", function () {
      // perform an substraction
      alert(
        parseFloat(document.getElementById("op-one").value) -
          parseFloat(document.getElementById("op-two").value)
      );
    });

  document
    .getElementById("multiplication")
    .addEventListener("click", function () {
      // perform an multiplication
      alert(
        parseFloat(document.getElementById("op-one").value) *
          parseFloat(document.getElementById("op-two").value)
      );
    });

  document.getElementById("division").addEventListener("click", function () {
    // perform an division
    alert(
      parseFloat(document.getElementById("op-one").value) /
        parseFloat(document.getElementById("op-two").value)
    );
  });
})();

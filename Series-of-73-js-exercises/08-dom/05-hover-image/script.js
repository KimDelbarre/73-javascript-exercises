/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById("img1").addEventListener("mouseover", function () {
    alert();
    document.querySelector("data-hover").src =
      "../../_shared/img/kiss-wink-heart.svg";
  });
  let x = document.querySelector("data-hover");
  console.log(x);
  document.getElementById("img").src = "hackanm.gif";
})();

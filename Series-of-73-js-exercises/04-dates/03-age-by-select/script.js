/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  document.getElementById("run").addEventListener("click", function () {
    let d = new Date();
    let today_year = d.getFullYear();
    let today_month = d.getMonth();
    let today_day = d.getDate();

    let birth_day = document.querySelector("#dob-day").value;
    let birth_month = document.querySelector("#dob-month").value;
    let birth_year = document.querySelector("#dob-year").value;

    let age = today_year - birth_year;
    console.log(age);

    alert("your age is maybe " + age + " or maybe one year less");
    /*
    if (today_month < birth_month - 1) {
      alert("your age is" + age--);
    }
    if (birth_month - 1 == today_month && today_day < birth_day) {
      alert("your age is" + age--);
    }
    */
  });
})();

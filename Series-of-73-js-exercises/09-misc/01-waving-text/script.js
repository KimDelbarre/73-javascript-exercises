/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
  let txt = document.getElementById("target").innerHTML;
  let size = 4;
  let result;
  for (i = 0; i < txt.length; i++) {
    result += txt
      .charAt(i)
      .fontsize(Math.round(5 + 15 * (i / 10 - Math.floor(i / 10))));
  }
  console.log(result);
  document.getElementById("target").innerHTML = result;

  /*
  
  result =
    txt.charAt(0).fontsize(10) +
    txt.charAt(1).fontsize(8) +
    txt.charAt(2).fontsize(6) +
    txt.charAt(3).fontsize(4) +
    txt.charAt(4).fontsize(6) +
    txt.charAt(5).fontsize(8);
  document.getElementById("target").innerHTML = result;


  for (i = 0; i < txt.length; i++) {
    console.log(txt.charAt(i));

    result = txt.charAt(i).fontsize(size++);
  }

  txt.forEach(element => {

  }); (i = 0; i < txt.length; i++) {
    result = element.fontsize(x++);
  }

  

    // let result = txt.fontsize(size);

    let result = "";
  txt.split("").forEach(function(letter) {
    letter.fontsize(x++);
  });
  console.log(result);
  
  
  function wave {
txt.forEach(element => {

  


  */
})();

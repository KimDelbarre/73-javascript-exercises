/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  document.getElementById("run").addEventListener("click", function () {
    class Person {
      constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
      }
    }
    let me = new Person("Kim", "Delbarre");
    console.log(me);
    console.log(Object.values(me));
    let myName = me.toString();

    function Sayhello() {
      console.log("Hello, " + myName + "!");
    }

    Sayhello();
  });
})();

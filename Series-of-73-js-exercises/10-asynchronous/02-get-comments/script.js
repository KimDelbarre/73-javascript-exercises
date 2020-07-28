/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  function myCallbackFunction(error, articles) {
    if (error) {
      console.error(error);
      return;
    }

    console.log(articles);
  }

  window.lib.getPosts(myCallbackFunction);

  window.lib.getComments(id, window.lib.getPosts);
})();

// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;

    // create a reference to the ".expandButton" class.
    this.expandButton = this.article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', ()=> this.expandArticle());
  }

  expandArticle() {

    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.article.classList.toggle('article-open');
    this.article.scrollTop = 0; // scrolls back to top so content isn't showing when closed
    this.expandButton.style.position = 'relative'; //sets position to relative since box size is changing, pushes button to bottom
    this.expandButton.textContent = 'close' //sets text to close
  
    if ( this.article.className !== 'article article-open') { //checks if the article-open class is off when expand is clicked
      this.expandButton.style.position = 'absolute'; //if above is true, set postion back to absolute so button is back to original position
      this.expandButton.textContent = 'expand';//sets text back to expand
    }
  }
}
//
// class NewArticle extends Article {
//   constructor(article) {
//     super(article);
//
//   }
// }


/* START HERE:

- Select all classes named ".article" and assign that value to the articles variable.

- With your selection in place, now chain .forEach() on to the articles variable to
iterate over the articles NodeList and create a new instance of Article by passing
in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles.forEach(function(article){
  const lambdaArticle = new Article(article);
})

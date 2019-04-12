const articlesBody = document.querySelector('.articles');

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');//toggles menu open class
  articlesBody.classList.toggle('article-slide');//toggles article slide class so when menu slides in, so does body content with it
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');


// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

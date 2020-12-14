let menuOpenBurger = (function (options) {
  let button = document.querySelector(options.button);
  let menu = document.querySelector(options.overlay);
  let body = document.querySelector('body');

  const _closeMenu = function () {
    button.classList.toggle('button_container--active');
  }

  let toggleMenu = function () {
    button.classList.toggle('button_container--active');
    menu.classList.toggle('overlay--open');
    body.classList.toggle('body-active-menu');
  }


  let addListeners = function () {
    button.addEventListener('click', toggleMenu);
  };

  return {
    init: addListeners,
    toggle: toggleMenu,
  };

})({ button: '#toggle', overlay: '#overlay' });


console.log(menuOpenBurger);
menuOpenBurger.init();
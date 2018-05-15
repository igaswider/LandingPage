document.addEventListener('DOMContentLoaded', function() {

  /*hamburger event*/
  document.querySelector('.navigation__hamburger--svg').addEventListener('click', function(e) {

    document.querySelectorAll('.cls-1').forEach(element => {
      element.classList.toggle('opacity');
    });

    document.querySelectorAll('.display').forEach(element => {
      element.classList.toggle('hide');
    });

    document.querySelectorAll('.social__icon--svg').forEach(element => {
      element.classList.toggle('social__icon--changeSize');
    });

    document.querySelector('.navigation__list').classList.toggle('hidden');
    document.querySelector('body').classList.toggle('navigation__list--bg');
    document.querySelector('.social__icon').classList.toggle('navigation__list--icon');
  });

  /*rotating icon*/

  document.querySelector('.content__icon').addEventListener('click', function(e) {

    this.classList.toggle('content__icon--rotate').classList.remove('content__icon--rotate')

  });

});

if(innerWidth <= 768) {
  let switchSigns = document.querySelector('.social__more--paragraph');

  switchSigns !== null ? switchSigns.innerText = '+' : null;
}

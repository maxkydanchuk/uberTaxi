window.addEventListener('DOMContentLoaded', function() {


const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu_item');

hamburger.addEventListener('click',  () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
});

const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal');

   modalTrigger.forEach(btn => {
       btn.addEventListener('click', openModal);
   });

   function openModal (){
       modal.classList.add('show');
       modal.classList.remove('hide');
       document.body.style.overflow = 'hidden';
   }


  function closeModal (){
    modal.classList.add('hide');
    modal.classList.remove('show');
      document.body.style.overflow = '';
  }

  modal.addEventListener('click', (event) =>{
      if(event.target == modal || event.target.getAttribute('data-close') == '') {
          closeModal();
      }
  });

  document.addEventListener('keydown', (event) => {
      if(event.key == 'Escape'){
          closeModal();
      }
  });

function showModalByScroll(){
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}

window.addEventListener('scroll', showModalByScroll);


});
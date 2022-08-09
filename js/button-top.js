window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.button-top');
    scroll.classList.toggle('active', window.scrollY> 600);
  });
  
  var button = document.querySelector('.button-top')
  button.addEventListener('click', function(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
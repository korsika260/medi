const slide = new Splide( '.splide',{
  arrows: false,
  pagination: false,
} );
slide.mount();

const next = document.querySelector('.splide__next');
next.addEventListener('click',()=>{
  slide.go('+1');
});

const prev = document.querySelector('.splide__prev');
prev.addEventListener('click',()=>{
  slide.go('-1');
});

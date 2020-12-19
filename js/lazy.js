/**************************************
 * Sticky Nav
 */

window.addEventListener('scroll', () => {
    let nav = document.querySelector('.row');
    let logo = document.querySelector('.logo');
    if (nav.getBoundingClientRect().top === 0) {
        nav.style.paddingTop = .25 + 'em';
        nav.style.paddingBottom = .25 + 'em';
        nav.classList.add('add-shadow');
        logo.style.display = 'inline-block';
        logo.style.opacity = '1';
    } else {
        nav.style.paddingTop = 2 + 'em';
        nav.style.paddingBottom = 2 + 'em';
        nav.classList.remove('add-shadow');
        logo.style.display = 'none';
        logo.style.opacity = '0';
    }
})


/*************************************
 * Lazy Load
 */

let images = document.querySelectorAll('.lazy');
let cards = document.querySelectorAll('.article-list > .grid-item')

let observer = new IntersectionObserver(lazyLoad, {
    rootMargin: "100px",
    threshhold: 1.0
})

// let slideObserver = new IntersectionObserver(slideLeft, {
//     rootMargin: "50px",
//     threshhold: .75
// })

// function slideLeft(cards) {
//     cards.forEach(card => {
//         if (card.intersectionRatio > 0) {
//             card.target.classList.add('slideInLeft');
//             slideObserver.unobserve(card.target);
//         }
//     })
// }

function lazyLoad(images) {
    images.forEach(image => {
        if (image.intersectionRatio > 0) {
            image.target.src = image.target.getAttribute('data-src');
            image.target.classList.add('fadeIn')
            observer.unobserve(image.target);
        };
    });
};

images.forEach(img => {
    observer.observe(img);
})

// cards.forEach(card => {
//     slideObserver.observe(card);
// })



/**************
 * Copyright Date
 */

 const year = document.getElementById('year');
 const establishedYear = 2007;
 const currentYear = new Date();
 year.innerHTML = currentYear.getFullYear();
 



 /*******************************
  * Mobile Nav
  */

 let nav = document.querySelector('.mobile-nav .col .main-nav ul');

  document.getElementById('mobile-toggle').addEventListener('click', () => {
      nav.style.height = 100 + 'vh';
      })

document.getElementById('close').addEventListener ('click', () => {
    nav.style.height = 0 + 'px';
})


/******************************
 * Slider
 */

const slideContainer = document.querySelector(".slide-container");
let slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let end = undefined;

function start() {
 if (!end) {
   slideIndex++;
   slideContainer.style.transform = `translateX(${slideIndex * -100}%)`;
 }
 if (slideIndex >= slides.length) {
   slideIndex = slides.length;
   slideContainer.style.transform = `translateX(${slideIndex * -100}%)`;
   end = true;
   slideIndex--;
 }
 if (end && slideIndex != -1) {
   slideIndex--;
   if (slideIndex < 0) {
     slideIndex = 1;
     slideContainer.style.transform = `translateX(${slideIndex * -100}%)`;
     end = false;
   }
   slideContainer.style.transform = `translateX(${slideIndex * -100}%)`;
   
 }
}

const run = setInterval(start, 5000);

// slideContainer.addEventListener('click', () => {
//   clearInterval(run);
//   console.log('stopped')
// });


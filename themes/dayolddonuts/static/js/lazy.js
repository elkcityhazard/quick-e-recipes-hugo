/**************************************
 * Sticky Nav
 */

window.addEventListener('scroll', () => {
    let nav = document.querySelector('.row');
    if (nav.getBoundingClientRect().top === 0) {
        nav.style.paddingTop = .25 + 'em';
        nav.style.paddingBottom = .25 + 'em';
        nav.classList.add('add-shadow');
    } else {
        nav.style.paddingTop = 2 + 'em';
        nav.style.paddingBottom = 2 + 'em';
        nav.classList.remove('add-shadow');
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

let slideObserver = new IntersectionObserver(slideLeft, {
    rootMargin: "50px",
    threshhold: .75
})

function slideLeft(cards) {
    cards.forEach(card => {
        if (card.intersectionRatio > 0) {
            card.target.classList.add('slideInLeft');
            slideObserver.unobserve(card.target);
        }
    })
}

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

cards.forEach(card => {
    slideObserver.observe(card);
})
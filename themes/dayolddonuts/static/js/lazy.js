let images = document.querySelectorAll('.lazy');

let observer = new IntersectionObserver(lazyLoad, {
    rootMargin: "100px",
    threshhold: 1.0
})


function lazyLoad(images) {
    images.forEach(image => {
        if (image.intersectionRatio > 0) {
            console.log(image);
            image.target.src = image.target.getAttribute('data-src');
            image.target.classList.add('fadeIn')
            observer.unobserve(image.target);
        };
    });
};

images.forEach(img => {
    observer.observe(img);
})

    import slider  from './modules/slider';

window.addEventListener('DOMContentLoaded', function() {

    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev', 
        totalCounter: '#total', 
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner'
    });
});

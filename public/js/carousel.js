let carousel_ul = document.querySelector('.slider_ul_tracker');
let carousel_li =  carousel_ul.children;
let carousel_width = carousel_li[0].getBoundingClientRect().width;
let slide_right_btn = document.querySelector('.slide_right_btn');
let slide_left_btn = document.querySelector('.slide_left_btn');


// Arranging  The  Element in the Slide
Array.from(carousel_li).forEach((item, index) => {
    item.style.left = carousel_width * index + 'px';
    
});

const mySlider = (carousel_ul,  targetSlide, nextSlide)=>{
    carousel_ul.style.transform ='translate(-'+ nextSlide.style.left  +')'
    targetSlide.classList.remove('current_slider');
    nextSlide.classList.add('current_slider');

}


slide_right_btn.addEventListener('click', (e)=>{
    let targetSlide = carousel_ul.querySelector('.current_slider');
    let nextSlide = targetSlide.nextElementSibling;
    
    if(nextSlide == null){
      console.log(nextSlide)
        return
     }
    mySlider(carousel_ul, targetSlide, nextSlide)
    

})


slide_left_btn.addEventListener('click', (e)=>{
    let targetSlide = carousel_ul.querySelector('.current_slider');
    let nextSlide = targetSlide.previousElementSibling;
    mySlider(carousel_ul, targetSlide, nextSlide);
    

})

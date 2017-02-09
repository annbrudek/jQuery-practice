$(document).ready(function(){
    var currentIndex = 0,
        slides = $('#carousel-inner ul li'),
        slideAmount = slides.length;
    
        function changeSlides() {
            var slide = $('#carousel-inner ul li').eq(currentIndex);
            slides.hide();
            slide.css('display', 'inline-block');
}
    var autoChange = setInterval(function() {
        currentIndex++;
        if (currentIndex > slideAmount - 1) {
            currentIndex = 0;
}
        changeSlides();
    }, 3000);
    
    $('#carousel-outer .nextLink').click(function(){
        clearInterval(autoChange);
        currentIndex++;
        if (currentIndex > slideAmount - 1){
            currentIndex = 0;
}
        changeSlides();
});
    $('#carousel-outer .previousLink').click(function(){
        clearInterval(autoChange);
        currentIndex--;
        if (currentIndex < 0){
            currentIndex = slideAmount - 1;
}
        changeSlides();
});
     $('button').each(function(index, elem){
         
        $(elem).click(function(){
            $('.btn-active').removeClass('btn-active');
            $(this).addClass('btn-active').removeClass('btn-inactive'); 
          
        });
        
    });
    
});
    
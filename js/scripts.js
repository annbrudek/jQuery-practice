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
        var currentBtn = $('.btn-active');
        var nextBtn = currentBtn.next();
        
        if (currentIndex > slideAmount - 1) {
            currentIndex = 0;
            nextBtn = $('button').first();
        }
           currentBtn.removeClass('btn-active');
            nextBtn.addClass('btn-active');
        changeSlides();
    }, 3000);
    
    $('#carousel-outer .nextLink').click(function(){
        clearInterval(autoChange);
        currentIndex++;
        var currentBtn = $('.btn-active');
        var nextBtn = currentBtn.next();
            
        if (currentIndex > slideAmount - 1){
            currentIndex = 0;
            nextBtn = $('button').first();
        } 
            
        currentBtn.removeClass('btn-active');
            nextBtn.addClass('btn-active');
        
        changeSlides();
    });
    
    $('#carousel-outer .previousLink').click(function(){
        clearInterval(autoChange);
        currentIndex--;
        var currentBtn = $('.btn-active');
        var prevBtn = currentBtn.prev();
        
        if (currentIndex < 0){
            currentIndex = slideAmount - 1;
            prevBtn = $('button').last();
        } 
            currentBtn.removeClass('btn-active');
            prevBtn.addClass('btn-active');
        
        changeSlides();
    });
    
    
     $('button').each(function(index, elem){
        $(elem).click(function(){
            $('.btn-active').removeClass('btn-active');
            $(this).addClass('btn-active');
            var bulletIndex = $('button').index(this);
            clearInterval(autoChange);
            currentIndex = bulletIndex;
            bulletIndex++;
            if (bulletIndex > slideAmount - 1){
                bulletIndex = 0;
            }       
            changeSlides();
        }); 
        
    }); 
    
});
    
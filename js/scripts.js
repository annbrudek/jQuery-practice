$(document).ready(function(){
    var carouselList = $('#carousel-inner ul');
    setInterval(changeSlide, 3000); 
    
    function changeSlide(){
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    };
    
    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    };
    
    $('.nextLink').click(function(){
        
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
    };
        
});
    
   //Previous nie dziala
    
    /*$('.previousLink').click(function(){
        
        carouselList.animate({'marginLeft': 400}, 500, moveFirstSlide);

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft: 0});
};
        
}); */ 
    
    $('button').each(function(index, elem){
        $(elem).click(function(){
            $('.btn-active').removeClass('btn-active');
            $(this).addClass('btn-active').removeClass('btn-inactive');
           
        });
        
    });
});
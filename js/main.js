// 제이쿼리 시작

// 햄버거를 클릭했을 때 할일
//side 클래스에 addClass('ri')

//닫기X 버튼을 눌렀을 때
// side 클래스에 removeClass('ri')

$(document).ready(function(){
    $('.goa').click(function(){
        $('.side').addClass('ri')
        $('.all').css({
            'opacity': '1',
            'visibility': 'visible'
        })
        $('.menubg').css({
            'display' : 'block'
        })
    })
    $('.button').click(function(){
        $('.side').removeClass('ri')
        $('.all').css({
            'opacity': '0',
            'visibility': 'hidden'
        })
       
    // $('.container').click(function(){
    //     $('.side').removeClass('ri')
    //     $('.all').css({
    //         'opacity' : '0' ,
    //         'visibility' : 'hidden',
    //     })
    // })    
    $('.menubg').click(function(){
        $('.side').removeClass('ri')
        $('.all').css({
            'opacity': '0',
            'visibility': 'hidden'
        })
        // $('.menubg').css({
        //     'display' : 'none'
        // })
        // $('.goa').click(function(){
        //     $('.menubg').css({
        //         'display' : 'none',
        //     })
        // })
    })
    })
    
        $(".bx-slide").bxSlider({
            slideWidth: 472,
            slideHeight: 472,
            slideMargin: 210,
            auto: true,
            maxSlides:3,
            minSlides:1,
            moveSlides: 1
        })
        $('.bx-slide-top').bxSlider({
            mode: 'fade',
            auto: true,
            slideWidth: 992,
            slideHeight:1322.66, 
            autoControls:true,
            controls:false,
            InfinityLoop:true,
        })
        
        $('.bx-slide-btn').bxSlider({
            slideWidth: 62,
            slideHeight: 62,
            maxSlides: 1,
            minSlides: 1,
            pager:false,
            controls:false,
            InfinityLoop:true,
            auto:true,
        })
      
     
})
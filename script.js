document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.menu').style.display='block';

    
});

//Add and remove active class
$(document).on('click','ul li',function(){
    $(this).addClass('active').siblings().removeClass('active')
});
//navtoggle

/*function hideAndShowSideMenu(){
    var checkInput = document.querySelector('#check');
    var links= document.querySelector
}
*/


 


    


// Data in both lang
var arrLang = {
    'en': {
        'nav-home' : 'Home' 
        
    },

    'bg': {
        'nav-home' : 'Начало' 
    }
};


// Multilang function
$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});




$(document).ready(function(){
    $( "a" ).click( function (event){
        event.preventDefault()

        var gato= this.hash;
        $("html").animate({
            scrollTop: $(gato).offset().top- 74,
        },
        800

        );
});
});

  $('[data-toggle="tooltip"]').tooltip()


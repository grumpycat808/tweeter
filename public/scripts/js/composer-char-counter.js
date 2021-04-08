$(document).ready(function(){
    let counter;
    $('textarea').on('change keyup paste', function(e){
        
        counter = 140 - $(this).val().length;

        if(counter < 0) {
            $('output').addClass('danger');
        } else {
            $('output').removeClass('danger');
        }
        $('output').text(counter);
    })
})
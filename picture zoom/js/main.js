$(document).ready(function() {
    $('#file').change(function () {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
           $('#pic').attr("src", reader.result);
           $('#pic').addClass('thereisPic');
        }
        if (file) {
            reader.readAsDataURL(file);
        }
    });

    $('#pic').hover(function() {
        if($('#pic').hasClass('thereisPic')){
            $(this).addClass('transition');
        }
    }, function() {
        $(this).removeClass('transition');
    });


});
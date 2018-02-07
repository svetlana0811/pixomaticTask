$(document).ready(function() {
    var randomColorChange = '#'+(Math.floor(Math.random()*16777216)&0xFFFFFF).toString(16);

    $('#addingButton').on('click' , function(){
        if($('#writeaValue').val() == ''){
            $('.itemsForWriting').append("<h4 style = 'color:red'> Please Write some name </h4>");
        }
        else {
          $('#listItems').append('<p class = "items" style= "padding:0 5px; ">'+$('#writeaValue').val() +'  </p>').css({"color":randomColorChange});
        }
    })

      $( "#listItems" ).sortable();   
    $( "#listItems" ).disableSelection();



});
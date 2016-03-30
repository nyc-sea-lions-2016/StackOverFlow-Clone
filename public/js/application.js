$(document).ready(function() {
  $('#new_comment_button').on('click', function(event){
    event.preventDefault();
    $('#new_comment_form').show()
    // $('#new_comment_button').addClass('hidden')
    $(this).hide()

  })
});

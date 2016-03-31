$(document).ready(function() {
  $('#new_comment_button').on('click', function(event){
    event.preventDefault();
    $('#new_comment_form').show()
    // $('#new_comment_button').addClass('hidden')
    $(this).hide()
  })

  $('#new_answer_button').on('click', function(event){
    event.preventDefault();
    $('#new_answer_form').show()
    // $('#new_comment_button').addClass('hidden')
    $(this).hide()
  })

  $('#new_comment_form').on('submit', function(event){
    event.preventDefault();
    var info = $(event.target)
      $.ajax({
        type: 'POST',
        url: '/comments',
        data: info.serialize()
      }).done(function(response){
        $('#question_comment').append('<li>' + response + '</li>');
        //Clear text field
      })
  })

  $('#new_comment_for_answer_button').on('click', function(event) {
    event.preventDefault();
    $('#new_comment_for_answer_form').show();
    $(this).hide();
  });


  $('body').on('submit','#user_answer',function(event){
    event.preventDefault();
    var target = $(event.target);
    $.ajax({
      type: 'POST',
      url: target.attr('action'),
      data: target.serialize()
    }).done(function(response){
      $('#user_answer').trigger('reset')
      $('#answer').append(response)

    })
  })


});

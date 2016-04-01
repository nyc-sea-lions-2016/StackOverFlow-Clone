$(document).ready(function() {
  $('#new_comment_button').on('click', function(event){
    event.preventDefault();
    $('#new_comment_form').show()
    $(this).hide()
  })

  $('#new_answer_button').on('click', function(event){
    event.preventDefault();
    $('#new_answer_form').show()
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
      })
  })

  $('#new_comment_for_answer_button').on('click', function(event) {
    event.preventDefault();
    $('#new_comment_for_answer_form').show();
    $(this).hide();
  })


  $('.vote-button').on('click', function(event){
    event.preventDefault();
    $.ajax({
      url: $(event.target).attr('href'),
      method: 'post',
      dataType: $(event.target).serialize()
    }).done(function(response){
      $('.points').html(response)
    })
  })


  });







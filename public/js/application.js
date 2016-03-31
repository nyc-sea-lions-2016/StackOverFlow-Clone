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
        $('#new_comment_form').find('textarea[name="comment[content]"]').val('');
      })
  })

  $('#answer_comment').on('click', '.new_comment_for_answer_button', function(event) { // Make into class
    event.preventDefault();
    var commentForAnswerButton = $(event.target)
    commentForAnswerButton.hide();
    var formId = commentForAnswerButton.attr('id').split('/').slice(-1)[0]
    debugger;
  });


  $('#answer_comment').on('submit', '.new_comment_for_answer_form', function(event) {
    event.preventDefault();
    var info = $(event.target)
    $.ajax({
      type: 'POST',
      url: '/answers/comments',
      data: info.serialize()
    }).done(function(response){
    $('#answer_comment').append('<li>' + response + '</li>')
    $('#new_comment_for_answer_form').find('textarea[name="comment[content]"]').val('');
  });

});

  //Create

});

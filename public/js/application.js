$(document).ready(function() {

  //Questions

  $('#question_comment').on('click', '.new_comment_button', function(event){
    event.preventDefault();
    $(event.target).hide()
    var formId = $(event.target).data().id
    $('#' + 'question-' + formId).show();
  })

  $('#question_comment').on('submit','.new_comment_form', function(event){
    event.preventDefault();
      $.ajax({
        type: 'POST',
        url: '/comments',
        data: $(event.target).serialize()
      }).done(function(response){
        $('#question_comment').prepend('<li>' + response + '</li>');
        $(event.target)..hide().siblings('button').show();
      })
  })

  //ANSWERS

  $('.answer_comment').on('click', '.new_comment_for_answer_button', function(event) { // Make into class
    event.preventDefault();
    $(event.target).hide();
    var formId = $(event.target).data().id
    $('#' + 'answer-' + formId).show();
  });


  $('.answer_comment').on('submit', '.new_comment_for_answer_form', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/answers/comments',
      data: $(event.target).serialize()
    }).done(function(response){
    $('.answer_comment').prepend('<li>' + response + '</li>');
    $(event.target).hide().siblings('button').show();
  });

});

});

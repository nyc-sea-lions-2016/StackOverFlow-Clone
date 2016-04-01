$(document).ready(function() {

  //Questions

  $('#question_comment').on('click', '.new_comment_button', function(event){
    event.preventDefault();
    var commentForQuestionButton = $(event.target)
    commentForQuestionButton.hide()
    var formId = $(event.target).data().id
    $('#' + 'question-' + formId).show();
  })

  $('#question_comment').on('submit','.new_comment_form', function(event){
    event.preventDefault();
    var info = $(event.target)
      $.ajax({
        type: 'POST',
        url: '/comments',
        data: info.serialize()
      }).done(function(response){
        $('#question_comment').prepend('<li>' + response + '</li>');
        $(event.target).find('textarea[name="comment[content]"]').val('');
      })
  })


  //ANSWERS

  $('#answer_comment').on('click', '.new_comment_for_answer_button', function(event) { // Make into class
    event.preventDefault();
    var commentForAnswerButton = $(event.target)
    commentForAnswerButton.hide();
    var formId = $(event.target).data().id
    $('#' + 'answer-' + formId).show();
  });


  $('#answer_comment').on('submit', '.new_comment_for_answer_form', function(event) {
    event.preventDefault();
    var info = $(event.target)
    $.ajax({
      type: 'POST',
      url: '/answers/comments',
      data: info.serialize()
    }).done(function(response){
    $('#answer_comment').prepend('<li>' + response + '</li>')
    $(event.target).find('textarea[name="comment[content]"]').val('');
    debugger;
  });

});

});

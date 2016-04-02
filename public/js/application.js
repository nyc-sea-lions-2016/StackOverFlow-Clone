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
        $(event.target).siblings().show();
      })
  })

  //COMMENTS FOR ANSWERS

  $('.answer_container').on('click', '.new_comment_for_answer_button', function(event) { // Make into class
    event.preventDefault();
    $(event.target).hide();
    var formId = $(event.target).data().id
    $('#' + 'answer-' + formId).show();
    // debugger;
  });


  $('.answer_container').on('submit', '.new_comment_for_answer_form', function(event) {
    event.preventDefault();
    debugger;
    $.ajax({
      type: 'POST',
      url: '/answers/comments',
      data: $(event.target).serialize()
    }).done(function(response){
    $('.answer_comment').last().append(response);
    $(event.target).siblings().show();
  });
});

//CREATING ANSWERS

  $('#user_answer').on('submit', function(event){
    event.preventDefault();
    var questionId = $(event.target).attr('action').split('/')[2];
    $.ajax({
      type: 'POST',
      url: '/questions/' + questionId + '/answers/new',
      data: $(event.target).serialize()
    }).done(function(response){
      $('#user_answer').trigger('reset');
      $('.answer_container').append(response);
      // debugger;
    })
  });

//VOTES AJAX

 $('.vote-button').on('click', function(event){
     event.preventDefault();
     $.ajax({
       url: $(event.target).attr('href'),
       method: 'post',
       dataType: $(event.target).serialize()
     }).done(function(response){
       console.log(response)
       $('.points').html(response)
     })
   })


});

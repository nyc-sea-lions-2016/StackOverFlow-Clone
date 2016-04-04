$(document).ready(function() {

  //Questions

  $('#question_comment').on('click', '.new_comment_button', function(event){
    event.preventDefault();
    $(event.target).hide()
    var formId = $(event.target).data().id
    $('#' + 'question-' + formId).show();
    $('.new_comment_form').trigger('reset');
  })

  $('#question_comment').on('submit','.new_comment_form', function(event){
    event.preventDefault();
      $.ajax({
        type: 'POST',
        url: '/comments',
        data: $(event.target).serialize()
      }).done(function(response){
        $('.comment-list').append('<li>' + response + '</li>');
        $(event.target).hide().siblings().show();
        $('#new_answer_form').hide();
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
    $.ajax({
      type: 'POST',
      url: '/answers/comments',
      data: $(event.target).serialize()
    }).done(function(response){
      $(event.target).hide().siblings('.new_comment_for_answer_button').show();
      $(event.target).siblings('.comment-listing').append(response);
      debugger;
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
      $('.answer_list').append(response);
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
       $('.question-points').html(response)

     })
   })

//Delete Answer Button Ajax

  $('.answer_container').on('click', '.delete-button', function(event){
    event.preventDefault();
    $.ajax({
      type: 'DELETE',
      url: $(event.target).parents().attr('action')
    }).done(function(response){
      $(event.target).parents('.individual_answer_container').remove();
    });
  });

});

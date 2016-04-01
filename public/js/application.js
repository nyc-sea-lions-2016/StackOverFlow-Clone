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
  })


  // AJAXify voting
  // $('.vote-button').on('click', function(event){
  //   event.preventDefault();
      // debugger;

    // $.ajax({
    //   url: $(event.target).attr('href'),
    //   method: 'post'
    // })


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






  // $('#new_comment_for_answer_form').on('submit', function(event) {
  //   event.preventDefault();
  //   var info = $(event.target);
  //   $.ajax({
  //     type: 'POST'
  //     url: '/answers/:id/comments'

  //   })

  // });

// });

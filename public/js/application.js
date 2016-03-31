$(document).ready(function() {
  $('#new_comment_button').on('click', function(event){
    event.preventDefault();
    $('#new_comment_form').show()
    // $('#new_comment_button').addClass('hidden')
    $(this).hide()
  })

  // $('#new_answer_button').on('click', function(event){
  //   event.preventDefault();
  //   $('#new_answer_form').show()
  //   // $('#new_comment_button').addClass('hidden')
  //   $(this).hide()

  //   // var url = $(this).attr('action')
  //   // var id = event.target.action.slice(-1);
  //   // var info = $(this).serialize();
  //   //   $.ajax({
  //   //     type: 'POST',
  //   //     url: '/comments',
  //   //     data: info

  //   //   }).done(function(response){
  //   //     debugger;
  //   //     $('#question_comment').append(response);
  //   //   })
  // })

  // $('#new_comment_form').on('submit', function(event){
  //   event.preventDefault();
  //   // var url = $(this).attr('action')
  //   var id = event.target.action.slice(-1);
  //   var info = $(this).serialize();
  //     $.ajax({
  //       type: 'POST',
  //       url: '/comments',
  //       data: info

  //     }).done(function(response){
  //       debugger;
  //       $('#question_comment').append('<li>' + response + '</li>');
  //     })
  // })
});

$(document).ready(function(){
  $("#new_comment_button").click(function(){
    $('#new_comment_button').hide();
    $('.comments').append("<form id='new_comment'><textarea class='comment' name='comment' required></textarea><input id='authorName' name='author'><input type='submit' class='add-comment'></form>");
    $('#new_comment').show();
    $('.add-comment').submit(function(){
      const comment = $('textarea[name="comment"]').val();
      const author = $('input[name="author"]').val();
      $('#comment_list').append("<li>" + comment + "<span class='author'>" + author + "</span></li>");
      $('#new_comment').hide();
      $('#new_comment_button').show();
      event.preventDefault();
    })
  })
})

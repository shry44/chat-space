$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
      `<div class="chat-main__message-list__post">
        <div class="chat-main__message-list__post__box">
          <div class="chat-main__message-list__post__box__name">
            ${message.user_name}
          </div>
          <div class="chat-main__message-list__post__box__time">
            ${message.created_at}
          </div>
        </div>
        <div class="chat-main__message-list__post__message">
          ${message.content}
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
      `<div class="chat-main__message-list__post">
        <div class="chat-main__message-list__post__box">
          <div class="chat-main__message-list__post__box__name">
            ${message.user_name}
          </div>
          <div class="chat-main__message-list__post__box__time">
            ${message.created_at}
          </div>
        </div>
        <div class="chat-main__message-list__post__message">
          ${message.content}
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
    })
  })
});
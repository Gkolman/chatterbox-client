var MessageView = {

  $chat: $('.chat'),

  render: _.template(`
      <div class="chat">
      <div class= "username <%= username %>" onclick="Friends.toggleStatus('<%= username %>')"> <%= username %> </div>
      <div class="text"> <%=text%> </div>
      </div>
    `),


};
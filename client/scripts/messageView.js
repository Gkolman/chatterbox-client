var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class='<%= username %>' onclick="addOrRemoveFriend('<%= username %>')"> <%= username %> </div>
        <div class="text"> <%=text%> </div>
      </div>
    `),


};
const conversationsDiv = document.getElementById('conversations');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// sample conversations data
const conversations = [
  {
    id: 1,
    message: 'Hello, how are you?',
    user: 'John'
  },
  {
    id: 2,
    message: 'I am good, thanks!',
    user: 'Jane'
  },
  // add more conversations here
];

// display conversations
conversations.forEach(conversation => {
  const conversationHTML = `
    <div class="message">
      <span>${conversation.user}:</span>
      <p>${conversation.message}</p>
    </div>
  `;
  conversationsDiv.innerHTML += conversationHTML;
});

// add event listener to send button
sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();
  if (message!== '') {
    // send message to server (using AJAX or WebSocket)
    sendMessageToServer(message);
    messageInput.value = '';
  }
});

// function to send message to server
function sendMessageToServer(message) {
  // TO DO: implement server-side logic to store and broadcast message
  console.log(`Sending message to server: ${message}`);
  // for now, just add message to conversations div
  const newConversation = {
    id: conversations.length + 1,
    message: message,
    user: 'You'
  };
  conversations.push(newConversation);
  const conversationHTML = `
    <div class="message">
      <span>You:</span>
      <p>${message}</p>
    </div>
  `;
  conversationsDiv.innerHTML += conversationHTML;
  conversationsDiv.scrollTop = conversationsDiv.scrollHeight;
}
import React, { useState } from 'react';
import axios from 'axios';

const ChatInput = ({ user, chatId }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    if (!message) return;

    const newMessage = {
      user_id: user.id,
      chat_id: chatId,
      message_content: message,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await axios.post(`/users/${user.id}/chats/${chatId}/messages`, newMessage);
      console.log('Message sent:', response.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setMessage('');
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        value={message}
        placeholder="Type your message here..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="send-button" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;

import React, { useState } from 'react';

function ChatWindow({ chat }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Envía el mensaje a través de la API y agrega el mensaje a la lista de mensajes
    // Luego, limpia el input
  }

  return (
    <div className="chat-window h-full w-full">
      <h2 className="text-2xl font-bold py-4 px-6">{/*chat.chat_name*/}</h2>
      <div className="message-list h-96 overflow-y-auto">
        {/*messages.map(message => (
          <div key={message.id} className={`message ${message.sender === chat.user_id ? 'outgoing' : 'incoming'}`}>
            <p>{message.text}</p>
          </div>
        ))*/}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center justify-between px-6 py-2">
        <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} className="flex-1 py-2 px-3 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        <button type="submit" className="ml-2 py-2 px-4 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatWindow;

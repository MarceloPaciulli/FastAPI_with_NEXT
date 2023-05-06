import React, { useState } from "react";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import "../app/globals.css";

const ChatsPage = () => {
  const [activeChat, setActiveChat] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/3 bg-gray-800">
        <ChatList setActiveChat={setActiveChat} />
      </div>
      <div className="w-2/3 bg-white">
        <ChatWindow activeChat={activeChat} />
        <ChatInput activeChat={activeChat} />
      </div>
    </div>
  );
};

export default ChatsPage;

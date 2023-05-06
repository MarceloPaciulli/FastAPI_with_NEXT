import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ChatList() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener el token de autenticación del local storage
    const token = localStorage.getItem('token');

    // Hacer solicitud GET al endpoint de auth para obtener el user_id
    axios.get(`http://localhost:8000/auth_id?token=${token}`)
      .then(response => {
        const user_id = response.data.user_id;
        // Hacer solicitud GET al endpoint de chats para obtener los chats del usuario
        axios.get(`http://localhost:8000/users/${user_id}/chats`)
          .then(response => {
            setChats(response.data);
            setLoading(false);
          })
          .catch(error => {
            console.error(error);
            setLoading(false);
          });
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-800 text-gray-100 px-4 py-6 h-screen">
      <h2 className="text-lg font-medium mb-4">Chats</h2>
      <ul className="space-y-2">
        {chats.map(chat => (
          <li key={chat.id}>
          <button>
          <div className="block px-2 py-1 rounded-md hover:bg-gray-700" 
          style={{ backgroundColor: "#3b3b3", padding: "5px", maxWidth: "200px", 
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {chat.chat_description}
          </div>
          </button>
        </li>
        
        ))}
      </ul>
    </div>
  );
}

export default ChatList;

import React from 'react';
import './css/ChatMessage.css';

const ChatMessage = ({ message }) => {
  // Split multiline text into an array of lines
  const lines = message.text.split('\n');

  return (
    <div id='chatmessages'>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};


export default ChatMessage;

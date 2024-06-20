// src/components/ChatMessage.js
import React from 'react';

const ChatMessage = ({ message }) => {
    return (
        <div className="chat-message">
            <strong>{message.user}:</strong> {message.text}
        </div>
    );
};

export default ChatMessage;

import React, { useState, useEffect } from 'react';
import { fetchChatHistory, sendMessage } from '../api/RestApi';
import ChatMessage from './ChatMessage';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        const loadChatHistory = async () => {
            const chatHistory = await fetchChatHistory();
            setMessages(chatHistory);
        };
        loadChatHistory();
    }, []);

    const handleSend = async (e) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;
        const response = await sendMessage(newMessage);
        setMessages([...messages, response]);
        setNewMessage('');
    };

    return (
        <table>
            <h2>Chat</h2>
            <div className="chat-history">
                {messages.map((message, index) => (
                    <ChatMessage key={index} message={message} />
                ))}
            </div>
            <form onSubmit={handleSend}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    required
                />
                <button type="submit">Send</button>
            </form>
        </table>
    );
};

export default Chat;
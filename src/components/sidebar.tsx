// Sidebar.tsx
import React, { FC } from 'react';
import './css/sidebar.css';

interface SidebarProps {
    onNewChat: () => void;
    setActiveChat: (index: number) => void;
    chats: any[]; // Ideally, you should define a type for what a 'chat' is
}


const Sidebar: FC<SidebarProps> = ({ onNewChat, setActiveChat, chats }) => {
    return (
        <div className="sidebar">
            <div className="new-chat-box">
                <button onClick={onNewChat}>New Chat</button>
            </div>
            {chats.map((chat, index) => (
                <div key={index} className="chat-box">
                    <button onClick={() => setActiveChat(index)}>
                        Chat {index + 1}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;

'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface Message {
  content: string;
  isUser: boolean;
  timestamp: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      content: inputMessage,
      isUser: true,
      timestamp: new Date().toLocaleString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).replace(/\//g, '.')
    };

    setMessages([newMessage, ...messages]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '發生錯誤');
      }

      const aiResponse: Message = {
        content: data.response,
        isUser: false,
        timestamp: new Date().toLocaleString('zh-TW', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).replace(/\//g, '.')
      };

      setMessages(prev => [aiResponse, ...prev]);
    } catch (error) {
      alert(error instanceof Error ? error.message : '發生未知錯誤');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="輸入訊息..."
          className={styles.input}
          disabled={isLoading}
        />
        <button 
          onClick={handleSendMessage} 
          className={styles.sendButton}
          disabled={isLoading}
        >
          {isLoading ? '處理中...' : '送出'}
        </button>
      </div>
      {isLoading && (
        <div className={styles.loadingContainer}>
          <FontAwesomeIcon icon={faSpinner} spin className={styles.spinner} />
          <span className={styles.loadingText}>AI客服正在思考中，請稍候...</span>
        </div>
      )}
      <div className={styles.chatContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.messageWrapper} ${
              message.isUser ? styles.userMessage : styles.aiMessage
            }`}
          >
            {!message.isUser && (
              <img 
                src="/images/ai.jpeg" 
                alt="AI Avatar" 
                className={styles.avatar}
              />
            )}
            <div className={styles.messageBubble}>
              <div className={styles.messageContent}>{message.content}</div>
              <div className={styles.timestamp}>{message.timestamp}</div>
            </div>
            {message.isUser && (
              <img 
                src="/images/user.jpeg" 
                alt="User Avatar" 
                className={styles.avatar}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

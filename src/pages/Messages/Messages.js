import React, { useState } from 'react';
import './Messages.css';

export default function Messages() {
  const [showForm, setShowForm] = useState(false);
  const [messages, setMessages] = useState([]);
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new message object
    const newMessage = {
      sender,
      recipient,
      subject,
      text,
    };

    // Add the new message to the messages array
    setMessages([...messages, newMessage]);

    // Clear the form inputs
    setSender('');
    setRecipient('');
    setSubject('');
    setText('');

    // Reset showForm to false
    setShowForm(false);
  };

  return (
    <div>
      <h3 className="PageTitle">My Messages</h3>

      {!showForm ? (
        <button onClick={() => setShowForm(true)}>Send a Message</button>
      ) : (
        <form className= "MessagesForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="sender">Sender:</label>
            <input
              type="text"
              id="sender"
              name="sender"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="recipient">Recipient:</label>
            <input
              type="text"
              id="recipient"
              name="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="text">Message Text:</label>
            <textarea
              id="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      )}

      {messages.length > 0 ? (
        <div className="MessageHistory">
          <h4>Message History</h4>
          <ul>
            
            {messages.map((message, index) => (
              <div>
              <hr></hr>
              <li key={index}>
                <strong>Sender:</strong> {message.sender}<br />
                <strong>Recipient:</strong> {message.recipient}<br />
                <strong>Subject:</strong> {message.subject}<br />
                <strong>Text:</strong> {message.text}
              </li>
              <hr></hr>
              </div>
            
            ))}
            
          </ul>
        </div>
      ) : (
        <p>No messages at this moment.</p>
      )}
    </div>
  );
}

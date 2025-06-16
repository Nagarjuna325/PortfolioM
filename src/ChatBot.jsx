import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (!input.trim()) return;
//     setMessages([...messages, { sender: "user", text: input }]);
//     setInput("");
//     // Here you would call your AI backend and add the bot's response to messages
//     setTimeout(() => {
//       setMessages((msgs) => [
//         ...msgs,
//         { sender: "bot", text: "This is a placeholder response." }
//       ]);
//     }, 1000);
//   };

const handleSend = async () => {
  if (!input.trim()) return;
  setMessages([...messages, { sender: "user", text: input }]);
  const userInput = input;
  setInput("");
  try {
    // const res = await fetch("http://127.0.0.1:8000/chat", {
    const res = await fetch("https://portfoliomb-4is2.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userInput }),
    });
    const data = await res.json();
    setMessages(msgs => [
      ...msgs,
      { sender: "bot", text: data.answer || data.error || "No response." }
    ]);
  } catch (err) {
    setMessages(msgs => [
      ...msgs,
      { sender: "bot", text: "Error contacting AI agent." }
    ]);
  }
};

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", border: "1px solid #ccc", borderRadius: 8, padding: 16 }}>
      <div style={{ height: 300, overflowY: "auto", marginBottom: 8 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "8px 0" }}>
            <span style={{
              display: "inline-block",
              padding: "8px 12px",
              borderRadius: 16,
              background: msg.sender === "user" ? "#007bff" : "#eee",
              color: msg.sender === "user" ? "#fff" : "#333"
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <input
          style={{ flex: 1, padding: 8, borderRadius: 16, border: "1px solid #ccc" }}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
        />
        <button onClick={handleSend} style={{ marginLeft: 8, padding: "8px 16px", borderRadius: 16 }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
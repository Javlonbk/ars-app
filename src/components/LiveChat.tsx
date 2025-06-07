import React, { useState } from "react";
import { FaCommentDots } from "react-icons/fa";

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="bg-white border border-accent rounded-lg shadow-lg p-4 w-64">
          <h4 className="text-primary font-bold mb-2">Live Chat</h4>
          <p className="text-sm text-dark mb-2">How can we help you today?</p>
          <textarea
            className="w-full border border-gray-300 rounded p-2 text-sm mb-2"
            rows={2}
            placeholder="Type your message..."
          />
          <button className="bg-accent text-white px-4 py-1 rounded text-sm">
            Send
          </button>
        </div>
      )}
      <button
        className="bg-accent text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaCommentDots size={40} />
      </button>
    </div>
  );
};

export default LiveChat;

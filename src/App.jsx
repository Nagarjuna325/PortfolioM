import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import ChatBot from "./ChatBot";
const App = () => {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          </div>
        {/* Floating ChatBot widget */}
        <div style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000
        }}>
          {!chatOpen && (
            <button
              onClick={() => setChatOpen(true)}
              className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-lg hover:bg-tertiary transition"
              aria-label="Open chat"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </button>
          )}
          {chatOpen && (
            <div className="relative">
              <button
                onClick={() => setChatOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                aria-label="Close chat"
              >
                ✕
              </button>
              <ChatBot />
            </div>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Chat.js
const { useState, useRef } = React;

const Chat = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Mykee Blogger', time: '10:40 AM', incoming: true, isSimple: true },
    { id: 2, text: 'Who be this', time: '10:56 AM', incoming: false, isSimple: true },
    { id: 3, text: 'Am Into logistics and delivery...\nHow about you Mykee...', time: '11:02 AM', incoming: true, isSimple: false },
    { id: 4, text: 'Am Into logistics and delivery...\nHow about you Mykee...', time: '11:15 AM', incoming: false, isSimple: false }
  ]);
  const inputRef = useRef(null);

  const handleInput = (e) => setInputText(e.target.textContent);
  
  const handleSend = () => {
    const trimmedText = inputText.trim();
    if (trimmedText) {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
      const isMultiLine = trimmedText.includes('\n') || trimmedText.length > 30;

      setMessages([...messages, {
        id: messages.length + 1,
        text: trimmedText,
        time: timeStr,
        incoming: false,
        isSimple: !isMultiLine
      }]);

      if (inputRef.current) {
        inputRef.current.textContent = '';
        setInputText('');
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      fontFamily: 'system-ui, sans-serif',
      backgroundImage: 'url("https://i.ibb.co/HfvQJj50/Screenshot-20250730-222749.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
      backgroundSize: 'cover',
      backgroundColor: 'transparent'
    }}>
      <Header />

      {/* Date Badge */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
        <div style={{
          background: 'rgba(255,255,255,0.9)',
          padding: '6px 16px',
          borderRadius: '9999px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(10px)',
          position: 'fixed',
          top: '62px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9
        }}>
          <span style={{ color: '#000', fontWeight: '500', fontSize: '14px' }}>September 24</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div style={{ padding: '8px 16px', maxWidth: '600px', margin: '0 auto', paddingTop: '24px', paddingBottom: '80px' }}>
        {messages.map((msg) => (
          msg.incoming ? <InboxMe key={msg.id} msg={msg} /> : <Inbox key={msg.id} msg={msg} />
        ))}
      </div>

      {/* Input Wrapper */}
      <div style={{
        padding: '10px 85px 10px 20px',
        background: '#f0f0f0',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
      }}>
        <div style={{
          background: 'white',
          borderRadius: '10px',
          padding: '8px 14px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '10px',
          position: 'relative',
          overflow: 'visible'
        }}>
          <svg style={{
            position: 'absolute',
            bottom: 0,
            right: '-10px',
            width: '20px',
            height: '22px',
            zIndex: 1,
            pointerEvents: 'none'
          }} viewBox="0 0 20 22" fill="white">
            <path d="M 0 0 Q 20 0, 20 22 L 0 22 Z" />
          </svg>
          
          <i className="fa-regular fa-face-smile" style={{ fontSize: '20px', color: '#919191', cursor: 'pointer', marginBottom: '4px' }}></i>
          
          <div 
            ref={inputRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleInput}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              lineHeight: '1.4',
              padding: '2px 0',
              minHeight: '28px',
              maxHeight: '120px',
              overflowY: 'auto'
            }}
            data-placeholder="Type a message..."
          />
          
          <i className="fa-solid fa-paperclip" style={{ fontSize: '20px', color: '#919191', cursor: 'pointer', marginBottom: '4px' }}></i>
        </div>
      </div>

      {/* Mic/Send Button */}
      <div 
        style={{
          position: 'fixed',
          right: '16px',
          bottom: '5px',
          width: '54px',
          height: '54px',
          background: '#749cbf',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 3px 8px rgba(0,0,0,0.25)',
          cursor: 'pointer',
          zIndex: 10
        }}
        onClick={handleSend}
      >
        {inputText.trim() ? (
          <svg viewBox="0 -0.5 21 21" style={{ width: '24px', height: '24px' }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.61258 9L0.05132 1.31623C-0.22718 0.48074 0.63218 -0.28074 1.42809 0.09626L20.4281 9.0963C21.1906 9.4575 21.1906 10.5425 20.4281 10.9037L1.42809 19.9037C0.63218 20.2807 -0.22718 19.5193 0.05132 18.6838L2.61258 11H8.9873C9.5396 11 9.9873 10.5523 9.9873 10C9.9873 9.4477 9.5396 9 8.9873 9H2.61258z" fill="#fff"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', fill: '#fff' }}>
            <path d="M7.25 7C7.25 4.37665 9.37665 2.25 12 2.25C14.6234 2.25 16.75 4.37665 16.75 7V11C16.75 13.6234 14.6234 15.75 12 15.75C9.37665 15.75 7.25 13.6234 7.25 11V7Z" fill="#fff"/>
            <path d="M5.75 10C5.75 9.58579 5.41421 9.25 5 9.25C4.58579 9.25 4.25 9.58579 4.25 10V11C4.25 15.0272 7.3217 18.3369 11.25 18.7142V21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21V18.7142C16.6783 18.3369 19.75 15.0272 19.75 11V10C19.75 9.58579 19.4142 9.25 19 9.25C18.58579 9.25 18.25 9.58579 18.25 10V11C18.25 14.4518 15.4518 17.25 12 17.25C8.54822 17.25 5.75 14.4518 5.75 11V10Z" fill="#fff"/>
          </svg>
        )}
      </div>
    </div>
  );
};


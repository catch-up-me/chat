// Inbox.js
const Inbox = ({ msg }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
      <div style={{ position: 'relative', maxWidth: msg.isSimple ? '70%' : '85%' }}>
        <div style={{
          position: 'absolute',
          right: '-7px',
          bottom: '6px',
          width: 0,
          height: 0,
          borderRight: '8px solid transparent',
          borderBottom: '13px solid #dcf8c6',
          zIndex: 1
        }} />
        <div style={{
          backgroundColor: '#dcf8c6',
          padding: msg.isSimple ? '8px 12px' : '6px 10px 4px 10px',
          borderRadius: '7.5px',
          borderBottomRightRadius: '0',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          display: msg.isSimple ? 'inline-flex' : 'inline-block',
          alignItems: msg.isSimple ? 'baseline' : 'initial',
          gap: msg.isSimple ? '8px' : '0',
          position: 'relative'
        }}>
          {msg.isSimple ? (
            <>
              <span style={{ color: '#000', fontSize: '15px' }}>{msg.text}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ color: '#5a9e5f', fontSize: '12px' }}>{msg.time}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#5a9e5f">
                  <path d="M17.5821 6.95711C17.9726 6.56658 17.9726 5.93342 17.5821 5.54289C17.1916 5.15237 16.5584 5.15237 16.1679 5.54289L5.54545 16.1653L1.70711 12.327C1.31658 11.9365 0.683417 11.9365 0.292893 12.327C-0.0976311 12.7175 -0.097631 13.3507 0.292893 13.7412L4.83835 18.2866C5.22887 18.6772 5.86204 18.6772 6.25256 18.2866L17.5821 6.95711Z"/>
                  <path d="M23.5821 6.95711C23.9726 6.56658 23.9726 5.93342 23.5821 5.54289C23.1915 5.15237 22.5584 5.15237 22.1678 5.54289L10.8383 16.8724C10.4478 17.263 10.4478 17.8961 10.8383 18.2866C11.2288 18.6772 11.862 18.6772 12.2525 18.2866L23.5821 6.95711Z"/>
                </svg>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '6px' }}>
              <span style={{ color: '#000', fontSize: '15px', lineHeight: '1.35', whiteSpace: 'pre-line', flex: '1 1 auto' }}>{msg.text}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap', marginLeft: 'auto' }}>
                <span style={{ color: '#5a9e5f', fontSize: '12px' }}>{msg.time}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#5a9e5f">
                  <path d="M17.5821 6.95711C17.9726 6.56658 17.9726 5.93342 17.5821 5.54289C17.1916 5.15237 16.5584 5.15237 16.1679 5.54289L5.54545 16.1653L1.70711 12.327C1.31658 11.9365 0.683417 11.9365 0.292893 12.327C-0.0976311 12.7175 -0.097631 13.3507 0.292893 13.7412L4.83835 18.2866C5.22887 18.6772 5.86204 18.6772 6.25256 18.2866L17.5821 6.95711Z"/>
                  <path d="M23.5821 6.95711C23.9726 6.56658 23.9726 5.93342 23.5821 5.54289C23.1915 5.15237 22.5584 5.15237 22.1678 5.54289L10.8383 16.8724C10.4478 17.263 10.4478 17.8961 10.8383 18.2866C11.2288 18.6772 11.862 18.6772 12.2525 18.2866L23.5821 6.95711Z"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



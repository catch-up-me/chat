// InboxMe.js
const InboxMe = ({ msg }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '12px' }}>
      <div style={{ position: 'relative', maxWidth: msg.isSimple ? '70%' : '85%' }}>
        <div style={{
          position: 'absolute',
          left: '-7px',
          bottom: '6px',
          width: 0,
          height: 0,
          borderLeft: '8px solid transparent',
          borderBottom: '13px solid #fff',
          zIndex: 1
        }} />
        <div style={{
          backgroundColor: '#fff',
          padding: msg.isSimple ? '8px 12px' : '6px 10px 4px 10px',
          borderRadius: '7.5px',
          borderBottomLeftRadius: '0',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          display: msg.isSimple ? 'inline-flex' : 'inline-block',
          alignItems: msg.isSimple ? 'baseline' : 'initial',
          gap: msg.isSimple ? '8px' : '0',
          position: 'relative'
        }}>
          {msg.isSimple ? (
            <>
              <span style={{ color: '#000', fontSize: '15px' }}>{msg.text}</span>
              <span style={{ color: '#999', fontSize: '12px' }}>{msg.time}</span>
            </>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '6px' }}>
              <span style={{ color: '#000', fontSize: '15px', lineHeight: '1.35', whiteSpace: 'pre-line', flex: '1 1 auto' }}>{msg.text}</span>
              <span style={{ color: '#999', fontSize: '12px', whiteSpace: 'nowrap', marginLeft: 'auto' }}>{msg.time}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



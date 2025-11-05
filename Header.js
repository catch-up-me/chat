// Header.js
const ArrowLeft = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const MoreVertical = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

const Header = () => {
  return (
    <div style={{
      backgroundColor: '#fff',
      color: '#000',
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <ArrowLeft size={22} />
        </button>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          backgroundColor: '#ff9800',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: '600',
          fontSize: '16px'
        }}>SM</div>
        <div>
          <h1 style={{ fontWeight: '600', fontSize: '16px', margin: 0 }}>Sweet Mum 2</h1>
          <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>last seen recently</p>
        </div>
      </div>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
        <MoreVertical size={22} />
      </button>
    </div>
  );
};

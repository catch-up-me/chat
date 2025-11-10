// story-popup.js
const { useState, useEffect, useRef } = React;

function NavigationBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showStory, setShowStory] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDistance, setDragDistance] = useState(0);
  const [startY, setStartY] = useState(0);
  const isClosing = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const cur = window.scrollY;
      if (cur > lastScrollY && cur > 5) setIsScrolled(true);
      else if (cur < lastScrollY && cur < 5) setIsScrolled(false);
      setLastScrollY(cur);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  const openStory = () => {
    setShowStory(true);
    isClosing.current = false;
    setDragDistance(0);
    setIsDragging(false);
  };

  const closeStory = () => {
    if (isClosing.current) return;
    isClosing.current = true;
    setShowStory(false);
    setTimeout(() => {
      isClosing.current = false;
    }, 300);
  };

  const handleTouchStart = (e) => {
    if (!showStory) return;
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
    setDragDistance(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !showStory) return;
    e.preventDefault();
    const currentY = e.touches[0].clientY;
    const distance = currentY - startY;
    if (distance > 0) {
      setDragDistance(distance);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging || !showStory) return;

    if (dragDistance > 150) {
      closeStory();
    } else {
      setDragDistance(0);
    }
    setIsDragging(false);
  };

  const preventTap = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Header */}
      <div className="header-container">
        <div className="top-navbar">
          <svg className="messages-icon" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#749cbf"/>
          </svg>
          <h1 className={isScrolled ? 'visible' : ''}>Messages</h1>

          <div className={`stories-collapsed ${isScrolled ? 'moved' : ''}`}>
            <div className="story-item-collapsed" onClick={openStory}>
              <div className="story-ring-collapsed">
                <div className="story-ring-inner-collapsed">
                  <div className="story-avatar-text-collapsed">M</div>
                </div>
              </div>
            </div>
            <div className="story-item-collapsed" onClick={openStory}>
              <div className="story-ring-collapsed">
                <div className="story-ring-inner-collapsed">
                  <img src="https://i.ibb.co/C5b875C6/Screenshot-20250904-050841.jpg" alt="VaVia" className="story-avatar-collapsed"/>
                </div>
              </div>
            </div>
          </div>

          <div className="add-button"><i className="fas fa-search"></i></div>
        </div>

        {/* Expanded Stories */}
        <div className={`stories-expanded ${isScrolled ? 'visible' : ''}`}>
          <div className="stories-wrapper">
            <div className="story-item" onClick={openStory}>
              <div className="story-ring">
                <div className="story-ring-inner">
                  <div className="story-avatar-text">M</div>
                </div>
              </div>
              <div className="story-label">My story</div>
            </div>
            <div className="story-item" onClick={openStory}>
              <div className="story-ring multi-story">
                <div className="story-ring-inner">
                  <img src="https://i.ibb.co/C5b875C6/Screenshot-20250904-050841.jpg" alt="VaVia" className="story-avatar"/>
                </div>
              </div>
              <div className="story-label">VaVia</div>
            </div>
          </div>
        </div>

        {/* Nav + Messages */}
        <div className="nav-container">
          <div className="nav-bar">
            <div className={`nav-item ${activeIndex===0?'active':''}`} onClick={()=>setActiveIndex(0)}><i className="far fa-clock"></i></div>
            <div className={`nav-item ${activeIndex===1?'active':''}`} onClick={()=>setActiveIndex(1)}><i className="fas fa-user-friends"></i></div>
            <div className={`nav-item ${activeIndex===2?'active':''}`} onClick={()=>setActiveIndex(2)}><i className="fas fa-list"></i></div>
          </div>
          <div className="bottom-border">
            <div className="active-indicator" style={{left:`${activeIndex*33.333}%`}}></div>
          </div>

          <div className="message-item">
            <div className="message-avatar">DS</div>
            <div className="message-content">
              <div className="message-header">
                <div className="message-name">Daddy Steve</div>
                <div className="message-date">Oct 27</div>
              </div>
              <div className="message-preview">How are you doing</div>
            </div>
          </div>
          <div className="message-item">
            <div className="message-avatar">
              <img src="https://i.ibb.co/C5b875C6/Screenshot-20250904-050841.jpg" alt="VaVia" style={{width:'100%',height:'100%',borderRadius:'50%',objectFit:'cover'}}/>
            </div>
            <div className="message-content">
              <div className="message-header">
                <div className="message-name">VaVia</div>
                <div className="message-date">Oct 25</div>
              </div>
              <div className="message-preview">See you tomorrow!</div>
            </div>
          </div>
        </div>
      </div>

      <div className={`content-spacer ${isScrolled?'expanded':'collapsed'}`}></div>

      {/* FIXED BLACK POPUP – NO MOVEMENT */}
      {showStory && (
        <div
          className={`fixed-story-overlay ${isClosing.current ? 'closing' : ''}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={preventTap}
        >
          {/* Future content goes here – stays fixed */}
        </div>
      )}
    </>
  );
}

// Render App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavigationBar />);

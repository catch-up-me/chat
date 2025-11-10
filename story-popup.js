// story-popup.js
import React, { useState } from 'https://unpkg.com/react@18/umd/react.development.js';

export function StoryPopup({ onClose }) {
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchMove = (e) => {
    if (isDragging) {
      const y = e.touches[0].clientY;
      if (y > 0) setDragY(y);
    }
  };
  const handleTouchEnd = () => {
    if (dragY > 80) onClose();
    else setDragY(0);
    setIsDragging(false);
  };

  return (
    <div
      className="story-viewer-overlay"
      style={{
        transform: isDragging ? `translateY(${dragY}px)` : 'translateY(0)',
        transition: isDragging ? 'none' : 'transform 0.3s ease',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="story-viewer-content">
        <div className="story-viewer-header">
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        {/* Empty black screen */}
      </div>

      <style jsx>{`
        .story-viewer-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #000;
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .story-viewer-content {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .story-viewer-header {
          position: absolute;
          top: 0; left: 0; right: 0;
          padding: 16px;
          background: linear-gradient(180deg, rgba(0,0,0,.4), rgba(0,0,0,.2) 50%, transparent);
          z-index: 10;
          display: flex;
          justify-content: flex-end;
        }
        .close-btn {
          background: none;
          border: none;
          color: #fff;
          font-size: 24px;
          cursor: pointer;
        }
        .close-btn:hover { opacity: .7; }
      `}</style>
    </div>
  );
}

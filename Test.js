<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Telegram Header</title>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    const { useState } = React;

    // Lucide Icons as React components
    const ArrowLeft = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19-7-7 7-7"/>
        <path d="M19 12H5"/>
      </svg>
    );

    const MoreVertical = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"/>
        <circle cx="12" cy="5" r="1"/>
        <circle cx="12" cy="19" r="1"/>
      </svg>
    );

    function TelegramHeader() {
      return (
        <div className="min-h-screen" style={{
          backgroundImage: 'url("https://i.ibb.co/HfvQJj50/Screenshot-20250730-222749.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="flex items-center justify-between px-2 py-2 bg-white shadow-sm">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex items-center flex-1 mx-2">
              <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">DS</span>
              </div>

              <div className="ml-2 flex-1 min-w-0">
                <h2 className="text-base font-semibold text-gray-900 truncate">
                  Daddy Steve
                </h2>
                <p className="text-xs text-gray-500 truncate">
                  last seen recently
                </p>
              </div>
            </div>

            <button className="p-1 hover:bg-gray-100 rounded-full">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<TelegramHeader />);
  </script>
</body>
</html>

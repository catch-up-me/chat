const { useState } = React;

/* ---------- ICONS ---------- */
const ArrowLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
    </svg>
);

const MoreVertical = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>
    </svg>
);

/* ---------- HEADER ---------- */
function ChatHeader({stickyDate}) {
    return (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 pt-[env(safe-area-inset-top)]">
            <div className="flex items-center justify-between px-3 py-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><ArrowLeft/></button>
                <div className="flex items-center flex-1 mx-3">
                    <div className="w-11 h-11 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-medium text-base">DS</span>
                    </div>
                    <div className="ml-3 flex-1 min-w-0">
                        <h1 className="text-gray-900 font-medium text-base leading-tight">Daddy Steve</h1>
                        <p className="text-gray-500 text-sm leading-tight">last seen within a week</p>
                    </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors"><MoreVertical/></button>
            </div>

            <div className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-200 pointer-events-none ${stickyDate?'opacity-100':'opacity-0'}`}
                 style={{bottom:'-32px'}}>
                <div className="px-4 rounded-full flex items-center shadow-sm" style={{backgroundColor:'#749cbf',minHeight:'26px',height:'26px'}}>
                    <span className="text-white text-xs font-medium" style={{lineHeight:'1'}}>{stickyDate||''}</span>
                </div>
            </div>
        </div>
    );
}

window.ChatHeader = ChatHeader;


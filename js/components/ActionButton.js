// Action Button Component for the XTRM-9000 Fruit Analyzer

const ActionButton = ({
  runAnalysis, analyzing, completed, getThemeClasses,
  ultraMode, scanMode, rainbowMode, haxxorMode
}) => {
  return (
    <div className="text-center h-20 flex items-center justify-center">
      <button
        onClick={runAnalysis}
        className={`px-8 py-4 rounded-lg font-bold text-lg 
          ${analyzing ? 'bg-red-700 hover:bg-red-600 border-red-500' : 
           completed ? 'bg-blue-700 hover:bg-blue-600 border-blue-500' : 
           getThemeClasses().button + ' border-' + getThemeClasses().accent.replace('border-', '')
          } 
          transition-colors border-2 
          ${ultraMode ? 'animate-pulse shadow-lg' : ''}
          ${scanMode === 'DIMENSIONAL' ? 'backdrop-blur-sm' : ''}
          ${rainbowMode ? 'bg-gradient-to-r from-red-600 via-yellow-600 to-blue-600 border-white' : ''}
          ${haxxorMode ? 'bg-black text-green-500 border-green-500 font-mono' : ''}`}
        style={Object.assign({},
          ultraMode ? {boxShadow: '0 0 15px currentColor'} : {},
          rainbowMode ? {backgroundSize: '200% 100%', animation: 'gradient 3s ease infinite'} : {},
          haxxorMode ? {textShadow: '0 0 5px #00ff00'} : {}
        )}
      >
        {analyzing ? 
          (ultraMode ? '⚡ ABORT ULTRA ANALYSIS ⚡' : 
           rainbowMode ? '🌈 ABORT RAINBOW SCAN 🌈' :
           haxxorMode ? '4B0RT H4XX0R 4N4LYS1S' :
           scanMode !== 'STANDARD' ? `ABORT ${scanMode} SCAN` : 'ABORT QUANTUM ANALYSIS') : 
         completed ? 
          (ultraMode ? '🔄 RESET QUANTUM CORE 🔄' : 
           rainbowMode ? '🔄 RESET CHROMATIC ENGINE 🔄' :
           haxxorMode ? 'R3S3T SYST3M C0R3' :
           scanMode !== 'STANDARD' ? `RESET ${scanMode} SCANNER` : 'RESET SYSTEM') : 
         (ultraMode ? '🚀 INITIATE ULTRA ANALYSIS 🚀' : 
          rainbowMode ? '🌈 ENGAGE RAINBOW SCAN 🌈' :
          haxxorMode ? 'L4UNCH H4XX0R 4N4LYS1S' :
          scanMode !== 'STANDARD' ? `INITIATE ${scanMode} SCAN` : 'INITIATE QUANTUM ANALYSIS')}
      </button>
    </div>
  );
};
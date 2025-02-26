// Mode controls for the XTRM-9000 Fruit Analyzer

const ModeControls = ({ 
  ultraMode, toggleUltraMode, 
  scanMode, toggleScanMode, 
  rainbowMode, toggleRainbowMode, 
  haxxorMode, toggleHaxxorMode,
  analyzing
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
      <button onClick={toggleUltraMode} disabled={analyzing} 
              className={`px-2 py-1 rounded text-xs ${ultraMode ? 'bg-purple-700 text-white' : 'bg-gray-700 text-gray-300'}`}>
        {ultraMode ? '🔥 ULTRA MODE 🔥' : 'ULTRA MODE'}
      </button>
      
      <button onClick={toggleScanMode} disabled={analyzing} 
              className={`px-2 py-1 rounded text-xs ${scanMode !== 'STANDARD' ? 'bg-cyan-700 text-white' : 'bg-gray-700 text-gray-300'}`}>
        {scanMode} SCAN
      </button>
      
      <button onClick={toggleRainbowMode} disabled={analyzing} 
              className={`px-2 py-1 rounded text-xs ${rainbowMode ? 'bg-pink-600 text-white' : 'bg-gray-700 text-gray-300'}`}>
        {rainbowMode ? '🌈 RAINBOW ON 🌈' : 'RAINBOW MODE'}
      </button>
      
      <button onClick={toggleHaxxorMode} disabled={analyzing} 
              className={`px-2 py-1 rounded text-xs ${haxxorMode ? 'bg-green-700 text-white' : 'bg-gray-700 text-gray-300'}`}>
        {haxxorMode ? 'H4XX0R M0D3' : 'HACKER MODE'}
      </button>
    </div>
  );
};
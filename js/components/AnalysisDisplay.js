// Analysis Display for the XTRM-9000 Fruit Analyzer

const AnalysisDisplay = ({
  progress, getThemeClasses, statusMessage, alertLevel,
  ultraMode, haxxorMode, glitchEffect, fruit, letterToCount, letterCount,
  completed, currentLetterIndex, scanMode, rainbowMode, codecracker,
  getTheme, getCurrentFruitEmoji
}) => {
  return (
    <div className="mb-6">
      <div className="bg-black rounded-lg p-3 border-2 border-gray-700 relative overflow-hidden min-h-[200px] md:min-h-[300px]">
        {/* Progress bar with animated gradient */}
        <div className="mb-4 bg-gray-900 rounded-full h-5 overflow-hidden border border-gray-700">
          <div 
            className={`h-full ${
              alertLevel === 0 ? `${ultraMode || scanMode !== 'STANDARD' || rainbowMode ? 'bg-gradient-to-r ' + getThemeClasses().barColor : getThemeClasses().barColor}` : 
              alertLevel === 1 ? 'bg-yellow-500' : 
              'bg-red-600'
            } transition-all duration-300 flex items-center justify-center text-xs font-bold`}
            style={{ width: `${progress}%` }}
          >
            {progress > 10 && `${Math.round(progress)}%`}
          </div>
        </div>
        
        {/* Status display */}
        <div className={`mb-4 p-3 text-center font-bold ${
          alertLevel === 0 ? 'text-blue-400' : 
          alertLevel === 1 ? 'text-yellow-500' : 
          'text-red-500 animate-pulse'
        } ${ultraMode ? 'text-lg' : ''} ${haxxorMode ? 'font-mono' : ''}`}
        style={Object.assign({},
          ultraMode ? {textShadow: '0 0 10px currentColor'} : {},
          glitchEffect ? {textShadow: '2px 0 0 rgba(255,0,0,0.5), -2px 0 0 rgba(0,255,255,0.5)'} : {},
          haxxorMode ? {letterSpacing: '1px'} : {}
        )}>
          {haxxorMode ? statusMessage.replace(/[aeios]/gi, function(m) { 
            return {'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5', 
                    'A': '4', 'E': '3', 'I': '1', 'O': '0', 'S': '5'}[m];
          }) : statusMessage}
        </div>
        
        {/* Character visualization with advanced effects */}
        <div className={`mb-4 ${getThemeClasses().panel} p-3 rounded border ${getThemeClasses().accent}`}>
          <div className="flex justify-between mb-2">
            <div className="text-gray-400">CHARACTER ANALYSIS</div>
            <div className={getThemeClasses().text}>
              {scanMode !== 'STANDARD' ? `${scanMode} MODE` : (ultraMode ? 'ULTRA POWER' : 'STANDARD MODE')}
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center">
            {fruit.split('').map((letter, index) => (
              <div 
                key={index} 
                className={`text-lg font-mono p-2 m-1 border-2 rounded-md ${
                  currentLetterIndex === index ? 'border-yellow-400 bg-yellow-900 text-white animate-pulse shadow-md shadow-yellow-900/50' : 
                  (completed && letter.toLowerCase() === letterToCount.toLowerCase()) ? 
                    `border-green-500 bg-green-900 text-white shadow-md shadow-green-500/50 ${rainbowMode ? 'animate-rainbow' : codecracker ? 'animate-pulse' : ''}` : 
                  index < currentLetterIndex ? 'border-gray-600 bg-gray-800 text-gray-300' : 
                  'border-gray-700 bg-gray-900 text-gray-500'
                }`}
                style={Object.assign({},
                  (rainbowMode && completed && letter.toLowerCase() === letterToCount.toLowerCase()) ? 
                    {animation: 'letterRainbow 2s infinite'} : {},
                  (scanMode === 'DIMENSIONAL' && currentLetterIndex === index) ?
                    {transform: `scale(1.2) rotate(${Math.sin(Date.now() / 500) * 10}deg)`} : {}
                )}
              >
                {haxxorMode && letter.match(/[aeios]/i) ? 
                  {'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5', 
                   'A': '4', 'E': '3', 'I': '1', 'O': '0', 'S': '5'}[letter] || letter : 
                 letter}
              </div>
            ))}
          </div>
        </div>
        
        {/* Results display with effects */}
        {completed && (
          <div className={`p-4 rounded-lg text-center font-bold text-xl ${getTheme().bg} mb-4 border-2 ${getTheme().text.replace('text-', 'border-')} 
            ${ultraMode ? 'animate-pulse shadow-lg shadow-current' : 'shadow-md'} ${getTheme().glow ? getTheme().glow : ''} 
            ${rainbowMode ? 'animate-rainbow bg-gradient-to-r from-red-900 via-yellow-900 to-blue-900' : ''}
            ${haxxorMode ? 'bg-black border-green-500 text-green-500 font-mono' : ''}
            ${scanMode === 'DIMENSIONAL' ? 'animate-float' : ''}
            ${scanMode === 'SUBATOMIC' ? 'backdrop-blur-sm' : ''}`}
            style={Object.assign({},
              ultraMode ? {animation: 'pulse 1.5s infinite'} : {},
              rainbowMode ? {backgroundSize: '200% 100%', animation: 'gradient 3s ease infinite'} : {},
              haxxorMode ? {textShadow: '0 0 5px #00ff00'} : {},
              scanMode === 'DIMENSIONAL' ? {animation: 'float 3s ease-in-out infinite'} : {}
            )}>
            <span className={`${getTheme().text} ${haxxorMode ? 'text-green-500' : ''} ${rainbowMode ? 'text-white' : ''}`}>
              {getCurrentFruitEmoji()} {letterCount} instances of '{letterToCount}' found in {haxxorMode ? fruit.replace(/[aeios]/gi, function(m) { 
                return {'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5', 
                        'A': '4', 'E': '3', 'I': '1', 'O': '0', 'S': '5'}[m];
              }) : fruit}
            </span>
            
            <div className="text-sm mt-2 text-white opacity-80">
              Analysis complete with {ultraMode ? '⚡ULTRA' : scanMode !== 'STANDARD' ? `${scanMode}` : '✨standard'} 
              {rainbowMode ? ' CHROMATIC' : ''} 
              {haxxorMode ? ' H4XX0R' : ''} quantum precision
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
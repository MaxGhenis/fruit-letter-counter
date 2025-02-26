// Control panel for the XTRM-9000 Fruit Analyzer

const ControlPanel = ({ 
  getThemeClasses, fruit, handleFruitChange, fruitOptions, getCurrentFruitEmoji,
  letterToCount, handleLetterChange, analyzing, Cpu, Zap
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className={`${getThemeClasses().panel} p-4 rounded-lg border ${getThemeClasses().accent}`}>
        <h3 className={`text-lg font-semibold mb-4 ${getThemeClasses().text} flex items-center`}>
          <Cpu className="mr-2" size={18} />
          Specimen Configuration {getCurrentFruitEmoji()}
        </h3>
        
        <div className="mb-4">
          <label className="block mb-2 text-gray-300">Select Fruit Specimen</label>
          <select 
            value={fruit}
            onChange={handleFruitChange}
            disabled={analyzing}
            className={`w-full bg-gray-800 text-white p-2 rounded border ${getThemeClasses().accent}`}
          >
            {fruitOptions.map(option => (
              <option key={option.name} value={option.name}>
                {option.emoji} {option.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 text-gray-300">Character to Analyze</label>
          <input
            type="text"
            value={letterToCount}
            onChange={handleLetterChange}
            disabled={analyzing}
            maxLength={1}
            className={`w-full bg-gray-800 text-white p-2 rounded border ${getThemeClasses().accent}`}
          />
        </div>
      </div>
      
      <div className={`${getThemeClasses().panel} p-4 rounded-lg border ${getThemeClasses().accent}`}>
        <h3 className={`text-lg font-semibold mb-4 ${getThemeClasses().text} flex items-center`}>
          <Zap className="mr-2" size={18} />
          System Status
        </h3>
        
        {/* Status indicators */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`bg-gray-800 p-2 rounded text-sm border ${getThemeClasses().accent}`}>
            <div className="text-gray-400 mb-1">QUANTUM STABILITY</div>
            <div className="text-lg font-bold text-green-500">
              {analyzing ? (false ? 'UNSTABLE ⚠️' : 'NOMINAL 📊') : 'STABLE ✓'}
            </div>
          </div>
          
          <div className={`bg-gray-800 p-2 rounded text-sm border ${getThemeClasses().accent}`}>
            <div className="text-gray-400 mb-1">SECURITY STATUS</div>
            <div className="text-lg font-bold text-green-500">
              SECURE 🔒
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Main application for the XTRM-9000 Fruit Analyzer

// Using React from global scope
const { useState, useEffect } = React;

// Simple icon components with emoji
const AlertCircle = ({ className }) => <span className={className}>⚠️</span>;
const Zap = ({ className }) => <span className={className}>⚡</span>;
const Cpu = ({ className }) => <span className={className}>💻</span>;

// Main App Component
const XTRM9000FruitAnalyzer = () => {
  // Core state variables
  const [fruit, setFruit] = useState('strawberry');
  const [letterToCount, setLetterToCount] = useState('r');
  const [letterCount, setLetterCount] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('SYSTEM IDLE');
  const [alertLevel, setAlertLevel] = useState(0);
  const [dangerPulse, setDangerPulse] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const [statusLog, setStatusLog] = useState(['XTRM-9000 ONLINE', 'AWAITING COMMAND']);
  
  // Special effects
  const [pulseEffect, setPulseEffect] = useState(false);
  const [quantumFluctuation, setQuantumFluctuation] = useState(0);
  const [rotationEffect, setRotationEffect] = useState(0);
  const [scanSound, setScanSound] = useState(false);
  const [particleEffect, setParticleEffect] = useState(false);
  const [particles, setParticles] = useState([]);
  
  // Mode toggles
  const [ultraMode, setUltraMode] = useState(false);
  const [powerSetting, setPowerSetting] = useState('STANDARD');
  const [scanMode, setScanMode] = useState('STANDARD');
  const [rainbowMode, setRainbowMode] = useState(false);
  const [rainbowHue, setRainbowHue] = useState(0);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [glitchText, setGlitchText] = useState('');
  const [scanlineEffect, setScanlineEffect] = useState(false);
  const [hologramEffect, setHologramEffect] = useState(false);
  const [fruitExploding, setFruitExploding] = useState(false);
  const [secretCodeMode, setSecretCodeMode] = useState(false);
  const [secretCode, setSecretCode] = useState('');
  const [haxxorMode, setHaxxorMode] = useState(false);
  const [codecracker, setCodecracker] = useState(false);
  
  // Get current fruit emoji
  const getCurrentFruitEmoji = () => {
    const fruitObj = fruitOptions.find(f => f.name === fruit);
    return fruitObj ? fruitObj.emoji : '🍓';
  };

  // Get theme for selected fruit
  const getTheme = () => {
    return fruitThemes[fruit] || fruitThemes['strawberry'];
  };
  
  // Helper function to get theme classes
  const getThemeClasses = () => {
    if (rainbowMode) {
      return {
        panel: 'bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900',
        accent: 'border-pink-500',
        text: 'text-pink-400',
        button: 'bg-pink-800 hover:bg-pink-700',
        barColor: 'from-indigo-600 via-purple-600 to-pink-600'
      };
    }
    
    if (haxxorMode) {
      return {
        panel: 'bg-black',
        accent: 'border-green-500',
        text: 'text-green-500',
        button: 'bg-green-900 hover:bg-green-800',
        barColor: 'bg-green-700'
      };
    }
    
    if (scanMode === 'DIMENSIONAL') {
      return {
        panel: 'bg-indigo-950',
        accent: 'border-indigo-700',
        text: 'text-indigo-400',
        button: 'bg-indigo-800 hover:bg-indigo-700',
        barColor: 'from-indigo-800 to-purple-600'
      };
    }
    
    if (scanMode === 'SUBATOMIC') {
      return {
        panel: 'bg-violet-950',
        accent: 'border-violet-700',
        text: 'text-violet-400',
        button: 'bg-violet-800 hover:bg-violet-700',
        barColor: 'from-violet-800 to-fuchsia-600'
      };
    }
    
    if (scanMode === 'QUANTUM') {
      return {
        panel: 'bg-sky-950',
        accent: 'border-sky-700',
        text: 'text-sky-400',
        button: 'bg-sky-800 hover:bg-sky-700',
        barColor: 'from-sky-800 to-cyan-600'
      };
    }
    
    if (scanMode === 'HYPER') {
      return {
        panel: 'bg-amber-950',
        accent: 'border-amber-700',
        text: 'text-amber-400',
        button: 'bg-amber-800 hover:bg-amber-700',
        barColor: 'from-amber-800 to-orange-600'
      };
    }
    
    if (ultraMode) {
      return {
        panel: 'bg-fuchsia-950',
        accent: 'border-fuchsia-700',
        text: 'text-fuchsia-400',
        button: 'bg-fuchsia-800 hover:bg-fuchsia-700',
        barColor: 'from-fuchsia-800 to-pink-600'
      };
    }
    
    return {
      panel: 'bg-gray-900',
      accent: 'border-gray-700',
      text: 'text-blue-400',
      button: 'bg-blue-800 hover:bg-blue-700',
      barColor: 'bg-blue-600'
    };
  };
  
  // Handle fruit selection change
  const handleFruitChange = (e) => {
    const fruitName = e.target.value;
    setFruit(fruitName);
    if (completed) resetAnalysis();
  };
  
  // Handle letter selection change
  const handleLetterChange = (e) => {
    if (e.target.value.length <= 1) {
      setLetterToCount(e.target.value.toLowerCase());
      if (completed) resetAnalysis();
    }
  };
  
  // Toggle ultra mode
  const toggleUltraMode = () => {
    if (analyzing) return;
    setUltraMode(!ultraMode);
    if (!ultraMode) {
      addLog("WARNING: ULTRA MODE ACTIVATED 🔥");
      setPowerSetting('HYPERDRIVE');
    } else {
      addLog("ULTRA MODE DEACTIVATED ❄️");
      setPowerSetting('STANDARD');
    }
  };
  
  // Toggle scan mode
  const toggleScanMode = () => {
    if (analyzing) return;
    const currentIndex = scanModes.indexOf(scanMode);
    const nextIndex = (currentIndex + 1) % scanModes.length;
    setScanMode(scanModes[nextIndex]);
    addLog(`SCAN MODE UPDATED: ${scanModes[nextIndex]} 📡`);
  };
  
  // Toggle rainbow mode
  const toggleRainbowMode = () => {
    if (analyzing) return;
    setRainbowMode(!rainbowMode);
    if (!rainbowMode) {
      addLog("🌈 CHROMATIC HYPERVISOR ENGAGED 🌈");
      // Start rainbow animation
      const interval = setInterval(() => {
        setRainbowHue(prev => (prev + 5) % 360);
      }, 100);
      window._rainbowInterval = interval;
    } else {
      addLog("CHROMATIC HYPERVISOR DISENGAGED");
      clearInterval(window._rainbowInterval);
    }
  };
  
  // Toggle hacker mode
  const toggleHaxxorMode = () => {
    if (analyzing) return;
    setHaxxorMode(!haxxorMode);
    if (!haxxorMode) {
      addLog("H4XX0R M0D3 3NG4G3D! 1337");
      setSecretCodeMode(true);
    } else {
      addLog("Hacker mode disabled");
      setSecretCodeMode(false);
    }
  };
  
  // Generate particles
  const generateParticles = () => {
    if (!particleEffect) return;
    
    const newParticles = [];
    for (let i = 0; i < 5; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 2,
        color: `hsl(${Math.random() * 360}, 80%, 60%)`,
        duration: Math.random() * 2 + 1
      });
    }
    setParticles(prev => [...prev, ...newParticles].slice(-50));
  };
  
  // Secret code
  const checkSecretCode = (code) => {
    const konamiCode = 'RAINBOWFRUIT';
    setSecretCode(prev => {
      const newCode = (prev + code).slice(-konamiCode.length);
      if (newCode === konamiCode) {
        setRainbowMode(true);
        setHologramEffect(true);
        addLog("🌟 SECRET CODE ACTIVATED: RAINBOW FRUIT 🌟");
        return '';
      }
      return newCode;
    });
  };
  
  // Reset the analysis
  const resetAnalysis = () => {
    setAnalyzing(false);
    setCompleted(false);
    setProgress(0);
    setStatusMessage('SYSTEM IDLE - AWAITING COMMAND');
    setAlertLevel(0);
    setDangerPulse(false);
    setLetterCount(0);
    setCurrentLetterIndex(-1);
    setStatusLog(['SYSTEM RESET COMPLETE', 'AWAITING COMMAND']);
    setParticleEffect(false);
    setParticles([]);
    setQuantumFluctuation(0);
    setPulseEffect(false);
    setScanSound(false);
    setGlitchEffect(false);
    setGlitchText('');
    setRotationEffect(0);
    setScanlineEffect(false);
    setFruitExploding(false);
    if (fruitExploding) {
      setFruitExploding(false);
    }
  };
  
  // Add message to status log
  const addLog = (message) => {
    setStatusLog(prev => {
      const newLog = [...prev, message];
      if (newLog.length > 5) {
        return newLog.slice(newLog.length - 5);
      }
      return newLog;
    });
  };
  
  // Run the analysis
  const runAnalysis = () => {
    if (analyzing || completed) {
      resetAnalysis();
      return;
    }
    
    // Start analysis process
    setAnalyzing(true);
    
    // Add appropriate log message based on activated modes
    let modeText = [];
    if (ultraMode) modeText.push("ULTRA");
    if (scanMode !== 'STANDARD') modeText.push(scanMode);
    if (rainbowMode) modeText.push("CHROMATIC");
    if (haxxorMode) modeText.push("H4XX0R");
    
    const modeString = modeText.length > 0 ? modeText.join("-") + " " : "";
    
    addLog(`INITIATING ${modeString}QUANTUM ANALYSIS PROTOCOLS ${getCurrentFruitEmoji()}`);
    setStatusMessage('INITIALIZING QUANTUM PROCESSES 🚀');
    
    // Activate various special effects based on modes
    if (ultraMode) {
      setParticleEffect(true);
      const interval = setInterval(generateParticles, 200);
      window._particleInterval = interval;
    }
    
    if (scanMode === 'DIMENSIONAL') {
      setRotationEffect(1);
      setTimeout(() => setRotationEffect(-1), 200);
      setTimeout(() => setRotationEffect(0), 400);
    }
    
    if (scanMode === 'SUBATOMIC' || scanMode === 'QUANTUM') {
      setScanlineEffect(true);
    }
    
    if (haxxorMode) {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 500);
      setTimeout(() => setGlitchEffect(true), 700);
      setTimeout(() => setGlitchEffect(false), 900);
    }
    
    // Calculate actual letter count
    const actualCount = fruit.toLowerCase().split('').filter(char => char === letterToCount.toLowerCase()).length;
    const letters = fruit.split('');
    
    // Simple direct analysis
    let step = 0;
    let totalSteps;
    
    // Determine total steps based on scan mode
    switch (scanMode) {
      case 'DIMENSIONAL': totalSteps = 40; break;
      case 'SUBATOMIC': totalSteps = 35; break;
      case 'QUANTUM': totalSteps = 30; break;
      case 'HYPER': totalSteps = 25; break;
      default: totalSteps = ultraMode ? 30 : 20;
    }
    
    // Function to perform one step of analysis
    const performStep = () => {
      // Update progress
      const newProgress = Math.min(100, (step / totalSteps) * 100);
      setProgress(newProgress);
      
      // Add rotation jitter in dimensional mode
      if (scanMode === 'DIMENSIONAL' && step % 3 === 0) {
        setRotationEffect(Math.random() * 3 - 1.5);
        setTimeout(() => setRotationEffect(0), 200);
      }
      
      // Update quantum fluctuation - jittery visual effect
      if (ultraMode || scanMode !== 'STANDARD') {
        setQuantumFluctuation(Math.random() * 10 - 5);
      }
      
      // Pulse effect every few steps
      setPulseEffect(step % 4 === 0);
      setTimeout(() => setPulseEffect(false), 200);
      
      // Update effects and status based on progress
      if (newProgress < 30) {
        // Phase 1: Initialization
        setAlertLevel(0);
        setStatusMessage(technoBabble[step % 4]);
        addLog(technoBabble[step % 4]);
      } else if (newProgress < 60) {
        // Phase 2: Scanning
        setAlertLevel(1);
        setStatusMessage(technoBabble[4 + (step % 2)]);
        addLog(technoBabble[4 + (step % 2)]);
        setScanSound(true);
        setTimeout(() => setScanSound(false), 100);
      } else if (newProgress < 90) {
        // Phase 3: Critical phase
        setAlertLevel(2);
        setDangerPulse(step % 2 === 0);
        setStatusMessage(technoBabble[6 + (step % 2)]);
        addLog(technoBabble[6 + (step % 2)]);
      } else {
        // Phase 4: Resolution
        setAlertLevel(1);
        setDangerPulse(false);
        setStatusMessage(technoBabble[8 + (step % 2)]);
        addLog(technoBabble[8 + (step % 2)]);
      }
      
      // Process letters as we go
      if (step < letters.length) {
        setCurrentLetterIndex(step);
        
        // Check for match
        if (letters[step].toLowerCase() === letterToCount.toLowerCase()) {
          const matchEmoji = haxxorMode ? '💯' : '🎯';
          addLog(`MATCH DETECTED: Letter '${letterToCount}' at position ${step + 1} ${matchEmoji}`);
          setDangerPulse(true);
          setTimeout(() => setDangerPulse(false), 200);
        }
      }
      
      // Move to next step or complete
      step++;
      if (step <= totalSteps) {
        // Calculate delay based on scan mode
        const baseDelay = 300;
        const delay = scanMode === 'HYPER' ? baseDelay * 0.6 : 
                      scanMode === 'QUANTUM' ? baseDelay * 0.8 :
                      scanMode === 'SUBATOMIC' ? baseDelay * 1.2 :
                      scanMode === 'DIMENSIONAL' ? baseDelay * 1.5 :
                      ultraMode ? baseDelay * 0.7 : baseDelay;
        
        setTimeout(performStep, delay);
      } else {
        finalizeAnalysis(actualCount);
      }
    };
    
    // Start the analysis process
    performStep();
  };
  
  // Finalize the analysis
  const finalizeAnalysis = (count) => {
    setLetterCount(count);
    
    // Different finalize messages based on active modes
    const getModeFinishText = () => {
      if (haxxorMode) return "H4XX1NG COMPL3T3 - D4T4 3XF1LTR4T3D";
      if (scanMode === 'DIMENSIONAL') return "MULTIVERSAL ANALYSIS COMPLETE - CROSS-REALITY VERIFICATION SECURED";
      if (scanMode === 'SUBATOMIC') return "SUBATOMIC ANALYSIS COMPLETE - QUARK-LEVEL VERIFICATION CONFIRMED";
      if (scanMode === 'QUANTUM') return "QUANTUM ANALYSIS COMPLETE - WAVE FUNCTION COLLAPSED";
      if (scanMode === 'HYPER') return "HYPER ANALYSIS COMPLETE - TACHYONIC VERIFICATION CONFIRMED";
      return "ANALYSIS COMPLETE - RESULTS SECURED";
    };
    
    setStatusMessage(`${getModeFinishText()} ✅`);
    
    // Generate final log messages
    addLog(`FINAL REPORT: Detected ${count} instances of "${letterToCount}" in specimen "${fruit}" ${getCurrentFruitEmoji()}`);
    
    // Customized secondary log based on active modes
    let secondaryLog = 'Analysis complete. Results secured';
    
    // Add mode-specific suffix
    if (ultraMode) secondaryLog += ' with ULTRA-QUANTUM precision';
    if (scanMode === 'DIMENSIONAL') secondaryLog += ' across all parallel universes';
    if (scanMode === 'SUBATOMIC') secondaryLog += ' at the quark level';
    if (scanMode === 'QUANTUM') secondaryLog += ' with Heisenberg uncertainty eliminated';
    if (scanMode === 'HYPER') secondaryLog += ' at faster-than-light speeds';
    if (rainbowMode) secondaryLog += ' in full chromatic spectrum';
    if (haxxorMode) secondaryLog += ' with elite code-breaking algorithms';
    
    // Add appropriate emoji based on modes
    let finishEmoji = ' 🔒';
    if (rainbowMode) finishEmoji = ' 🌈';
    if (scanMode === 'DIMENSIONAL') finishEmoji = ' 🌌';
    if (haxxorMode) finishEmoji = ' 💻';
    if (ultraMode) finishEmoji = ' ⚡';
    
    addLog(secondaryLog + finishEmoji);
    
    // Clear effects
    if (window._particleInterval) {
      clearInterval(window._particleInterval);
    }
    
    // Clear effects gradually
    setTimeout(() => {
      setScanlineEffect(false);
      setGlitchEffect(false);
    }, 500);
    
    setTimeout(() => {
      setParticleEffect(false);
      setRotationEffect(0);
    }, 1000);
    
    // Set final state
    setAnalyzing(false);
    setCompleted(true);
    setAlertLevel(0);
  };
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (window._rainbowInterval) {
        clearInterval(window._rainbowInterval);
      }
      if (window._particleInterval) {
        clearInterval(window._particleInterval);
      }
    };
  }, []);
  
  // Render the component
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className={`max-w-xl mx-auto rounded-lg p-6 ${dangerPulse ? 'bg-red-900' : pulseEffect ? 'bg-blue-900' : 'bg-gray-800'} transition-colors duration-300`}
           style={{
             transform: quantumFluctuation !== 0 ? `translateX(${quantumFluctuation}px) rotate(${rotationEffect}deg)` : `rotate(${rotationEffect}deg)`,
             background: rainbowMode ? `linear-gradient(${rainbowHue}deg, #6366f1, #ec4899, #f97316, #facc15, #84cc16, #06b6d4, #6366f1)` : '',
             backgroundSize: rainbowMode ? '200% 200%' : '',
             animation: rainbowMode ? 'gradient 5s ease infinite' : '',
             position: 'relative',
           }}>
           
        {/* Glitch overlay */}
        {glitchEffect && (
          <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-red-500 animate-glitch1"></div>
            <div className="absolute inset-0 bg-blue-500 animate-glitch2"></div>
          </div>
        )}
        
        {/* Scan lines */}
        {scanlineEffect && (
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
            {Array.from({length: 20}).map((_, i) => (
              <div key={i} className="h-1 bg-white" style={{marginTop: `${i*5}%`}}></div>
            ))}
          </div>
        )}
        
        <h1 className={`text-center text-3xl font-bold mb-2 ${rainbowMode ? 'text-white' : 'text-blue-400'} animate-pulse`} 
            style={{textShadow: rainbowMode ? '0 0 10px white' : ''}}>
          XTRM-9000 QUANTUM ANALYZER
        </h1>
        <h2 className="text-center text-xl mb-6 text-blue-300">🍓🔬 FRUIT ANALYSIS SYSTEM 🧪🍎</h2>
        
        {/* Top control bar with power indicator */}
        <div className="flex flex-wrap gap-2 justify-between mb-4">
          {/* Power Level Indicator for ULTRA MODE */}
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className={`h-full ${ultraMode ? 'bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse' : 
                                   rainbowMode ? 'bg-gradient-to-r from-red-600 via-yellow-600 to-blue-600' : 'bg-blue-600'}`} 
                style={{ width: `${ultraMode ? 100 : rainbowMode ? 100 : 50}%` }}></div>
          </div>
        </div>
        
        {/* Mode buttons */}
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
        
        {/* Controls Panel */}
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
                  {analyzing ? (alertLevel > 1 ? 'UNSTABLE ⚠️' : 'NOMINAL 📊') : 'STABLE ✓'}
                </div>
              </div>
              
              <div className={`bg-gray-800 p-2 rounded text-sm border ${getThemeClasses().accent}`}>
                <div className="text-gray-400 mb-1">SECURITY STATUS</div>
                <div className={`text-lg font-bold ${alertLevel === 0 ? 'text-green-500' : alertLevel === 1 ? 'text-yellow-500' : 'text-red-500'}`}>
                  {alertLevel === 0 ? 'SECURE 🔒' : alertLevel === 1 ? 'CAUTION ⚠️' : 'WARNING 🚨'}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main display */}
        <div className="mb-6">
          <div className="bg-black rounded-lg p-4 border-2 border-gray-700 relative overflow-hidden min-h-[500px]">
            {/* Particle effects layer */}
            {particleEffect && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map(particle => (
                  <div 
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      backgroundColor: particle.color,
                      opacity: 0.7,
                      animation: `fadeOut ${particle.duration}s forwards`
                    }}
                  ></div>
                ))}
              </div>
            )}
            
            {/* Scan sound effect visual */}
            {scanSound && (
              <div className="absolute inset-0 bg-blue-500 opacity-10 pointer-events-none"></div>
            )}
            
            {/* Alert indicators */}
            {alertLevel > 0 && (
              <div className={`absolute top-2 right-2 flex items-center ${
                alertLevel === 1 ? 'text-yellow-500' : 'text-red-500'
              } ${alertLevel > 1 ? 'animate-pulse' : ''}`}>
                <AlertCircle className="mr-1" size={18} />
                <span className="font-bold">
                  {alertLevel === 1 ? 'CAUTION ⚠️' : 'WARNING 🚨'}
                </span>
              </div>
            )}
            
            {/* Progress bar with animated gradient for hyper-quantum mode */}
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
              {haxxorMode ? glitchText || statusMessage.replace(/[aeios]/gi, function(m) { 
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
            
            {/* Enhanced status log with special effects */}
            <div className={`${getThemeClasses().panel} p-3 rounded mb-4 h-28 overflow-y-auto font-mono text-sm border ${getThemeClasses().accent} ${haxxorMode ? 'bg-black' : ''}`}>
              <div className="flex justify-between mb-2">
                <div className="text-gray-400">SYSTEM LOG</div>
                <div className={`${
                  alertLevel === 0 ? 'text-green-500' : 
                  alertLevel === 1 ? 'text-yellow-500' : 
                  'text-red-500'
                }`}>
                  {alertLevel === 0 ? 'NORMAL' : alertLevel === 1 ? 'CAUTION ⚠️' : 'WARNING 🚨'}
                </div>
              </div>
              
              {statusLog.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-1 ${
                    message.includes('WARNING') || message.includes('DANGER') || message.includes('CRITICAL') || message.includes('EMERGENCY') ? 'text-red-500' : 
                    message.includes('CAUTION') || message.includes('ALERT') ? 'text-yellow-500' : 
                    message.includes('FINAL REPORT') ? 'text-green-400' : 
                    haxxorMode ? 'text-green-400' : 'text-blue-400'
                  } ${haxxorMode ? 'font-mono tracking-wide' : ''}`}
                  style={haxxorMode ? {fontFamily: "'Courier New', monospace"} : {}}
                >
                  {haxxorMode ? message.replace(/[aeios]/gi, function(m) { 
                    return {'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5', 
                            'A': '4', 'E': '3', 'I': '1', 'O': '0', 'S': '5'}[m];
                  }) : message}
                </div>
              ))}
            </div>
            
            {/* Results display with super enhanced ultra effects */}
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
                
                {/* Display special mode messages */}
                {(ultraMode || scanMode !== 'STANDARD' || rainbowMode || haxxorMode) && (
                  <div className="text-xs mt-2 text-pink-400">
                    {ultraMode && 'ULTRA-QUANTUM ACCURACY: 99.9999%'}
                    {scanMode === 'DIMENSIONAL' && ' • DIMENSIONAL UNCERTAINTY: 0.00001%'}
                    {scanMode === 'SUBATOMIC' && ' • QUARK-LEVEL PRECISION: PERFECT'}
                    {scanMode === 'QUANTUM' && ' • WAVE-FUNCTION COLLAPSE: COMPLETE'}
                    {scanMode === 'HYPER' && ' • TACHYONIC ANALYSIS: TEMPORAL UNCERTAINTY ELIMINATED'}
                    {rainbowMode && ' • CHROMATIC VARIANCE: ABSOLUTE'}
                    {haxxorMode && ' • S3CUR1TY: M4X1MUM'}
                  </div>
                )}
                
                {/* Super ultra combo messages */}
                {(ultraMode && scanMode !== 'STANDARD' && (rainbowMode || haxxorMode)) && (
                  <div className="text-xs mt-1 text-white">
                    <span className="animate-pulse">⚠️ REALITY COHERENCE: UNSTABLE ⚠️</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Action button with fixed height container */}
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
      </div>
    </div>
  );
};
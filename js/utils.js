// Utility functions for the XTRM-9000 Fruit Analyzer

// Get theme class based on various modes
const getThemeClasses = (rainbowMode, haxxorMode, scanMode, ultraMode) => {
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
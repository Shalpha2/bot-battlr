// Import React and necessary components
import React, { useState, useEffect } from 'react';
// We'll put our components in a separate folder to keep things organized
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  // State for all bots and bots in army
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);

  // Fetch bots when component first loads
  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch('http://localhost:8001/bots');
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.log("Oops, couldn't fetch bots:", error);
      }
    };
    
    fetchBots();
  }, []);

  // Add a bot to army if not already there
  const handleAddToArmy = (botToAdd) => {
    const alreadyInArmy = armyBots.some(bot => bot.id === botToAdd.id);
    if (!alreadyInArmy) {
      setArmyBots([...armyBots, botToAdd]);
    }
  };

  // Remove bot from army
  const handleRelease = (botId) => {
    setArmyBots(armyBots.filter(bot => bot.id !== botId));
  };

  // Delete bot forever from backend and state
  const handleDischarge = async (botId) => {
    try {
      await fetch(`http://localhost:8001/bots/${botId}`, {
        method: 'DELETE'
      });
      // Remove from both army and all bots
      setArmyBots(armyBots.filter(bot => bot.id !== botId));
      setBots(bots.filter(bot => bot.id !== botId));
    } catch (error) {
      console.log("Couldn't discharge bot:", error);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Bot Battlr</h1>
        <p>Build your bot army!</p>
      </header>
      
      <main>
        <YourBotArmy 
          army={armyBots} 
          onRelease={handleRelease}
          onDischarge={handleDischarge}
        />
        
        <BotCollection 
          bots={bots} 
          onAddToArmy={handleAddToArmy}
        />
      </main>
    </div>
  );
}

export default App;


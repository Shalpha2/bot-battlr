import { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);
  
  // Fetch all bots on component mount
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data));
  }, []);

  // Add bot to army
  const addToArmy = (bot) => {
    if (!armyBots.some(armyBot => armyBot.id === bot.id)) {
      setArmyBots([...armyBots, bot]);
    }
  };

  // Release bot from army
  const releaseFromArmy = (botId) => {
    setArmyBots(armyBots.filter(bot => bot.id !== botId));
  };

  // Discharge bot permanently
  const dischargeBot = (botId) => {
    // Remove from backend
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE'
    })
    .then(() => {
      // Remove from army and all bots
      setArmyBots(armyBots.filter(bot => bot.id !== botId));
      setBots(bots.filter(bot => bot.id !== botId));
    });
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <YourBotArmy 
        armyBots={armyBots} 
        onRelease={releaseFromArmy}
        onDischarge={dischargeBot}
      />
      <BotCollection 
        bots={bots} 
        onAddToArmy={addToArmy}
      />
    </div>
  );
}

export default App;


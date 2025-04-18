import BotCard from './BotCard';

function YourBotArmy({ armyBots, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {armyBots.length === 0 ? (
        <p>No bots enlisted yet. Click on bots to add them to your army!</p>
      ) : (
        <div className="army-list">
          {armyBots.map(bot => (
            <div className="army-bot-card" key={bot.id}>
              <BotCard 
                bot={bot}
                onClick={() => onRelease(bot.id)}
              />
              <button 
                className="discharge-btn"
                onClick={() => onDischarge(bot.id)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default YourBotArmy;
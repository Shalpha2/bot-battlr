// This component shows all available bots
function BotCollection({ bots, onAddToArmy }) {
    return (
      <section className="bot-collection">
        <h2>Available Bots</h2>
        
        {bots.length === 0 ? (
          <p>Loading bots... please wait!</p>
        ) : (
          <div className="bot-grid">
            {bots.map(bot => (
              <div 
                key={bot.id} 
                className="bot-card"
                onClick={() => onAddToArmy(bot)}
              >
                <img src={bot.avatar_url} alt={bot.name} />
                <h3>{bot.name}</h3>
                <p><em>"{bot.catchphrase}"</em></p>
                
                <div className="bot-stats">
                  <span>Health: {bot.health}</span>
                  <span>Damage: {bot.damage}</span>
                  <span>Armor: {bot.armor}</span>
                </div>
                
                <p>Class: {bot.bot_class}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
  
  export default BotCollection;
// This shows detailed info when a bot is selected
// It appears instead of the collection view

function BotSpecs({ bot, onBack, onEnlist }) {
    // Calculate some derived values
    const totalPower = bot.health + bot.damage + bot.armor;
    const powerPercentage = Math.round((totalPower / 300) * 100);
  
    return (
      <div className="bot-specs">
        {/* Back Button */}
        <button 
          className="back-button"
          onClick={onBack}
        >
          ← Back to All Bots
        </button>
  
        {/* Main Bot Info */}
        <div className="specs-container">
          <div className="specs-image">
            <img src={bot.avatar_url} alt={bot.name} />
          </div>
  
          <div className="specs-details">
            <h2>{bot.name}</h2>
            <p className="class-badge">{bot.bot_class}</p>
            
            <blockquote>"{bot.catchphrase}"</blockquote>
            
            {/* Stats Visualization */}
            <div className="stats-visual">
              <div className="stat-bar">
                <label>Health: {bot.health}</label>
                <div 
                  className="health-bar" 
                  style={{ width: `${bot.health}%` }}
                ></div>
              </div>
              
              <div className="stat-bar">
                <label>Damage: {bot.damage}</label>
                <div 
                  className="damage-bar" 
                  style={{ width: `${bot.damage}%` }}
                ></div>
              </div>
              
              <div className="stat-bar">
                <label>Armor: {bot.armor}</label>
                <div 
                  className="armor-bar" 
                  style={{ width: `${bot.armor}%` }}
                ></div>
              </div>
            </div>
  
            {/* Power Summary */}
            <div className="power-summary">
              <p>Total Power: {totalPower}/300</p>
              <div className="power-meter">
                <div style={{ width: `${powerPercentage}%` }}></div>
              </div>
            </div>
  
            {/* Action Button */}
            <button 
              className="enlist-button"
              onClick={() => onEnlist(bot)}
            >
              Enlist in Army
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default BotSpecs;
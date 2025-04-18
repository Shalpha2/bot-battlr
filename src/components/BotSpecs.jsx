function BotSpecs({ bot, onEnlist, onBack }) {
    return (
      <div className="bot-specs">
        <button onClick={onBack}>Back to List</button>
        <div className="detailed-view">
          <img src={bot.avatar_url} alt={bot.name} />
          <h2>{bot.name}</h2>
          <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
          <div className="specs-stats">
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
          </div>
          <button onClick={() => onEnlist(bot)}>Enlist</button>
        </div>
      </div>
    );
  }
  
  export default BotSpecs;
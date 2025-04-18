function BotCard({ bot, onClick, actionLabel }) {
    const { name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;
  
    return (
      <div className="bot-card" onClick={onClick}>
        <img src={avatar_url} alt={name} />
        <h3>{name}</h3>
        <p>{catchphrase}</p>
        <div className="bot-stats">
          <span>❤️{health}</span>
          <span>⚔️{damage}</span>
          <span>🛡️{armor}</span>
        </div>
        <p>Class: {bot_class}</p>
        {actionLabel && <button>{actionLabel}</button>}
      </div>
    );
  }
  
  export default BotCard;
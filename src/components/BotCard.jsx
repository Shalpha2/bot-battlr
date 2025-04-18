// This is a reusable card component to display bot info
// It's used in both the collection and army lists

function BotCard({ bot, onClick, showDelete }) {
    // Destructure the bot props for easier use
    const { 
      id, 
      name, 
      health, 
      damage, 
      armor, 
      bot_class, 
      catchphrase, 
      avatar_url 
    } = bot;
  
    return (
      <div className="bot-card" onClick={onClick}>
        {/* Bot Image */}
        <div className="bot-image-container">
          <img 
            src={avatar_url} 
            alt={name} 
            className="bot-image"
          />
        </div>
        
        {/* Bot Info */}
        <div className="bot-info">
          <h3 className="bot-name">{name}</h3>
          <p className="bot-catchphrase">"{catchphrase}"</p>
          
          {/* Stats Row */}
          <div className="bot-stats">
            <span title="Health">❤️ {health}</span>
            <span title="Damage">⚔️ {damage}</span>
            <span title="Armor">🛡️ {armor}</span>
          </div>
          
          <p className="bot-class">Class: {bot_class}</p>
        </div>
  
        {/* Delete Button (only shown in army) */}
        {showDelete && (
          <button 
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation(); // Prevents the card click from firing
              onClick(id); // Uses onClick for delete in this case
            }}
          >
            X
          </button>
        )}
      </div>
    );
  }
  
  export default BotCard;
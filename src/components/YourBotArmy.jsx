// This component shows the user's selected bots
function YourBotArmy({ army, onRelease, onDischarge }) {
    return (
      <section className="your-army">
        <h2>Your Bot Army</h2>
        
        {army.length === 0 ? (
          <p>Your army is empty. Click on bots to add them!</p>
        ) : (
          <div className="army-bots">
            {army.map(bot => (
              <div key={bot.id} className="army-bot">
                <div onClick={() => onRelease(bot.id)}>
                  <img src={bot.avatar_url} alt={bot.name} />
                  <h4>{bot.name}</h4>
                </div>
                <button 
                  className="delete-btn"
                  onClick={() => onDischarge(bot.id)}
                >
                  Delete Forever
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
  
  export default YourBotArmy;
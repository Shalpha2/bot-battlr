import React from "react";

function BotCard({ bot, onClick, onDischarge, showDischarge = false }) {
  const { name, avatar_url, health, damage, armor, bot_class, catchphrase } = bot;

  const getClassIcon = () => {
    const icons = {
      Support: "🛠️",
      Medic: "💉",
      Assault: "⚔️",
      Defender: "🛡️",
      Witch: "🪄",
      Captain: "⭐",
    };
    return icons[bot_class] || "🤖";
  };

  return (
    <div className="card h-100 shadow-sm" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={avatar_url} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between align-items-center">
          {name}
          <span>{getClassIcon()}</span>
        </h5>
        <p className="card-text">{catchphrase}</p>
        <div className="d-flex justify-content-between text-muted">
          <span>❤️ {health}</span>
          <span>⚡ {damage}</span>
          <span>🛡️ {armor}</span>
        </div>
      </div>
      {showDischarge && (
        <button
          className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
          onClick={(e) => {
            e.stopPropagation();
            onDischarge();
          }}
        >
          ❌
        </button>
      )}
    </div>
  );
}

export default BotCard;

import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="container bg-lime p-5 mb-4 rounded">
  <h3 className="text-center">My Bot Army</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {army.map((bot) => (
          <div key={bot.id} className="col">
            <BotCard
              bot={bot}
              onClick={() => onRelease(bot)}
              onDischarge={() => onDischarge(bot)}
              showDischarge={true}
            />
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default YourBotArmy;


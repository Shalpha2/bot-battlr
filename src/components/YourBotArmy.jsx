import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="my-5">
      <h2 className="text-center my-4">Your Bot Army</h2>
      <div className="row">
        {army.map((bot) => (
          <div key={bot.id} className="col-md-3 mb-4">
            <BotCard
              bot={bot}
              onClick={() => onRelease(bot)}
              onDischarge={() => onDischarge(bot)}
              showDischarge
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;

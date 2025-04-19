import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onEnlist }) {
  return (
    <div>
      <h2 className="text-center my-4">Bot Collection</h2>
      <div className="row">
        {bots.map((bot) => (
          <div key={bot.id} className="col-md-3 mb-4">
            <BotCard bot={bot} onClick={() => onEnlist(bot)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;

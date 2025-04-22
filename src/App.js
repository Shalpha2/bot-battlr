import './App.css';
import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  async function getBots() {
    try {
      const response = await fetch('https://bot-battlr-20.onrender.com/bots');
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.log("Oops, couldn't fetch bots:", error);
    }
  }

  useEffect(() => {
    getBots();
  }, []);

  const handleEnlist = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleRelease = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  async function handleDischarge(bot) {
    try {
      const response = await fetch(`https://bot-battlr-20.onrender.com/${bot.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete the bot");
      }

      const deletedBot = await response.json();
      setArmy((prev) => prev.filter((b) => b.id !== deletedBot.id));
      setBots((prev) => prev.filter((b) => b.id !== deletedBot.id));
    } catch (error) {
      console.error("Error discharging bot:", error);
      
    }
  }

  return (
    <>
      <div style={{height: "150px" }}></div>
      <div className="container mt-4">
        <YourBotArmy army={army} onRelease={handleRelease} onDischarge={handleDischarge} />
        <BotCollection bots={bots} onEnlist={handleEnlist} />
      </div>
    </>
  );
}

export default App;
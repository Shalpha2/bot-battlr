🤖 Bot Battlr
Bot Battlr is a dynamic React web application where users can browse, manage, and deploy their own custom army of bots. Fetching data from a local JSON server, it offers interactive features to build, sort, and filter your bot army with ease.

🚀 Features
🧭 View all available bots in a collection

⚔️ Enlist bots to your personal army

🕊️ Release bots from your army

❌ Permanently discharge bots from service

🔍 View detailed specifications of each bot

🧮 Sort bots by health, damage, or armor

🧪 Filter bots by class (e.g., Support, Medic, etc.)

🔒 Limit army to one bot per class (Advanced)

📦 Installation & Setup
1. Clone the repository

2. Install dependencies
npm install
3. Start the JSON server
json-server --watch db.json

4. In a separate terminal, start the React app

npm start

📍 The app should now be running at http://localhost:3000

🕹️ Usage
Browse bots in the Bot Collection

Click a bot to enlist it into your army (one per class)

Click an enlisted bot to release it

Click the ❌ button on a bot to discharge it permanently

🔌 API Endpoints

Method	  Endpoint	 Description
GET	/bots	Retrieve  all bots
DELETE	  /bots/:id	  Delete a specific bot

🔁 Sample Bot Object
{
  "id": 101,
  "name": "wHz-93",
  "health": 94,
  "damage": 20,
  "armor": 63,
  "bot_class": "Support",
  "catchphrase": "1010010101001101100011000111101",
  "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1"
}

📌 Core Deliverables
✅ Display all bot profiles in BotCollection

✅ Enlist bots into YourBotArmy

✅ Allow bots to be released from the army

✅ Discharge bots permanently from the app

🌟 Advanced Deliverables
✅ Show a detailed BotSpecs view

✅ Sort bots by health, damage, or armor using SortBar

✅ Filter bots by class

✅ Restrict army to one bot per class

🛠️ Technologies Used
React

JSON Server

HTML5

CSS3

🤝 Contributing
Contributions are welcome!
Fork the repository, create a feature branch, and submit a pull request.

📄 License
This project is licensed under the MIT License.
// Discord Bot Dependencies.
const Discord = require("Discord.js");
const bot = new Discord.Client();

// Show that the bot is running by logging it in the terminal window.
console.clear(); // Clear Console.
console.warn("Server Announcer: Running...."); // Show Message.

// Server DC/GC/Music Commands.
bot.on('message', () => {
    // Channel to serve messages.
    const channel = bot.channels.cache.get('700073488785997925'); // Channel = general-topics

    // Weekly messages and tips.
    let message;
    switch (new Date().getDay()) {
        case 0:
            message = channel.setTopic("❓-This channel is reserved for general conversations | ❗-Server Message: Eat, Sleep, PSO, Repeat! ~ Gae Bolg");
            break;
        case 1:
            message = channel.setTopic("❓-This channel is reserved for general conversations | ❗-Server Message: If you haven't already, check out '📝-role-list' and let others know what versions of PSO you play. Use '📝-assign-roles' so members know what games to invite you to! ~ Gae Bolg");
            break;
        case 2:
            message = channel.setTopic("❓-This channel is reserved for general conversations | ❗-Server Message: 0o0o0o0o0o0o0o0o ~ Gae Bolg");
            break;
        case 3:
            message = channel.setTopic("❓-This channel is reserved for general conversations | ❗-Server Message: When you enter a voice channel, check out '🎵-music-requests' and play music/sound effects! ~ Gae Bolg");
            break;
        case 4:
            message = channel.setTopic("❓-This channel is reserved for general conversations | ❗-Server Message: Check out '📢-dreamteam-uploads' to watch our YouTube videos as they release. ~ Gae Bolg");
            break;
        case 5:
            day = channel.setTopic("❓-This channel is reserved for general conversations | ❗-Server Message: This is just a reminder that tomorrow is PSO game night, prepare yourselves! ⚔️ ~ Gae Bolg");
            break;
        case 6:
            message = channel.setTopic("❓-This channel is reserved for general conversations | ❗-Server Message: Ah yes, it is that time again, ladies and gentlemen. Tonight is officially PSO game night! ~ Gae Bolg");
    }
});

// Bot Login Token.
// bot.login("<TOKEN-HERE>");
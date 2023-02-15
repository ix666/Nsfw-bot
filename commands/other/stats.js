const Discord = require("discord.js"),
  os = require('os');

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setTimestamp()
    .addField(`:map: Number of servers`, `${client.guilds.cache.size}`, true)
    .addField(`:bust_in_silhouette: Number of users`, `${client.users.cache.size}`, true)
    .addField(`:speech_balloon:  Number of channels`, `${client.channels.cache.size}`, true)
    .addField(`:gear: Architecture`, `${os.arch()}`, true)
    .addField(`:dividers: Lib`, `Discord.js ${Discord.version}`, true)
    .addField(`:alarm_clock: Uptime`, "" + (Math.round(client.uptime / (1000 * 60 * 60))) + " Heure(s), " + (Math.round(client.uptime / (1000 * 60)) % 60) + " minute(s) et " + (Math.round(client.uptime / 1000) % 60) + " seconde(s)" + "")
    .setFooter(client.footer)

  message.channel.send(embed);
};

exports.help = {
  name: "stats",
  description: "Give stats of the bot.",
  usage: "stats",
  example: "stats"
};

exports.conf = {
  aliases: [],
  cooldown: 5 // Integer = second.
};
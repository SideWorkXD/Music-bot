const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
        .setAuthor({
          name: "Currently playing a Track",
          iconURL:
            "https://cdn.discordapp.com/attachments/1140841446228897932/1144671132948103208/giphy.gif",
          url: "https://discord.gg/FUEHs7RCqz",
        })
        .setDescription(
          `\n ‎ \n <a:dstar:859462751255658506> **Details :** **${song?.name}**\n <a:dstar:859462751255658506> **Enjoy the Ultimate Music Experience. ** \n <a:dstar:859462751255658506> **If link breaks playback try to give query.**`,
        )
        .setImage(queue.songs[0].thumbnail)
        .setColor("#FF0000")
        .setFooter({ text: "Use /help command" });
      queue?.textChannel?.send({ embeds: [embed] }).catch((e) => {});
    }
  }
};

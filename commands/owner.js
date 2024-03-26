const { ApplicationCommandOptionType } = require("discord.js");
const db = require("../mongoDB");

module.exports = {
  name: "owner",
  description: "Get information about bot owner.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const DiscordServer = "https://discord.gg/9Tt9KeVkMv";
      const InstagramLink = "https://www.instagram.com/ig.billo/";
      const { EmbedBuilder } = require("discord.js");
      const embed = new EmbedBuilder()
        .setColor("#da2a41")
        .setAuthor({
          name: "Owner",
          iconURL:
            "https://cdn.discordapp.com/attachments/1156866389819281418/1157310253520662638/2443-iconperson.png?ex=651824aa&is=6516d32a&hm=0becc4a0fda01e5a02a63cf098db30c287e60a474f8d2da4ddeae7f47d98a5a3&",
          url: "https://discord.gg/FUEHs7RCqz",
        })
        .setDescription(
          `__**About me**__:\n\n <:Wrench:1199404907493609605> *Bot by BilloXD, He is a well know CGI, VFX & 3D artist. He is a manager & Moderator of 10+ Discord Server.  Feel free to contact him!* \n <:dc:1199403812096589925> **Discord Support Server : [BilloXD](${DiscordServer})** \n <:instagram:1199403542847434843> **Instagram : [ig.billo](${InstagramLink})**`,
        )
        .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch((e) => {});
    } catch (e) {
      console.error(e);
    }
  },
};

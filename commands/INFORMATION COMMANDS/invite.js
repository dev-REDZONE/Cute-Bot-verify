const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "invite",
    aliases: ["add"],
    category: "INFORMATION COMMANDS",
    description: "Invite the Bot to your Server",
    useage: "invite",
    run: async (client, message, args) => {
        let inviteembed = new Discord.MessageEmbed()
            .setColor(config.colors.yes)
            .setTitle("Invite, Calms Bot")
            .setDescription("**[ Invite Me Now , thanks](https://discord.com/api/oauth2/authorize?client_id=828921463348264982&permissions=0&scope=bot)** ")
            .setFooter("Calms Bot", client.user.displayAvatarURL())

        message.reply(inviteembed);
    }
}

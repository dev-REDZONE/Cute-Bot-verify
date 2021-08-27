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
            .setTitle("Invite, JOKER STAFF")
            .setDescription("**[ Invite Me Now , thanks](https://discord.com/api/oauth2/authorize?client_id=863836317016260670&permissions=0&scope=bot)** ")
            .setFooter("JOKER STAFF", client.user.displayAvatarURL())

        message.reply(inviteembed);
    }
}

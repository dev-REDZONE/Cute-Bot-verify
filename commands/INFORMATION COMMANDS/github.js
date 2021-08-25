const {
	MessageEmbed
} = require("discord.js")
const config = require("../../config.json")
module.exports = {
	name: "github",
    category: "INFORMATION COMMANDS",
	aliases: ["git", "source"],
	cooldown: 2,
	usage: "github",
	description: "Shows you the Github and Source Code Information about this Bot",
	run: async (client, message, args, user, text, prefix) => {
			message.channel.send(new MessageEmbed()
				.setTitle(`This Bot is made by \`JANO#4534\` and **this** is the Source Code link to this Bot`)
				.setURL("https://github.com/dev-REDZONE")
				.addField("Discord.js: ", "[\`v12.5.1\`](https://discord.js.org)", true)
				.addField("FFMPEG: ", "\`v4.1.6-1\`", true)
				.addField("Node.js: ", "[\`v15.3.4\`](https://nodejs.org/en/)", true)
				.addField("Distube: ", "[\`v2.8.7\`](https://distube.js.org)")
				.addField("Source Code. ", "Don't just use the source for yourself,... please [ invite ](https://discord.com/api/oauth2/authorize?client_id=843107387326201887&permissions=8&scope=bot) me too![\`Click here\`](https://discord.com/api/oauth2/authorize?client_id=843107387326201887&permissions=8&scope=bot)")
			        .addField("Source Code. ", "[ My git hub ](https://github.com/dev-REDZONE) link git hub ![\`Click here\`](https://github.com/dev-REDZONE)")
				
				.setColor(config.colors.yes)
				.setFooter("JOKER STAFF⎮ By: RedZone", client.user.displayAvatarURL())
			);
	}
}

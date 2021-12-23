const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "embed",
    desc: "",
    usage: "",
    perm: ["dev"],
    run: async ({ client, message, args }) => {
        const msg = message.content.slice(6).trim();
        if (!msg) return message.channel.send(`Enter text!`).then(msg => setTimeout(() => msg.delete(), 3000));
        message.delete()
        const embed = new MessageEmbed()
            .setImage(`https://cdn.discordapp.com/attachments/919979870828789831/923281713927434250/SLOWCRAFT.png`)
            .setColor("#ff4900")
            .setTitle("⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀**SlowCraft.pl**⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀")
            .setDescription(msg)
            .setFooter("SlowCraft.pl")
            .setTimestamp()
        message.channel.send(embed)
    }
}
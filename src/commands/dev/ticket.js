const { MessageEmbed } = require('discord.js')
const { MessageButton } = require("discord-buttons")
module.exports = {
    name: "ticket",
    description: '',
    perm: ["dev"],
    run: async ({ client, message, args }) => {
        let button = new MessageButton()
            .setStyle('red')
            .setLabel('⠀⠀⠀⠀⠀⠀🎫 Stwórz kanał!⠀⠀⠀⠀⠀⠀')
            .setID('TICKET')
        let embed = new MessageEmbed()
            .setImage(`https://cdn.discordapp.com/attachments/919979870828789831/923286670814633984/SLOWCRAFT_POMOC.png`)
            .setTitle("**SlowCraft - Pomoc**")
            .setColor("#ff4900")
            .setDescription("Aby utworzyć prywatny kanał do pomocy, kliknij przycisk **🎫 Stwórz kanał!** poniżej.")
            .setTimestamp()
            .setFooter("SlowCraft.pl")
        message.channel.send(' ', {
            button: button,
            embed: embed
        })
    }
}
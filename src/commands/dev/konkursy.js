const { MessageEmbed } = require("discord.js");
const moment = require("moment");
moment.locale('pl');
const ms = require("ms");
module.exports = {
    name: "konkurs",
    description: "Create a simple giveaway",
    usage: "<czas> <kanal> <nagroda>",
    category: "",
    async run({ client, message, args, MessageEmbed }) {

        if (!args[0]) return message.channel.send(` Nie określiłeś czasu!`);
        if (
            !args[0].endsWith("d") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("m")
        )
            return message.channel.send(
                `**Uzywaz zly format Poprawny format: <giveaway np 1m #kanal nagroda**`
            );
        if (isNaN(args[0][0])) return message.channel.send(`To nie jest liczba!`);
        let channel = message.mentions.channels.first();
        if (!channel)
            return message.channel.send(
                `Nie moge znaleźć tego kanału`
            );

        let prize = args.slice(2).join(" ");
        if (!prize) return message.channel.send(`Nie podano nagrody!`);
        message.channel.send(`*Giveaway ${channel}*`);
        let Embed = new MessageEmbed()
            .setTitle(`**SlowCraft - KONKURS** 🎉`)
            .setImage(`https://cdn.discordapp.com/attachments/919979870828789831/923289206086856724/SLOWCRAFT_KONKURS.png`)
            .setFooter("SlowCraft.pl")
            .setDescription(`> Do wygrania: **${prize}**\n`
                + `> Ilość zwycięzców: **1**\n`
                + `  ⁣  ⁣  ⁣  ⁣  ⁣  ⁣   ⁣  ⁣  ⁣  ⁣  ⁣  ⁣\n`
                + `> Utworzony przez: ${message.author}\n`
                + `  ⁣  ⁣  ⁣  ⁣  ⁣  ⁣   ⁣  ⁣  ⁣  ⁣  ⁣  ⁣\n`
                + `> Utworzono: **${moment(new Date()).format("DD.MM.YYYY")} - ${moment(new Date()).format("HH:mm:ss")}**\n`
                + `  ⁣  ⁣  ⁣  ⁣  ⁣  ⁣   ⁣  ⁣  ⁣  ⁣  ⁣  ⁣\n`
                + `> Zakończy się za: **${(args[0])} po ${moment(new Date()).format("HH:mm:ss")}**\n`
                + `  ⁣  ⁣  ⁣  ⁣  ⁣  ⁣   ⁣  ⁣  ⁣  ⁣  ⁣  ⁣\n`
                + `> Aby wziąć udział w konkursie należy zareagować emotką poniżej. 🎉`)
            .setTimestamp()
            .setColor(`#ff4900`);

        let m = await channel.send(Embed);
        m.react("🎉");
        setTimeout(() => {
            if (m.reactions.cache.get("🎉").count <= 1) {
                message.channel.send(`Reakcje: ${m.reactions.cache.get("🎉").count}`);
                return message.channel.send(
                    `Za mało ludzi zareagowało, abym zaczął losować zwycięzcę!`
                );
            }

            let winner = m.reactions.cache
                .get("🎉")
                .users.cache.filter((u) => !u.bot)
                .random();
            channel.send(
                `Zwycięzca konkursu wygrał ** ${prize} ** jest nim ${winner}`
            );
        }, ms(args[0]));
    },
};
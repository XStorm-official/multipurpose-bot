const { MessageEmbed } = require('discord.js');
const config = require("../config")
const db = require('quick.db')
const cl = new db.table("Color")

module.exports = {
    name: 'support',
    usage: 'support',
    description: `Supprot commande.`,
    async execute(client, message, args) {

        let color = db.fetch(`color_${message.guild.id}`)
        if (color == null) color = config.app.color

        const embed = new MessageEmbed()
            .setColor(color)
            .setDescription(`Pour rejoindre notre support [cliquez ici](https://discord.gg/SW5gzcW4Ux) \n**Dévelopeur :** <@!1096572738606469171>`)
            .setFooter({ text: config.app.footer })

        message.reply({ content: 'Je vous ai envoyé mon serveur support par message privé' })
        message.react('✔️')
        message.member.send({ content: `https://discord.gg/SW5gzcW4Ux`, embeds: [embed] }).catch(() => false);
    }
}
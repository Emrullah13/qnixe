const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {

  let user = client.users.get(args.slice(0).join(' '));
  let nesne = args[0]
   let ne = args[1]
  if (!nesne) return message.reply('Herhangi bir ID belirtiniz.')
  if (!ne) return message.reply('La olm yazacağın şeyide söylesene')
  
  
  message.channel.send(`Başarılı :/`)
if (message.client.users.get(''+nesne+'').send(`Selamlar ben qnixe yetkililer tarafında sunucuda olmadığınız farkettik botunuzu sisteme eklemek için sunucumuza katılmanız gerekli https://discord.gg/28b7Aa6`)){
 
} else return
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dm'],
    kategori: 'yapımcı',
  permLevel: 5
};
exports.help = {
  name: 'mesaj',
  description: 'Gold üye ekler',
  usage: 'gold-üye-ekle'
};
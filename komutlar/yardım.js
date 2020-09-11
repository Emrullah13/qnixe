const Discord = require('discord.js');

exports.run = async (client, message, args) => {
	//kendi URL'lerini eklersn :D
  var embed = new Discord.RichEmbed()
  .setColor('22fff0')
  .setAuthor("Qnixe Bot List", client.user.avatarURL)
  .addField("Sistemin amacı nedir? Sistem ne işe yaramaktadır?", "Gerekli bilgiyi [buraya tıklayarak](https://qnixe.ga/hakkimizda) görebilirsiniz.")
	.addField("Bot nasıl ekleyeceğim?", "[Buraya tıklayarak](https://qnixe.ga/botekle) bot ekleyebileceğiniz yere ışınlanabilirsiniz.")
  .addField("Sistemdeki tüm botları nereden görebilirim?", "[Buraya tıklayarak](https://qnixe.ga/botlar) görebilirsiniz.")
  .addField("Sertifika ne işe yarar? Nasıl alınır?", "[Buraya tıklayarak](https//qnixe.ga/sertifika) görebilirsiniz.")
  .addField("Kullanıcı panelinde neler yapılabilir?", "Kullanıcı panelinde sistemdeki botlarınızın profilini/başvurusunu düzenleyebilir ve botlarınızı sistemden silebilirsiniz. \nKullanıcı paneline gitmek için [buraya tıklayabilirsiniz.](https://qnixe.ga/panel)")
  message.channel.send({embed: embed})
  
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['y', 'help', 'h', 'bilgi', 'info'],
	permLevel: 0,
	kategori: 'genel'
}

exports.help = {
	name: 'yardım',
	description: 'Sistem hakkında bilgi gösterir.',
	usage: 'yardım'
}
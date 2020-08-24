const Discord = require('discord.js');
const { OpusEncoder } = require('@discordjs/opus');
const events = {
    MESSAGE_REACTION_ADD: 'messageReactionAdd',
};
//EMBEDS
const embed1 = new Discord.MessageEmbed()
	.setColor('#992D22')
	.setTitle('IMPOSTER')
	.setAuthor('Bot by Plaudible', 'https://i.imgur.com/hHE8LOs.png', 'https://github.com/plaudible')
	.setDescription('Please react to this if you are an **IMPOSTER**')
	.setThumbnail('https://i.imgur.com/uhQ67TA.png')
	.setImage('https://i.imgur.com/Qi61c74.png')

const embed2 = new Discord.MessageEmbed()
	.setColor('#0099E1')
	.setTitle('CREWMEMBER')
	.setAuthor('Bot by Plaudible', 'https://i.imgur.com/47Mh4ov.png', 'https://github.com/plaudible')
	.setDescription('Please react to this if you are an **CREWMEMBER**')
	.setThumbnail('https://i.imgur.com/uhQ67TA.png')
	.setImage('https://i.imgur.com/v73l8mI.png')

const embed3 = new Discord.MessageEmbed()
	.setColor('#575757')
	.setTitle('DEAD')
	.setAuthor('Bot by Plaudible', 'https://i.imgur.com/QCdjWt9.png', 'https://github.com/plaudible')
	.setDescription('Please react to this if you **DIED**')
	.setThumbnail('https://i.imgur.com/uhQ67TA.png')
	.setImage('https://i.imgur.com/v73l8mI.png')
//HELP EMBED
const embedhelp = new Discord.MessageEmbed()
	.setColor('#575757')
	.setTitle('HELP - AMONG US BOT')
	.setAuthor('Bot by Plaudible', 'https://i.imgur.com/QCdjWt9.png', 'https://github.com/plaudible')
	.setDescription('Help manual for Among Us Bot.')
  .addField('AVAILABLE COMMANDS', ' - !ping \n - !iloveyou \n - !start \n - !meeting \n - !breakout \n - !end \n - !kelvin \n - !alvin', true)
  .addField('HOW TO USE', ' **1.** Get all players in the "queue" channel. \n **2.** Type !start, have everyone pick their roles.\n **3.** Type !breakout to split the group. \n **4.** Type !meeting to regroup the group. \n **5.** Type !end to end the game.', true)
	.setThumbnail('https://i.imgur.com/uhQ67TA.png')
	.setImage('https://i.imgur.com/EdnnLfM.jpg')

// Initialize Discord Bot
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

bot.once('ready', () => {
	console.log('Among Us bot is active and online!');
});

bot.login('KEY-OMITTED');

bot.on('message', function (message) {
    // Listen for commands starting with !
	// ping
  if (message.content === '!ping') {
        message.channel.send('Pong.');
        console.log("Pinged");
    }
  // kelvin
  if (message.content === '!kelvin') {
          message.channel.send('Chong.');
          console.log("Chinged");
    }
	// alvin
	if (message.content === '!alvin') {
        message.channel.send('Chang.');
        console.log("Changed");
    }
	// ily
	if (message.content === '!iloveyou') {
        message.channel.send('*Kisses on the lips* uwu');
        console.log("Kissed");
    }
	// help
	if (message.content === '!help') {
        console.log("Sent help embed.");
        message.channel.send(embedhelp);
    }
	if (message.content === '!embed1') {
        console.log("Sent embed1.");
        message.channel.send(embed1).then(function(message){
			message.react('745363819852857436');
		});
		message.channel.send(embed2).then(function(message){
			message.react('745364028255109272');
		});
		message.channel.send(embed3).then(function(message){
			message.react('745395765051916348');
		});
    }
	if (message.content === '!embed2') {
        console.log("Sent embed2.");
        message.channel.send(embed2).then(function(message){
			message.react('745364028255109272');
		});
    }
	if (message.content === '!embed3') {
        console.log("Sent embed3.");
        message.channel.send(embed3).then(function(message){
			message.react('745395765051916348');
		});
    }
    //GAME START
	if (message.content === '!start') {
    console.log("Starting game.");
		message.channel.send('Starting game! Moving players...');
        const players = message.guild.roles.cache.find((role) => role.name === "Player");
		const playersmembers = players.members;
		playersmembers.forEach((member) =>{
      if (member.voice.channel){
			     member.voice.setChannel('744523647158583306');
      }
		});
	    message.channel.send('<@&745005162929848320>, please go to #select-role and react to your in-game role.');
    }
  //BREAK OUT
  if (message.content === '!breakout') {
      console.log("Breaking out.");
      message.channel.send('Moving to separate calls.');

      //disconnect the bot
      const channel = bot.channels.cache.get('746201404703637604');
      channel.join().then(connection => {
      console.log("Successfully disconnected.");

        }).catch(e => {
          console.error(e);
      });

      const players = message.guild.roles.cache.find((role) => role.name === "Player");
		  const playersmembers = players.members;

      var callNum = 1;

		  playersmembers.forEach((member) =>{
         if (member.voice.channel && member.roles.cache.has('744522907702657226') && !member.roles.cache.has('745815105656062082')){
            switch(true){
              case (callNum == 1):
                member.voice.setChannel('744523848799748137');
                callNum++;
              break;
              case (callNum == 2):
                member.voice.setChannel('744523920992108545');
                callNum++;
              break;
              case (callNum == 3):
                member.voice.setChannel('744523948665864223');
                callNum++;
              break;
              case (callNum == 4):
                member.voice.setChannel('744524016622108712');
                callNum++;
              break;
              case (callNum == 5):
                member.voice.setChannel('744524043771707452');
                callNum++;
              break;
              case (callNum == 6):
                member.voice.setChannel('744524069600493568');
                callNum++;
              break;
              case (callNum == 7):
                member.voice.setChannel('744524104404697179');
                callNum++;
              break;
              case (callNum == 8):
                member.voice.setChannel('744524105398616116');
                callNum++;
              break;
              default:
              break;
            }
         }
         if (member.voice.channel && member.roles.cache.has('744523016347582465')){
           member.voice.setChannel('744524169550495754');
         }
		  });
    }

  //MEETING
  if (message.content === '!meeting') {
    message.channel.send('Returning everyone to the meeting and playing audio.mp3.');
    const players = message.guild.roles.cache.find((role) => role.name === "Player");
    const playersmembers = players.members;

    var callNum = 1;

    //bot joins for music
    const channel = bot.channels.cache.get('744523647158583306');
    if (!channel) return console.error("The channel does not exist!");
      channel.join().then(connection => {
        console.log("Successfully connected.");
        const dispatcher = connection.play('audio.mp3');
        dispatcher.on("end", end => {channel.leave()});
      }).catch(e => {
        console.error(e);
    });



    playersmembers.forEach((member) =>{
       if (member.voice.channel && member.roles.cache.has('744522907702657226')){
          switch(true){
            case (callNum == 1):
              member.voice.setChannel('744523647158583306');
              callNum++;
            break;
            case (callNum == 2):
              member.voice.setChannel('744523647158583306');
              callNum++;
            break;
            case (callNum == 3):
              member.voice.setChannel('744523647158583306');
              callNum++;
            break;
            case (callNum == 4):
              member.voice.setChannel('744523647158583306');
              callNum++;
            break;
            case (callNum == 5):
              member.voice.setChannel('744523647158583306');
              callNum++;
            break;
            case (callNum == 6):
              member.voice.setChannel('744523647158583306');
              callNum++;
            break;
            case (callNum == 7):
              member.voice.setChannel('744523647158583306');
              callNum++;
            break;
            case (callNum == 8):
              member.voice.setChannel('744523647158583306');
              callNum++;
            break;
            default:
            break;
          }
       }
       if (member.voice.channel && member.roles.cache.has('744523016347582465')){
         member.voice.setChannel('744523647158583306');
       }
    });
    }

  //GAME END
	if (message.content === '!end') {
    message.channel.send('Game end! Returning players to queue and resetting roles...');

    const channel = bot.channels.cache.get('746201404703637604');
    channel.join().then(connection => {
    console.log("Successfully disconnected.");

      }).catch(e => {
        console.error(e);
    });
        const players = message.guild.roles.cache.find((role) => role.name === "Player");
		const playersmembers = players.members;

		playersmembers.forEach((member) =>{
      if (member.voice.channel){
			   member.voice.setChannel('744523632759406636')
			      .catch(console.error);
      }
      member.roles.remove("744523016347582465");
      member.roles.remove("744522907702657226");
      member.roles.remove("745815105656062082");
		});
    message.channel.send('Done. Thanks for playing! <3');
    }
});
//REACTION add
bot.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial){
      await reaction.message.fetch();
    }
    if (user.bot){
      return;
    }
    if (!reaction.message.guild){
      return;
    }
    if (reaction.message.channel.id === "745819590856278068"){
      if (reaction.emoji.name === 'red'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("744523016347582465");
        await reaction.message.reactions.cache.get('745363819852857436').remove().catch(error => console.error('Failed to remove reactions: ', error));
        await reaction.message.react('745363819852857436'); 


      }
      if (reaction.emoji.name === 'blue'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("744522907702657226");
        await reaction.message.reactions.cache.get('745364028255109272').remove().catch(error => console.error('Failed to remove reactions: ', error));
        await reaction.message.react('745364028255109272');

      }
      if (reaction.emoji.name === 'black'){
        await reaction.message.guild.members.cache.get(user.id).roles.add("745815105656062082");
        await reaction.message.reactions.cache.get('745395765051916348').remove().catch(error => console.error('Failed to remove reactions: ', error));
        await reaction.message.react('745395765051916348'); 


      }
    }

});
//REACTION remove
bot.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.partial){
      await reaction.message.fetch();
    }
    if (user.bot){
      return;
    }
    if (!reaction.message.guild){
      return;
    }
    if (reaction.message.channel.id === "745819590856278068"){
      if (reaction.emoji.name === 'red'){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("744523016347582465");
      }
      if (reaction.emoji.name === 'blue'){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("744522907702657226");
      }
      if (reaction.emoji.name === 'black'){
        await reaction.message.guild.members.cache.get(user.id).roles.remove("745815105656062082");
      }
    }

});
//ON JOIN
bot.on('guildMemberAdd', (guildMember) => {
   guildMember.roles.add('745005162929848320');
});

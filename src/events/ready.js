module.exports = client => {
    console.log(`Zalogowano jako ${client.user.tag}`);
    client.user.setActivity('Slowcraft.pl', { type: 'PLAYING'})
  };
  
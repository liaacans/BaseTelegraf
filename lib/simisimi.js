const axios = require('axios');

function simiHandler(bot) {
  bot.command(/\/simi (.+)/, (Ifaa, match) => {
    const question = match[1];
    const query = encodeURIComponent(question);
    const apiUrl = `https://api.lolhuman.xyz/api/simi?apikey=b2cd31437395ad125a839aec&text=${query}&badword=true`;
    axios.get(apiUrl)
      .then(response => {
        const answer = response.data.result;
        bot.sendMessage(Ifaa.chat.id, answer);
      })
      .catch(error => {
        console.log(error);
        bot.sendMessage(Ifaa.chat.id, 'Maaf, terjadi kesalahan saat mencari jawaban.');
      });
  });

  bot.command(/\/simi$/, (Ifaa) => {
    bot.sendMessage(Ifaa.chat.id, 'Contoh: /simi halo simi');
  });
}

module.exports = { simiHandler };
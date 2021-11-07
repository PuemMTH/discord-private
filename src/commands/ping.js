module.exports = {
  execute(message) {
    message.reply({ 
        ping: Math.round(message.client.ws.ping)
      })
      .catch(console.error);
  }
};